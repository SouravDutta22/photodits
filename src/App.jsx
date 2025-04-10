import Home from './components/Home';
const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8 py-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2 mt-4'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-500 m-3'>Let AI enhance your image</p>
       </div>
      <Home />
      <div className='text-sm text-gray-500 mt-6'>
           powerd by PicWish API
      </div>
   </div>
    
  )
}

export default App;

