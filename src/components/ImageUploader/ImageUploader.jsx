import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ImageUploader(){
    const dispatch = useDispatch();

    const [imageSelected, setImageSelected] = useState('')

    // useEffect(() => {
    //     getImages();
    //   }, []);
    
      
    //   const getImages = () => {
    //     dispatch({
    //       type: 'FETCH_IMAGES'
    //     })
    //   };
    
      const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "lpv0o9ul")
        dispatch({
            type: 'POST_IMAGE',
            payload: formData
        })
      };

    return(
        <>
        <h1>Test 1</h1>
        <input type="file" onChange={(event) => {setImageSelected(event.target.files[0]);}}/>
        <button onClick={uploadImage}>upload image</button>
        </>
    )
}

export default ImageUploader;