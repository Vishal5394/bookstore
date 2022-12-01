import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import img  from "../book01/Image 1@2x.png";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import Address from './address';
import Order from './order';
import {getCartList} from '../services/dataservices'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import Header from '../header/header';
import {RemoveBookFromCart} from '../services/dataservices'
import {UpdateCart} from '../services/dataservices'

const useStyle= makeStyles({
    cart:{
        // width:'100vw',
        // height:'auto',
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
       
        // border: '1px solid red',

    },
    cartmain:{
        width:'60vw',
        height:'auto',
        border: '1px solid #DBDBDB',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
      
    },
    firstpart:{
        width:'100%',
        height:'100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
       alignContent:'space-between', 
       alignItems:'center',
        // border: '1px solid yellow',
    },
    mid:{
        width:'90%',
        height:'150px',
        // border: '1px solid #DBDBDB',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        // alignContent:'space-between',
        alignItems:'center',
    },
    midone:{
        width:'45%',
        height:'60%',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'space-between',
        position:'relative',
        right:'100px',
        // border: '1px solid green',
        textAlign:'left',  
        lineHeight:'1.5' 
    },
    incount:{
        height:'30px',
        // border: '1px solid green',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItem:'center',
        position:'relative',
        top:'10px', 
    },
    buttondiv: {
        width:'100px',
        height:'30px',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItem:'center',
        // border:'1px solid #DBDBDB',
        // position:'relative',
        // top:'-20px', 
        
    },
    num:{
        width:'40px',
        height:'20px',
        position:'relative',
        border:'1px solid #DBDBDB', 
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItem:'center',  
      
    },
    m1:{
        height:'30px',
        // border: '1px solid red',
        textAlign: 'left',
        font: 'normal normal medium 18px/22px Lato',
        color: '#0A0102',
        opacity: '1',
        position:'relative',
        left:'36px',
    },
    name:{
        font:' normal normal normal 16px/20px Lato',
        color: '#0A0102',
        opacity: '1',
    },
    author:{
        font: 'normal normal normal 13px/16px Lato',
        color: '#9D9D9D',
       
    },
    disprice:{
        font: 'normal normal normal 15px/18px Lato',
        color: '#0A0102',
    },
    price:{
        textDecoration: 'line-through',
        font: 'normal normal normal 12px/15px Lato',
        color: '#9D9D9D',
    },
    selectone:{
        width:'90%',
        height:'auto',
        // border: '1px solid red',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'space-between',
        alignItem:'center',
        // position:"relative",
        // right:'50px',
        
    },
    selecttwo:{
        width:'280px',
        // border: '1px solid red',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // position:"relative",
        // left:'40px',
    },
    cost:{
        width:'100px',
        // border: '1px solid red',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    add:{
        width:'60vw',
        height:'8vh',
        border: '1px solid #DBDBDB',
        textAlign:'left',
       display:'flex',
       justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },
    summery:{
        width:'60vw',
        height:'8vh',
        border: '1px solid #DBDBDB',
        textAlign:'left',
        display:'flex',
        justifyContent:'center',
         alignItems:'center',
         alignContent:'center'
    },
    add1:{
        width:'90%',
        height:'8vh',
        // border: '1px solid red',
        display:'flex',
        alignItems:'center',
        alignContent:'center',
    },
    order1:{
        width:'90%',
        height:'8vh',
        // border: '1px solid red',
        display:'flex',
        alignItems:'center',
        alignContent:'center',
    },
    space2:{
        height:'5vh',
    },
    space1:{
        height:'3vh',
    },
    Placed:{
        position:'relative',
        left:'300px',

    }
})

function Cart(props) {
    const classes =useStyle()
    const [count, setCount] = useState(1);
    const[toggle, setToggle] = useState(false);
    const[toggle1, setToggle1] = useState(false);
    const [get, setGet] = useState([]);
    const [visible, setVisible] = useState(false)
    const [bookcart, setBookCart] = useState([])
    const [booklist, setBooklist] = useState([])


    const removeBook = (id) =>{
        RemoveBookFromCart(id).then((response) =>{
            console.log(response);
        }).catch((error) =>{
            console.log(error);
        })
    }


    const MinusQuantity = (id, quantity) =>{
        let input = {
            quantityToBuy: quantity-1,
        }
        if (quantity > 1){
            setCount(quantity-1);
        } else {
                setCount(1);
        }
        UpdateCart(id, input).then((response) =>{
            console.log(response);
            
        }).catch((error) =>{
            console.log(error);
        })
        console.log(input,"Input")
    }

    const PlusQuantity = (id, quantity) =>{
        
        let input = {
            quantityToBuy: quantity+1,
        }
        setCount(quantity+1);
        UpdateCart(id,input).then((response) =>{
            console.log(response);
            
        }).catch((error) =>{
            console.log(error);
        })
        console.log(input,"Input")
    }

    const getCart = ()=> {
        getCartList().then((response) => {
                console.log(response)
                setBookCart(response.data.result)
                setBooklist(response.data.result)
            }
        ).catch(
            (error) => {
                console.log(error)
            }  
        )
        console.log("getting cart data")
    }
    
    console.log(bookcart)
    
    useEffect(() =>{
        getCart()
    }, [])

    // const incNum = () =>{
    //     setCount(count+1);
    // }
    
    // const decNum = () =>{
    //     if (count > 1){
    //         setCount(count-1);
    //     } else {
    //         setCount(1);
    //     }
  
    // }

        const [locate, setLocate] = React.useState('');
      
        const handleChange = (event: SelectChangeEvent) => {
          setLocate(event.target.value);
        };

    const listenToDetails=()=>{
        // setToggle(false)
        
        setToggle1(true)
    }

    const listenToDetailsone=()=>{
        setToggle(true)
    }

    const openDetails= () => {
        setToggle(true)
        setVisible(true)
    }

    const listenToOrder=()=>{
        setToggle1(true)
    }

    // const listenToOrederone=()=>{
    //     setToggle1(false)
    // }

    return (
        
        <Paper  elevation={0} className={classes.cart}>
            <Header/>
             <Box className={classes.space2} ></Box>
            <Box className={classes.cartmain}>
                <Box className={classes.firstpart}>
                <Box className={classes.space2} ></Box>
                     <Box className={classes.selectone}>
                    
                     <span className={classes.m1} >My cart  (1)</span>
                    <Box className={classes.selecttwo} sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="select-label"><RoomIcon sx={{color:'#A03037'}}/>BridgeLabz Solutions LLP, No...</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={locate}
                                label="Location"
                                onChange={handleChange}
                                >
                            </Select>
                        </FormControl>
                    </Box>
                   
                </Box>
                <Box className={classes.space2} ></Box>
                    {booklist.map((book)=>
                    ( <Box className={classes.mid} book={book}>
                                <Box sx={{ position:'relative', top:'10px', right:'80px'}}>
                                <img className={classes.img} src={img} alt="img" width='100%' height='100%' />
                                </Box>
                            <Box className={classes.midone}>
                                <span className={classes.name}>{book.product_id.bookName}</span>
                                <span className={classes.author}>{book.product_id.author}</span>
                                <Box className={classes.cost}>
                                <span className={classes.disprice}>{book.product_id.discountPrice}</span> 
                                <span className={classes.price}>{book.product_id.price}</span>
                                </Box>
                                <Box className={classes.incount}>
                                    <div className={classes.mindiv} >
                                            <div className={classes.buttondiv}>
                                                <Box size="small" color="#DBDBDB" aria-label="add"  sx={{ width:'30px', height:'20px', }}  >
                                                <RemoveCircleOutlinedIcon onClick={()=>MinusQuantity(book._id,book.quantityToBuy)} />
                                                </Box>
                                                    <span className={classes.num}>{book.quantityToBuy}</span>
                                                <Box size="small" color="#DBDBDB" aria-label="substract" sx={{ width:'30px', height:'20px'}} >
                                                <AddCircleOutlinedIcon onClick={()=>PlusQuantity(book._id,book.quantityToBuy)}/>
                                                </Box>
                                            </div>
                                    </div>
                                    <Button className={classes.h2}  onClick={()=>removeBook(book._id)}>Remove</Button>
                                </Box>
                            </Box>
                        </Box>))}
                        <Box className={classes.space2} ></Box>
                        <Box className={classes.Placed}>
                            {
                                visible ? null :  <Button variant="contained" onClick={openDetails}>Placed Oreder</Button>
                            }
                    </Box>
                    <Box className={classes.space2} ></Box>
                </Box> 
            </Box>
                
            <Box className={classes.space1}></Box>
            {/* <Box className={classes.add}> */}
                { 
                toggle ? <Address listenToDetails={listenToDetails} /> 
                 :<Box className={classes.add}> <span className={classes.add1} listenToDetailsone={listenToDetailsone}>Address Details</span> </Box>
                }
            {/* </Box> */}
            <Box className={classes.space1}></Box>
            {
                toggle1 ? <Order listenToOrder={listenToOrder} />:
              <Box className={classes.summery}><span className={classes.order1} >Order summery</span></Box>
            }
        </Paper>
    );
}

export default Cart;