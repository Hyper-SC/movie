import './movie-list-item.css'

const Movielistitem = () => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span className='list-group-item-label'>Empirel of 0sman</span>
        <input type="number" className='list-group-item-input' defaultValue='989'/>
        <div className='justify-content-center align-item-center'>
            <button type='button' className='btn-cookie btn-sm'>
                <i className='fas fa-cookie'></i>
            </button>
            <button type='button' className='btn-trash btn-sm'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    </li>
  )
}

export default Movielistitem