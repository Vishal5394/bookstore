import React from 'react';
import img  from "./book1.png";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';

const useStyle = makeStyles ({
   

    box: {
        width: '15vw',
        height:'auto',
        border:'1px solid #E2E2E2',
        display: 'flex',
        // flexWrap:'wrap',
        flexDirection:'column',
        justifyContent:'space-between',
        alignContent:'space-between',
        backgroundColor:'#F5F5F5',
       
    },
    ibox:{
        // border:'1px solid red',
        padding:'20px',
    },
    notes:{
        width:'100%',
        height:'90px',
        // border:'1px solid red',
        display:'flex',
        flexDirection:'column',
        // flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'flex-start',
        backgroundColor:'#FFFFFF',
        padding:'10px',
    },
    h1:{
        textAlign: 'left',
        font: 'normal normal normal 14px/19px Roboto',
        letterSpacing:'0px',
        color: '#0A0102',
        opacity: '1',
        // border:'1px solid green',
        // position:'relative',
        // left:'15px',
    },
    h6 : {
        textalign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1',
        // border:'1px solid green',
        // position:'relative',
        // top:'10px',
        // right:'100px',
    },
    h5:{
        background: '#388E3C 0% 0% no-repeat padding-box',
        borderRadius: '1px',
        opacity: '1',
        color:'#fff',
        textAlign:'center',
        height:'18px',
       
    },
    h4:{
        textAlign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1',
        // position:'relative',
        // top:'-20px',
        // left:'25px',
    },
    h3:{
        textAlign: 'left',
        font: 'normal normal bold 16px/20px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        opacity: '1',
        // position:'relative',
        // top:'0px',
        // right:'28px',
    },
    h2: {
        textAlign: 'left',
        textDecoration: 'line-through',
        font: 'normal normal normal 12px/16px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1',
        // position:'relative',
        // top:'8px',
        // right:'10px',
    },
    price:{
        width:'80px',
        // border:'1px solid green',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    rating:{
        width:'70px',
        // border:'1px solid green',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    }
})

function Books(props) {
    const classes = useStyle()
    const [sort, setSort] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setSort(event.target.value);
    };
    console.log(props.book)

    
    
    return (
                 
            <Box className={classes.box} >
                
                    <img className={classes.ibox} src={img} alt="img"/>
                    <Box className={classes.notes} item xs={4}>
                        <span className={classes.h1}>{props.book.bookName}</span>
                        <span className={classes.h6}>{props.book.author}</span>
                        <span className={classes.rating}>
                        <span className={classes.h5}>4.5 <StarBorderOutlinedIcon sx={{width: '10px', height: '10px'}}/></span>
                        <span className={classes.h4}>{props.book.quantity}</span>
                        </span>
                        <span className={classes.price}>
                        <span className={classes.h3}>{props.book.discountPrice}</span> 
                        <span className={classes.h2}>{props.book.price}</span>
                        </span>
                        
                    </Box>
           </Box> 
         
    );
}

export default Books;