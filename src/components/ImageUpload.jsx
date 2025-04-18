import React from 'react'

const ImageUpload = (props) => {
  const ShowImageHandler=(e)=>{
    const file=e.target.files[0]
    if(file){
      props.uploadImageHandler(file)
    }
  }
  return (
    <div className='bg-white shadow-2xl rounded-2xl p-6 w-full max-w-2xl'>
        <label htmlFor='fileinput' className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-2
    text-center hover:border-blue-500 transition-all'>
            <input type='file' id='fileinput' className='hidden' onChange={ShowImageHandler}></input>
            <span className='text-lg font-medium text-gray-600'>click or drag Image</span>

        </label>
    </div>
  )
}

export default ImageUpload