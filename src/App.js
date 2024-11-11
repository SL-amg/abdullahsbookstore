
import './App.css';
import storeimage from "./istockphoto-874114336-612x612.jpg"     /* to add image .. add image in src and then write import -name- then from "location" */
import products from './products'; /* to import the array from products.js */
import ProductItem from './Components/ProductItem'; /* to import the component from productitem.js */

function App() {

  {/* this is JS area Note to my self */}

  const productList = products.map((product, index) => { 
    return ( <ProductItem myItemsToBeSold={product}/> // make sure u use the same prop name as in productitem (myItemsToBeSold)
    );
  });


  {/* this is JSX area Note to my self */}

  return (

    <div className="MainPageBody">    {/* always use classname not class to avoid conflex in future */}
      <div> {/* the main header */}
        <h1 className="mainHeading">Abdullah's BookStore</h1>
        <h3 className="mainHeading">Best place to Learn</h3>
        <p className="mainHeading">This is a book store created by Abdullah Salah Al Abbas </p>
      </div>
      <div>   {/* The main picture Div */}
        <img className="imageDim" src={storeimage} alt='Bookstore front picture'></img>   {/* to call picture we use src={-name-} */}
      </div>


      {/* The products Div updated from a component */}
      <div className='ProductsList'>
        {productList} {/* this is important to call the function at top JS file */}
      </div>

    </div>

  );
}

export default App;