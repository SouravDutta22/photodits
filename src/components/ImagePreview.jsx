import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  const handleDownload = () => {
    if(props.enhanced){
      const link=document.createElement('a')
      link.href=props.enhanced
      link.download="new_image"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  };

  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>Original Image</h2>
        {props.uploaded? <img src={props.uploaded} alt='' className='w-full h-full object-cover'/>
         :<div className='flex items-center justify-center h-80 bg-gray-300'>No Image Selected</div>}
      </div>
      
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>Enhanced Image</h2>
        {props.enhanced && !props.loading && (
          <div className="relative">
            <img src={props.enhanced} alt='' className='w-full h-full object-cover'/>
            <button 
              onClick={handleDownload}
              className="absolute bottom-5 right-5 bg-blue-600 hover:bg-blue-800
               text-white px-4 py-3 rounded-lg text-md cursor-pointer"
            >
              download
            </button>
          </div>
        )}
        
        {props.loading ? (
          <Loading />
        ) : (
          !props.enhanced && (
            <div className='flex items-center justify-center h-80 bg-gray-300'>No Enhanced Image</div>
          )
        )}
      </div>
    </div>
  )
}

export default ImagePreview