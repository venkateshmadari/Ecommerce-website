import React from 'react'
import preloader from '../assets/preloader.gif'
function Preloader() {
  return (
    // <div>Preloader</div>
    <div className="loader flex items-center justify-center h-[80vh]">
        <div className="h-[250px] flex items-center justify-center">
        <img src={preloader} alt="preloader" className='h-[100%] flex items-center justify-center'  />
        </div>
    </div>
  )
}

export default Preloader