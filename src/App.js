
import './App.css';
import storeimage from"./istockphoto-874114336-612x612.jpg"

function App() {
  return (


    <div className="mainbody">    {/* always use classname not class to avoid conflex in future */}
      {/* the main header */}
      <h1 className="mainheading">Abdullah's BookStore</h1>
      <h3 className="mainheading">Best place to Learn</h3>
      <p className="mainheading">This is a bookstore created by Abdullah Salah Al Abbas</p>
      {/* The picture */}
      <img className="picture" src={storeimage} alt='Bookstore front picture'></img>
    </div>
  );
}

export default App;
