import { useEffect, useState } from 'react'
import './App.css'
import ImageUploader from './components/ImageUploader'
import ImageUploaderLight from './components/ImageUploaderLight'
import ImageUploaderNeon from './components/ImageUploaderNeon'

function App() {

  const [formStyle, setFormStyle] = useState(0); // 0, 1, 2

useEffect(() => {
  const handleKey = (e) => {
    if (e.altKey && e.key.toLowerCase() === 'q') {
      setFormStyle((prev) => (prev + 1) % 3); // cycle through 3 styles
    }
  };
  window.addEventListener('keydown', handleKey);
  return () => window.removeEventListener('keydown', handleKey);
}, []);


  return (
    <>
      {formStyle === 0 && <ImageUploader/>}
    {formStyle === 1 && <ImageUploaderLight/>}
    {formStyle === 2 && <ImageUploaderNeon/>}
    </>
  )
}

export default App
