import React from 'react'
import {TextField} from '@mui/material'
const Input = (props) => {
        const {placeholder,type, id, onChange,required, style } = props
      return (
        <TextField 
        required={required}
        placeholder={placeholder}
        type={type}
        id={id}
        onChange={onChange}
        style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
         />
      )
    }

export default Input