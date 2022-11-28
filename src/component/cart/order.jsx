import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img  from "../book01/Image 1@2x.png";
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import { useState, useEffect} from "react";
import {getCartList} from '../services/dataservices'
import {useNavigate} from "react-router-dom";

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
        width:'60vw',
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
        position:'relative',
        right:'0px',
        // border:'1px solid #DBDBDB',
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
        right:'130px',
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
        alignContent:'center',
        position:'relative',
        right:'90px',

    }

})

function Order(props) {
    const classes=useStyle()
    const [bookorder, setBookorder] = useState([])
    const navigate = useNavigate()

    const openOrder=()=>{
        navigate('/placeorder')
  }
   
    const getCart = ()=> {
        getCartList().then((response) => {
                console.log(response)
                setBookorder(response.data.result)
            }
        ).catch(
            (error) => {
                console.log(error)
            }  
        )
        console.log("getting cart data")
    }
    console.log(bookorder)
    
    useEffect(() =>{
        getCart()
    }, [])
    return (
        <Paper className={classes.orderhead}>
            
            <Box className={classes.firstone}>
            <Box className={classes.space2} ></Box>
                <span style={{position:'relative', right:'350px'}}>Order Summary</span>
                <Box className={classes.space2} ></Box>
                { bookorder.map((book)=>
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
                </Box>))}
                <Button variant="contained" sx={{background:' #3371B5 0% 0% no-repeat padding-box', borderRadius: '3px',
                    position:'relative', left:'350px', top:'10px'}} onClick={openOrder} >Checkout</Button>
                    <Box className={classes.space2} ></Box>
            </Box>
        </Paper>
    );
}

export default Order;