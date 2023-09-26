
/* button-register-login */

const createUser = document.querySelector(".container-create");
const loginUser = document.querySelector(".container-in");
const buttonCreateUser = document.getElementById("icono.account");
const buttonLoginUser = document.getElementById("icono.login");


const openUser = ()=>{
    buttonCreateUser.addEventListener('click', (evt)=> {
        evt.preventDefault()
        createUser.style.display="block"
    })
    buttonCreateUser.addEventListener('click', (evt)=>{
        evt.preventDefault()
        loginUser.style.display="none"
    })
}
const openUserlogin = ()=>{
    buttonLoginUser.addEventListener('click', (evt)=> {
        evt.preventDefault()
        loginUser.style.display="block"
    })
    buttonLoginUser.addEventListener('click', (evt)=>{
        evt.preventDefault()
        createUser.style.display="none"
    })
}


/* container-register */
const containerProduct = document.querySelector(".container-product")
const buttonProduct = document.querySelector(".create-product")
const containerLogin = document.querySelector(".container")

const openProduct = ()=>{
    buttonProduct.addEventListener('click', (evt)=> {
        evt.preventDefault()
        containerProduct.style.display="block"
    })
    buttonProduct.addEventListener('click', (evt)=> {
        evt.preventDefault()
        containerLogin.style.display="none"
    })
} 
/* container-login */


/* edit product */


openedit = async()=>{
    try{ 
        const editbutton = document.getElementById("editproduct")
        const editProductList = document.querySelector('.editProductList')
        editbutton.addEventListener('click', (evt)=> {
            evt.preventDefault()
            editProductList.style.display="block"
            })
       
   
} catch(error) {

}
}
closeEdit = ()=>{
    const exitEdit = document.querySelector('.exitEdit')
    exitEdit.addEventListener('click', (evt)=>{
        evt.preventDefault()
        editProductList.style.display="none"
        }) 
}

/* ProductsList */

const buttonLinst = document.querySelector('.list-product');
const cardList = document.querySelector('.product-List')

const openList = ()=>{
    buttonLinst.addEventListener('click', (evt)=> {
        evt.preventDefault()
        cardList.style.display="block"
    })
    buttonLinst.addEventListener('click', (evt)=>{
        evt.preventDefault()
        createUser.style.display="none"
    })
}


const ListsProducts = async ()=> {
    try {
      const aProduct = await fetch('/api/product');
      const data = await aProduct.json();
      //console.log(data);
      //Response accede al arreglo
      const responseArray = data.response;
      //console.log(responseArray)
      
      //carga de datos
      const listProduct = document.querySelector('.product-List');//contenedor
  
      ollList = (list)=>{
      const articulo = document.createElement('article');//crear contenedor articulo
      
      const img = document.createElement('img');//crea imagen
      const name = document.createElement('h3');//crea texto
      const description = document.createElement('p');
      const cost = document.createElement('p');
      const edit = document.createElement('button')

      edit.textContent = 'Edit'
      edit.id = 'editproduct'
      edit.onclick = openedit()
      
      const textname = document.createTextNode(list.name);//texto para la imagen
      const textdescription = document.createTextNode(list.description);//texto para la imagen
      const textcost = document.createTextNode(list.cost);//texto para la imagen
  
      img.src = list.image//le ponemos imagen a src
      name.appendChild(textname);//le ponemos el texto creado a name
      description.appendChild(textdescription);
      cost.appendChild(textcost)
  
      articulo.appendChild(img);//dentro de articulo ponemos ina img
      articulo.appendChild(name);//dentro de articulo ponemos un nombre
      articulo.appendChild(description);
      articulo.appendChild(cost);
      articulo.appendChild(edit);
  
      listProduct.appendChild(articulo);//dentro del contenedor ponemos articulo
      }
      
      responseArray.forEach(ollList);//extraemos la info del array, y la usamos en la funcion cardProductImage
  
    } catch (error) {
      //console.error('Error:', error);
  }
    }
    ListsProducts()
    