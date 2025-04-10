import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/enhancedImageApi'
const Home = () => {
  const [uploadImage,setUploadImage]=useState(null);
  const [enhancedImage,setEnhancedImage]=useState(null);
  const [loading,setLoading]=useState(false);

  const uploadImageHandler=async(file)=>{
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
    try{
       
      const enhancedURL=await enhancedImageAPI(file)
      setEnhancedImage(enhancedURL)
      setLoading(false)
    }
    catch(error){
        alert("Sorry AI failed to enhance your Image")
    }

  }
  return (
    <>
        <ImageUpload uploadImageHandler={uploadImageHandler} />
        <ImagePreview
           loading={loading}
           uploaded={uploadImage}
           enhanced={enhancedImage?.image}
         />
    </>
  )
}

export default Home