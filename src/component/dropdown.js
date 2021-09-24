import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Dropdown = (props) => {
    const data = require('../data.json')
    const objectChangeHandler=(e,value)=>{
      props.parrentCallBack(value)
    }
    return (
        <Autocomplete
            id="combo-box-demo"
            className="dropdown"
            options={data}
            getOptionLabel={(option) => option.objectName}
            onChange={objectChangeHandler}
            renderInput={(params) => <TextField {...params} variant="outlined" required={true} placeholder="Select Object" />}
        />
    )
}

export default Dropdown
