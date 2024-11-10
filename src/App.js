
import './App.css';
import storeimage from"./istockphoto-874114336-612x612.jpg"     /* to add image .. add image in src and then write import -name- then from "location" */

function App() {
  return (

<body>
<div className="body">    {/* always use classname not class to avoid conflex in future */}
      {/* the main header */}
      <h1 className="mainHeading">Abdullah's BookStore</h1>
      <h3 className="mainHeading">Best place to Learn</h3>
      <p className="mainHeading">This is a book store created by Abdullah Salah Al Abbas</p>
      {/* The picture */}
      <img className="imageDim" src={storeimage} alt='Bookstore front picture'></img>   {/* to call picture we use src={-name-} */}
    </div>


</body>

  );
}

export default App;
