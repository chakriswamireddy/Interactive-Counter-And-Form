import { Grid2, Typography } from '@mui/material';
import React from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css";

function RichTextEditor() {


    
  return (
    <Grid2 item border={0} borderRadius={2} mt={1} pb={1} size={{ xs: 10 , sm:6 }}   boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'    >
        <Typography mb={1} textAlign='center'> Rich Text Editor </Typography>
        <ReactQuill value={''} style={{width:'100%', maxWidth:'350px', borderBottom:'0px solid yellow'}} 
          modules={{toolbar:true}}
        />

        <style>
        {`
          .ql-container {
            border: 1px solid #47A8BD !important;
            width: 95%;
            place-content: center;
            margin: 0 auto;
            // border-top: none !important; /* Ensures toolbar is not affected */
          }
        `}
        </style>


    </Grid2>
  )
}

export default RichTextEditor