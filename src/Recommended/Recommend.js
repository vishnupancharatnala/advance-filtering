import './Recommend.css'
import Button from '../components/Button.js';

const Recommend = ({HandleClick}) => {
  return (
    <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        <Button onClickHandler={HandleClick} value='' title='All Products'/>
        <Button onClickHandler={HandleClick} value='Nike' title = 'Nike'/>
        <Button onClickHandler={HandleClick} value='Adidas' title = 'Adidas'/>
        <Button onClickHandler={HandleClick} value='Puma' title = 'Puma'/>
        <Button onClickHandler={HandleClick} value='Vans' title = 'Vans'/>
      
      
      </div>
    </div>
    </>
  )
}

export default Recommend;
