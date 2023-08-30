
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

const listProduct = document.querySelector("list-product");

/* button-account-login */

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



/* ProductsRender */

//const productCard = fetch('/api/product');

const productCard = async ()=> {
    try {
      const aProduct = await fetch('/api/product');
      const data = await aProduct.json();
      console.log(data);
      
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  productCard();
console.log(productCard())
/* ProductsList */

const buttonLinst = document.querySelector('.list-product');
const cardList = document.querySelector('.list.products')

const openList = ()=>{

}
/* const productList = ()=>{
    document.querySelector('list.products').innerHTML='
    <ul>
    <li>"Nombre :" ${datanombre}</li>
    <li>"Apellido :" ${dataapellido}</li>
    <li>"DNI :" ${datadni}</li>
    <li>"Email :" ${datamail}</li>
    <li>"Destino :" ${dataviaje}</li>
    <li>"Metodo de pago :" ${metododepago}</li>
    </ul>
    ' */