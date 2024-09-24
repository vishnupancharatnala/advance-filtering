import './Category.css'
import Input from '../../components/Input.js'
const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>
      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test'/>
          <span className='checkmark'></span>All
      </label>

      <Input
      handleChange={handleChange}
      value='sneakers'
      title='Sneakers'
      name='test'/>

      <Input
      handleChange={handleChange}
      value='flats'
      title='Flats'
      name='test'/>

      <Input
      handleChange={handleChange}
      value='sandals'
      title='Sandals'
      name='test'/>

      <Input
      handleChange={handleChange}
      value='heels'
      title='Heels'
      name='test'/>





      </div>



      {/* <div>
        <label className='sidebar-label-container'>
              <input type='radio' name='test'/>
              <span className='checkmark'></span>All
        </label>
      </div> */}

      {/* <div>
        <label className='sidebar-label-container'>
              <input type='radio' name='test'/>
              <span className='checkmark'></span>Sneakers
        </label>
      </div> */}

      {/* <div>
        <label className='sidebar-label-container'>
              <input type='radio' name='test'/>
              <span className='checkmark'></span>Flats
        </label>
      </div> */}

      {/* <div>
        <label className='sidebar-label-container'>
              <input type='radio' name='test'/>
              <span className='checkmark'></span>Sandals
        </label>
      </div> */}

      {/* <div>
        <label className='sidebar-label-container'>
              <input type='radio' name='test'/>
              <span className='checkmark'></span>Heels
        </label>
      </div> */}
    </div>
  )
}

export default Category
