produtos =  []
let preco = []
const postDB = (lista_compras) => {
  localStorage.setItem("lista-de-compras", JSON.stringify(lista_compras))
  return lista_compras
}

const getDB = () => {
  let lista_compras = JSON.parse(localStorage.getItem('lista-de-compras') ?? '[]');
  return lista_compras
}

const adcionar = (nome, preco) => {
  let DB = getDB();
  for (let i = 0; i < 1 ; i++) {
      DB.push({"id": produtos.length, "nome": nome, "preco":preco})
      postDB(DB);        
   }
}

const excluir = (item) => {
  let itensRemove = getDB().filter((produtos) => produtos.nome !== item)
  postDB(itensRemove)
}

const editar = (item, itemEditado, moneyEdite, itemValue) => {
  let array = getDB().map((produtos) => {
      if (produtos.nome === item && Number(produtos.preco) === moneyEdite) {
          produtos.nome = itemEditado
          produtos.preco = itemValue
      }
      return produtos
  })
  
  postDB(array);
}

const render = () =>{

 
  let DB = getDB().map((element) => {

    let itemList = document.getElementById('itemList');
    let id = "Produto" + element.length
    let idMoney = "Money" + element.length
    var newItem = document.createElement('li');
    newItem.className = 'item';

    let itemContent = document.createElement('div');
    itemContent.className = 'item-content';
    itemContent.innerHTML = `<i class="fa-solid fa-wallet" style="color: #fff;"></i>
    <p id=${id} class="itens">` + element.nome + '</p>';
    

    let moneyElement = document.createElement('p');
    moneyElement.className = 'money';
    moneyElement.id = idMoney
    moneyElement.textContent = element.preco;

    let itemActions = document.createElement('div');
    itemActions.className = 'item-actions';
    itemActions.innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: #00a81c;"></i>' +
      '<i class="fa-solid fa-trash" style="color: #d60000;"></i>';

    itemActions.querySelector('.fa-trash').addEventListener('click', function () {
      let item = document.getElementById(id).textContent
      excluir(item);
      deleteItem(newItem);
    });

    itemActions.querySelector('.fa-pen-to-square').addEventListener('click', function () {
      let itemEditar = document.getElementById(id).textContent
      let moneyEdite = Number(document.getElementById(idMoney).textContent)
     
      editItem(itemContent, itemEditar, moneyEdite);
    });

    newItem.appendChild(itemContent);
    newItem.appendChild(moneyElement);
    newItem.appendChild(itemActions);

    itemList.appendChild(newItem);


    document.getElementById('item').value = '';
  })
  
  return DB;
}
render()

document.getElementById('add').addEventListener('click', function () {
  addItemToList();
  
});

function addItemToList() {
  var newItemText = document.getElementById('item').value;
  
  if (newItemText.trim() !== '') {
   
    var itemList = document.getElementById('itemList');
    let id = "Produto" + getDB().length
    let idMoney = "Money" + getDB().length
    var newItem = document.createElement('li');
    newItem.className = 'item';

    var itemContent = document.createElement('div');
    itemContent.className = 'item-content';
    itemContent.innerHTML = `<i class="fa-solid fa-wallet" style="color: #fff;"></i>
    <p id=${id} class="itens">` + newItemText + '</p>';
    

    var moneyElement = document.createElement('p');
    moneyElement.className = 'money';
    moneyElement.id = idMoney
    moneyElement.textContent = 0.00;

    var itemActions = document.createElement('div');
    itemActions.className = 'item-actions';
    itemActions.innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: #00a81c;"></i>' +
      '<i class="fa-solid fa-trash" style="color: #d60000;"></i>';
    
    adcionar(newItemText, moneyElement.textContent)

    itemActions.querySelector('.fa-trash').addEventListener('click', function () {
      let item = document.getElementById(id).textContent
      excluir(item);
      deleteItem(newItem);
    });

    itemActions.querySelector('.fa-pen-to-square').addEventListener('click', function () {
      let itemEditar = document.getElementById(id).textContent
      let moneyEdite = Number(document.getElementById(idMoney).textContent)
     
      editItem(itemContent, itemEditar, moneyEdite);
    });

    newItem.appendChild(itemContent);
    newItem.appendChild(moneyElement);
    newItem.appendChild(itemActions);
    itemList.appendChild(newItem);

    document.getElementById('item').value = '';
  }
}

function deleteItem(item) {
  var itemList = document.getElementById('itemList');
  itemList.removeChild(item);
}

function editItem(itemContent, itemEditar, moneyEdite ) {
  var itemName = prompt('Editar Nome:', itemContent.querySelector('.itens').textContent);
  var itemValue = Number(prompt('Editar Valor:', itemContent.nextElementSibling.textContent));  
  /*preco.push(itemValue)
  console.log(preco)*/
  editar(itemEditar, itemName, moneyEdite, itemValue)
  
  if (itemName !== null && itemName.trim() !== '') {
    itemContent.querySelector('.itens').textContent = itemName;
    itemContent.nextElementSibling.textContent = itemValue || 'R$0,00';
  }
}