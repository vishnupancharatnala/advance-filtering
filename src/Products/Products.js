// import { AiFillStar } from 'react-icons/ai';
// import { BsFillBagHeartFill } from 'react-icons/bs';
import Card from '../components/Card.js';



import  './Products.css';

const Products = ({result}) => {
  return (
    <>
    <section className='card-container'>
      {result}
      {/* <section className='card'>
        <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt='shoe' className='card-img'/>
        <div className='card-details'>
          <h3 className='card-title'>shoe</h3>
          <section className='card-reviews'>
            <AiFillStar className='ratings-star'/><AiFillStar className='ratings-star'/><AiFillStar className='ratings-star'/><AiFillStar className='ratings-star'/>
            <span className='total-reviews'>4</span>
          </section>
        <section className='card-price'>
          <div className='price'>
            <del>$300</del>200
          </div>
          <div className='bag'>
            <BsFillBagHeartFill className='bag-icon'/>
          </div>

        </section>
        </div>

      </section> */}

      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
      


    </section>
      
    </>
  )
}

export default Products;
