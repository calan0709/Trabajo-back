
/* ProductsRender */

const productsCard = async ()=> {
    try {
      const aProduct = await fetch('/api/product');
      const data = await aProduct.json();
      
      const responseArray = data.response;
      
      //carga de datos
      const productList = document.querySelector('.containerProducts');//contenedor
  
      cardOfProducts = (listPproduct)=>{
      const articulo = document.createElement('article');
      const img = document.createElement('img');
      const name = document.createElement('h3');
      const description = document.createElement('p');
      const cost = document.createElement('p');
      const buy = document.createElement('button')

     
      const textname = document.createTextNode(listPproduct.name);
      const textdescription = document.createTextNode(listPproduct.description);
      const textcost = document.createTextNode(listPproduct.cost);
  
      img.src = listPproduct.image
      name.appendChild(textname);
      description.appendChild(textdescription);
      cost.appendChild(textcost)
  
      articulo.appendChild(img);
      articulo.appendChild(name);
      articulo.appendChild(description);
      articulo.appendChild(cost);
      articulo.appendChild(buy);
  
      productList.appendChild(articulo);
      }
      
      responseArray.forEach(cardOfProducts);
  
    } catch (error) {
      //console.error('Error:', error);
  }
    }
    productsCard()