produtos =  [
    {
        "id" : 0,
        "nome": "Tomate",
        "preco": 5.00,
        "tipo":"verdura"
    },
    {
        "id" : 1,
        "nome": "Cenoura",
        "preco": 6.00,
        "tipo":"verdura"
    },
    {
        "id": 2,
        "nome": "Pepino",
        "preco": 3,
        "tipo":"verdura"

    },
]

const getDB = () => {
    let lista_compras = JSON.parse(localStorage.getItem('lista-de-compras') ?? '[]');
    return lista_compras
}
 
const postDB = (lista_compras) => {
    localStorage.setItem("lista-de-compras", JSON.stringify(lista_compras))
    return lista_compras
}


postDB(produtos)


/*const render = () => {
    const DB = getDB();
    DB.forEach((item,indice) => {
        createItem(id, nome, valor)
    });
} */

const adcionar = (nome, preco, tipo) => {
    for (let i = 0; i < 1 ; i++) {
         produtos.push({"id": produtos.length, "nome": "banana", "preco":3, "tipo": "fruta"})
         postDB(produtos)   
     }
}

adcionar();


const filtrar = ( nome ) => {
    const filtro = getDB().filter((element) => element.nome === nome)
    return filtro
   

}

filtrar("banana");

const excluir = (item) => {
    let itensRemove = getDB().filter((produtos) => produtos.nome !== item)
    postDB(itensRemove)
    
}


excluir("banana")

const editar = () => {
    
}



/*const editar = (id, nome, preco, tipo) => {
    let attDados =  getDB();
    console.log(attDados)
    let edit = {}
    for (let i = 0; i < 1; i++) {
        if (attDados.id === id) {
            edit = attDados[i]
            edit.nome = nome
            edit.preco = preco
            edit.tipo = tipo
        }
 
     }

     
    
    
    

    postDB(attDados)
} */

//editar(1, "cebola", 7, "verdura");

//console.log(getDB());
//console.log(getDB());

//postDB(produtos = [{"id": produtos.lenght, "nome":"banana", "preco": 3, "tipo":"fruta"}])

//console.log(getDB());








































/*


{
            "id" : 1,
            "verdura": "Tomate",
            "preco": 5.00,

            },
        
            {
            "id" : 2,
            "verdura": "Cenoura",
            "preco": 6.00
             }
        ,
        "frutas": 
            {
                
            }

*/

/*postDB(produtos = [ {
    "id": produtos.length,
    "nome":"banana",
    "preco":3,
    "tipo":"frutas"
}]) */

/*postFormDB = (nome,  preco) => {
    postDB({nome, preco})
}*/
/*
for (const key in getDB()) {
   console.log(getDB()[key].verduras[key].verdura)
} */
/*getDB().forEach((element, indice) => {
    console.log(element[2].nome)
});
*/
/*for (const key in getDB()) {
    console.log(getDB()[key][key])
} */
//console.log(getDB()[0].verduras[0])
   
/*const render = () => {
    const DB = getDB();
    DB.forEach((item,indice) => {
        createItem(id, nome, valor)
    });
} */


/*fetch("data.json").then((Response) => {
    Response.json().then((verduras) => {
        console.log(verduras);
    })
}) */