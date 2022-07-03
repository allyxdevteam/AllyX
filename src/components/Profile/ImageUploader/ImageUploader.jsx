import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Input } from '@mui/material';


function ImageUploader({ user }) {
  const dispatch = useDispatch();

  const [imageSelected, setImageSelected] = useState('');

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "lpv0o9ul")
    dispatch({
      type: 'POST_IMAGE',
      payload: formData
    })
  };

  return (
    <Box>
      <Button
        variant="contained"
        component="label"
      >
        Choose a picture
        <input
          type="file"
          hidden
          onChange={(event) => { setImageSelected(event.target.files[0]) }}
        />
      </Button>
      {/* <Input type="file" onChange={(event) => { setImageSelected(event.target.files[0]); }} /> */}
      <Button onClick={uploadImage}>upload image</Button>
    </Box>
  )
}

export default ImageUploader;