
import './App.css';
import storeimage from "./istockphoto-874114336-612x612.jpg"     /* to add image .. add image in src and then write import -name- then from "location" */
import products from './products'; /* to import the array from products.js */

function App() {

  const productList = products.map((product) => { /* to map the products arrays using product variable */ 
    return (
      <div className='BookContainer'> {/* one div in map */}
        <img className='BookPoster' src={product.image} alt={product.name}></img> {/* to call produt image, we use product.image not products */}
        <h3 className='BookInfo'>{product.name}</h3>
        <p className='BookInfo' >{product.price}</p>
      </div>
    );
  });



  return (

    <div className="MainPageBody">    {/* always use classname not class to avoid conflex in future */}
      <div> {/* the main header */}
        <h1 className="mainHeading">Abdullah's Book Store</h1>
        <h3 className="mainHeading">Best place to Learn</h3>
        <p className="mainHeading">This is a book store created by Abdullah Salah Al Abbas as</p>
      </div>
      <div>   {/* The main picture Div */}
        <img className="imageDim" src={storeimage} alt='Bookstore front picture'></img>   {/* to call picture we use src={-name-} */}
      </div>

      {/* The products Div updated from Array and Map in JS area */}
      <div className='ProductsList'>
        {productList}
      </div>

    </div>

  );
}

export default App;


// this is part 2 task as refreance for me only not to be graded please 

{/* <div className='BookContainer'> /* first book 
<div >/* first book picture
  <img className='BookPoster' src={products[0].image} alt ={products[0].name}></img>
</div>
<div className='BookInfo'>/* first book details and price*
<h3 >{products[0].name}</h3>
<p >{products[0].price}</p>
</div> 
</div> */}

{/* <div className='BookContainer'> /* Second book 
        <div >/* second book picture*
            <img className='BookPoster' src={products[1].image} alt ={products[1].name} ></img>
          </div>
          <div className='BookInfo'>/* Second book details and price
          <h3 >{products[1].name} </h3> /* to call second one we uses object[ref].name
          <p >{products[1].price}</p>
          </div> 
        </div>  */}