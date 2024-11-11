import React from 'react'


const ProductItem = (props) => {
  return (
    <div className='BookContainer'>
      <img className='BookPoster' src={props.myItemsToBeSold.image} alt={props.myItemsToBeSold.name}></img> {/* to call produt image, we use product.image not products */}
        <h3 className='BookInfo'>{props.myItemsToBeSold.name}</h3>
        <p className='BookInfo' >{props.myItemsToBeSold.price}</p>
    </div>
  )
}
// we have to use props (props) as a naming convntion but we can use anything we need (not recommended)
// the prop name can be called what ever we need but must be used the same in app.js for example we used myItemsToBeSold
export default ProductItem
