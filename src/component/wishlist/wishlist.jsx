import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import img  from "../book01/Image 1@2x.png";
import { makeStyles } from "@mui/styles";
import { useState, useEffect} from "react";
import {getWishlist} from '../services/dataservices'
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../header/header';
import {RemoveBookFromWishlist} from '../services/dataservices';
import Button from '@mui/material/Button';


const useStyle= makeStyles({
    orderhead:{
        width:'100vw',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        alignContent:'space-between',
        alignItems:'center',
        justifyContent:'space-evenly',
        // border:'1px solid red',
    },
    firstone:{
        width:'70vw',
        height:'auto',
        border: '1px solid #DBDBDB',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignContent:'space-between',
        alignItems:'center',
    },
    ordermain:{
        width:'90%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        border:'1px solid #DBDBDB',
        textAlign:'left',
    },
    orderone:{
        width:'45%',
        height:'50%',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItem:'flex-start',
        // border: '1px solid green',
        textAlign:'left',
        position:'relative',
        right:'50px',
        font:' normal normal normal 18px/24px Roboto',
        color: '#0A0102',
        opacity: '1',
    },
    costone:{
        width:'150px',
        // border: '1px solid red',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    space2:{
        height:'5vh',
    },
    image:{
        width:'100px',
        height:'100px',
        // border: '1px solid red',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        position:'relative',
        right:'20px',

    },
    wish:{
        width:'90%',
        height:'40px',
        border:' 1px solid #E4E4E4',
        background:' #F5F5F5 10% 10% no-repeat padding-box',
        textAlign:'left',
        display:'flex',
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center',
       
    }

})

function Wishlist(props) {
    const classes=useStyle()
    const [bookwishlist, setBookwishlist] = useState([])
    

    const removeBooks = (id) =>{
        RemoveBookFromWishlist(id).then((response) =>{
            console.log(response);
        }).catch((error) =>{
            console.log(error);
        })
    }

    const get_wishlist = ()=> {
        getWishlist().then((response) => {
                console.log(response)
                setBookwishlist(response.data.result)
            }
        ).catch(
            (error) => {
                console.log(error)
            }  
        )
        console.log("getting wishlist data")
    }
    console.log(bookwishlist)
    
    useEffect(() =>{
        get_wishlist()
    }, [])

    return (
        <Paper className={classes.orderhead} elevation={0}>
            <Header/>
            <Box className={classes.space2} ></Box>
        <Box className={classes.firstone}>
            
        <Box className={classes.space2} ></Box>
            <Box className={classes.wish} >
            <span style={{position: 'relative',left:'40px',font:' normal normal medium 18px/24px Roboto',color: '#0A0102',opacity: '1'}} >My Wishlist</span>
            </Box>
            { bookwishlist.map((book)=>
            (<Box className={classes.ordermain} book={book}>
                <Box className={classes.image}>
                <img  src={img} alt="img" width='90%' height='90%'style={{position:'relative',top:'8px'}}/>
                </Box>
                <Box className={classes.orderone}>
                    <span style={{ font:' normal normal normal 16px/20px Lato',color: '#0A0102',}}>{book.product_id.bookName}</span>
                    <span style={{ font:' normal normal normal 13px/16px Lato',color: '#9D9D9D',}}>{book.product_id.author}</span>
                    <Box className={classes.costone}>
                        <span style={{ font:' normal normal normal 15px/18px Lato',color: '#0A0102',}}>{book.product_id.discountPrice}</span> 
                        <span style={{ font:' normal normal normal 12px/15px Lato',color: '#9D9D9D', textDecoration: 'line-through'}}>{book.product_id.price}</span>
                    </Box>
                </Box>
                <Button onClick={()=>removeBooks(book.product_id._id)}><DeleteIcon sx={{color:'#9D9D9D'}}/></Button>
            </Box>))}
            
                <Box className={classes.space2} ></Box>
        </Box>
    </Paper>
    );
}

export default Wishlist;