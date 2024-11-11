
import './App.css';
import storeimage from "./istockphoto-874114336-612x612.jpg"     /* to add image .. add image in src and then write import -name- then from "location" */
import products from './products'; /* to import the array from products.js */

function App() {
  return (


    <div className="MainPageBody">    {/* always use classname not class to avoid conflex in future */}
      <div> {/* the main header */}
        <h1 className="mainHeading">Abdullah's BookStore</h1>
        <h3 className="mainHeading">Best place to Learn</h3>
        <p className="mainHeading">This is a book store created by Abdullah Salah Al Abbas as</p>
      </div>
      <div>   {/* The picture Div */}
        <img className="imageDim" src={storeimage} alt='Bookstore front picture'></img>   {/* to call picture we use src={-name-} */}
      </div>


      <div className='ProductsList'> {/* Products Div consisi of 2 main divs one for each item*/}

          {products.map((product)=>
          (
            <div className='BookContainer'>
            <img className='BookPoster' src={product.image} alt ={product.name}></img>
            <h3 className='BookInfo'>{product.name}</h3>
            <p className='BookInfo' >{product.price}</p>
          </div>
          )
           
        )}

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