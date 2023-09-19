
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

      articulo.dataset.listPproduct = listPproduct.code
console.log(listPproduct.code)
      const img = document.createElement('img');
      const name = document.createElement('h3');
      const description = document.createElement('p');
      const cost = document.createElement('p');
      const stock = document.createElement('p');
      const buy = document.createElement('button')
     
      const textname = document.createTextNode(listPproduct.name);
      const textdescription = document.createTextNode(listPproduct.description);
      const textcost = document.createTextNode(listPproduct.cost);
      const textStock = document.createTextNode(listPproduct.stock);
  
      buy.textContent = 'comprar';
      /* buy.addEventListener('click',buyproduct); */

      img.src = listPproduct.image
      name.appendChild(textname);
      description.appendChild(textdescription);
      cost.appendChild(textcost);
      stock.appendChild(textStock);
  
      articulo.appendChild(img);
      articulo.appendChild(name);
      articulo.appendChild(description);
      articulo.appendChild(cost);
      articulo.appendChild(buy);
      articulo.appendChild(stock);
  
      productList.appendChild(articulo);
      }
      
      responseArray.forEach(cardOfProducts);
  
    } catch (error) {
      //console.error('Error:', error);
  }
    }
    productsCard()