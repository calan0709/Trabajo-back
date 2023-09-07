
/* ProductsRender */

const productCard = async ()=> {
  try {
    const aProduct = await fetch('/api/product');
    const data = await aProduct.json();
    console.log(data);
    //Response accede al arreglo
    const responseArray = data.response;
    console.log(responseArray)
    
    //carga de datos
    const imgList = document.querySelector('.cardProduct');
    cardProductImage = (productImg)=>{
    const articulo = document.createElement('article');
    
    const img = document.createElement('img');
    const name = document.createElement('h3');
   
    const textname = document.createTextNode(productImg.name);

    img.src = productImg.image
    name.appendChild(textname)

    articulo.appendChild(img);
    articulo.appendChild(name);

    imgList.appendChild(articulo);
    }
    
    responseArray.forEach(cardProductImage);

  } catch (error) {
    //console.error('Error:', error);
}
  }
  productCard()


