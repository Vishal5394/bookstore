import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

const useStyle = makeStyles ({
    box:{
        // border: '1px solid red',
        width:'70.5vw',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent: 'space-between',
        position:'relative',
          left:"230px",
    },
    one: {
      width:'200px',
      height:'30px',
    //   border: '1px solid red',
  },
  name:{
    //   border: '1px solid red',
      textAlign: 'left',
      font: 'normal normal normal 25px/33px Roboto',
      letterSpacing: '0px',
      color: '#0A0102',
      opacity: '1',
 
  },
})

function Head() {
    const classes = useStyle();
    const [sort, setSort] = useState('');
    

    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
      };
    return (
        <Box className={classes.box}>
             <Box className={classes.name}>Books</Box>
             <FormControl   sx={{ m: 1, minWidth: 120 }} >
                <Select className={classes.one}
                value={sort}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value="">
                    <em>sort by relevance</em>
                </MenuItem>
                </Select>
            </FormControl> 
        </Box>
    );
}

export default Head;