import React from 'react'


const ProductItem = () => {
  return (
    <div className='BookContainer'>
      <img className='BookPoster' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aducgTJ2RORwcAj7Ij6kS8-ppLuY9LDQ7Q&s" alt="batman"></img> {/* to call produt image, we use product.image not products */}
        <h3 className='BookInfo'>Batman From Components</h3>
        <p className='BookInfo' >1000 KD</p>
    </div>
  )
}

export default ProductItem
