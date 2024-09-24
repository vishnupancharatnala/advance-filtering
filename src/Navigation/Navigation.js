import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart,AiOutlineUserAdd } from 'react-icons/ai';
import './Navigation.css';

const Navigation = ({query,handleInputChange}) => {
  return (
    <nav>
      <div className='nav-container'>
          <input type='text'
          className='search-input'
          placeholder='Enter your search'
          value={query} onChange={handleInputChange}/>
      </div>

      <div className='profile-container'>
        <a href='#'>
          <FiHeart className='nav-icons'/>
        </a>

        <a href='#'>
          <AiOutlineShoppingCart className="nav-icons"/>
          </a>
        
        <a href='#'>
          <AiOutlineUserAdd className='nav-icons'/>
        </a>

      </div>
    </nav>
  )
}

export default Navigation
