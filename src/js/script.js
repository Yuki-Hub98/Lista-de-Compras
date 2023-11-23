document.getElementById('add').addEventListener('click', function () {
  addItemToList();
});

function addItemToList() {
  var newItemText = document.getElementById('item').value;

  if (newItemText.trim() !== '') {
    var itemList = document.getElementById('itemList');

    var newItem = document.createElement('li');
    newItem.className = 'item';

    var itemContent = document.createElement('div');
    itemContent.className = 'item-content';
    itemContent.innerHTML = '<i class="fa-solid fa-wallet" style="color: #fff;"></i>' +
      '<p class="itens">' + newItemText + '</p>';

    var moneyElement = document.createElement('p');
    moneyElement.className = 'money';
    moneyElement.textContent = 'R$0,00';

    var itemActions = document.createElement('div');
    itemActions.className = 'item-actions';
    itemActions.innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: #00a81c;"></i>' +
      '<i class="fa-solid fa-trash" style="color: #d60000;"></i>';

    // Adiciona a função de exclusão ao ícone de lixeira
    itemActions.querySelector('.fa-trash').addEventListener('click', function () {
      deleteItem(newItem);
    });

    // Adiciona a função de edição ao ícone de edição
    itemActions.querySelector('.fa-pen-to-square').addEventListener('click', function () {
      editItem(itemContent);
    });

    newItem.appendChild(itemContent);
    newItem.appendChild(moneyElement);
    newItem.appendChild(itemActions);

    itemList.appendChild(newItem);

    // Limpa o campo de entrada após adicionar o item
    document.getElementById('item').value = '';
  }
}

function deleteItem(item) {
  var itemList = document.getElementById('itemList');
  itemList.removeChild(item);
}

function editItem(itemContent) {
  var itemName = prompt('Editar Nome:', itemContent.querySelector('.itens').textContent);
  var itemValue = prompt('Editar Valor:', itemContent.nextElementSibling.textContent);

  if (itemName !== null && itemName.trim() !== '') {
    itemContent.querySelector('.itens').textContent = itemName;
    itemContent.nextElementSibling.textContent = itemValue || 'R$0,00';
  }
}