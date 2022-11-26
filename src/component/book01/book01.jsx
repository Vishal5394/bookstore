import React from 'react'; 
import img  from "../books/book01.png";
import img1  from "./Image 1@2x.png";
import img2  from "./component (1).png";
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Textarea from '@mui/joy/Textarea';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {addToWishlist} from "../services/dataservices";
import { getCounter } from '../services/dataservices'; 
import { addToCart } from '../services/dataservices';
import { useEffect, useState } from "react";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

const useStyle = makeStyles ({
    bookOne: {
        display:'flex',
        flexDirection:'row',
        position:"relative",
        top:'-80px',
        right:'20px',
    },
    bookchild:{
        width:'40Vw',
        height:'70vh',
        display:'flex',
        flexDirection:'row',
        justifyContent:'Center',
        alignContent:'center',
        alignItem:'center',
        position:'relative',
        top:'70px',
        left:'50px',
        
        // border:'1px solid red',

    },

    childTwo:{
        width:'50%',
        height:'85%',
        display:'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItem:'center',
        alignContent:'space-between',
        alignItem:'center',
        // border:'1x solid green',
    },

    imgOne: {
        width:'15vw',
        height:'40vh',
        padding:'20px',
        border:'1px solid #E2E2E2',
        position:'relative',
        top:'30px',
        display:'flex',
        flexDirection:'coloumn',

    },
    imgTwo: {
        width:'39px',
        height:'51px',
        position:'relative',
        top:'30px',
        left:'58px',
        border:'1px solid red',
    },
    imgThree:{
        width:'39px',
        height:'51px',
        position:'relative',
        top:'85px',
        left:'18px',
        border:'1px solid #E2E2E2',
    },

    childThree:{
        width:'40vw',
        height:'90vh',
        position:'relative',
        left:'-20px',
        top:'70px',
        // border:'1px solid red',
    },
    boxOne:{
        width:'50%',
        height:'20%',
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'flex-start',
        // border:'1px solid red',
        lineHeight:'1.6',
        textAlign: 'left',
    },
    h1:{
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontWeight:'regular',
        fontSize:'28px',
        color: '#0A0102',
        lineSpacing:'37px',
        opacity: '1',
    },
    h6 : {
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontWeight:'regular',
        fontSize:'18px',
        color: '#878787',
        lineSpacing:'24px',
        opacity: '1',
    },
    h5:{
        background: '#388E3C 0% 0% no-repeat padding-box',
        borderRadius: '1px',
        // opacity: '1',
        width:'40px',
        height:'18px',
        fontSize:'15px',
        color:'#fff',
        textAlign:'center',
    },
    h4:{
        textAlign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1',
       fontSize:'15px',
    },
    h3:{
        fontFamily: 'Roboto',
        fontWeight:'regular',
        fontSize:'30px',
        color: '#0A0102',
    },
    h2: {
        textDecoration: 'line-through',
        fontFamily: 'Roboto',
        fontWeight:'regular',
        fontSize:'20px',
        color: '#878787',
    },
    details:{
        textAlign: 'left',
        fontWeight:'regular',
        fontSize:'18px',
        color: '#878787',
        lineSpacing:'20px',
    },
    paragraph:{
        textAlign: 'left',
        fontWeight:'regular',
        fontSize:'15px',
        color: '#373434',
        lineSpacing:'16px',
    },
    feedback:{
        textAlign: 'left',
    },
    feedbackBox:{
        // textAlign: 'left',
        width:'100%',
        height:'150px',
        backgroundColor:'#F5F5F5',
        // border:'1px solid red',
        lineHeight:'16px',
        position:'relative',
        top:'10px',
    },
    mindiv:{
        width:'150px',
        height:'50px',
        // border:'1px solid red',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignContent: 'space-between',
        alignItem:'center',
    },
    buttondiv: {
        width:'180px',
        height:'50px',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItem:'center',
        // border:'1px solid #DBDBDB',
    },
    count:{
        width:'100px',
        height:'50px',
        // border:'2px solid #DBDBDB',
        // borderRadius:'1px',
        
      
    },
    rate:{
        width:'80px',
        // border:'1px solid green',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItem:'center',
        textAlign: 'center',  
    },
    bookprice:{
        width:'100px',
        height:'35px',
        // border:'1px solid green',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItem:'center',
        textAlign:'center',
    },
    num:{
        width:'120px',
        height:'40px',
        position:'relative',
        border:'1px solid #DBDBDB', 
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItem:'center',  
       fontSize:'30px',
    },
    
})



function Book01(props) {
    const classes = useStyle()
    const[toggle, setToggle] = useState(false);
    const [count, setCount] = useState(1);
    const [inputValue, setInputValue] = useState({id: false});
    const [counter, setCounter] = useState([]);
    const [cart, setCart] = useState([]);

    
    
  const incNum = () =>{
    let value={
        quantityToBuy:count
    }
    let id = {
        cartItem_id: props.id
    }
      setCount(count+1);
  }

  console.log(props.name)
  
  const decNum = () =>{
    let value={
        quantityToBuy:count
    }
    let id = {
        cartItem_id: props.id
    }
      if (count > 1){
          setCount(count-1);
      } else {
          setCount(1);
      }

  }

  const get_counter = ()=> {
    let value={
        quantityToBuy:count
    }
    let id = {
        cartItem_id: props.id
    }
    getCounter(id, value).then((response) => {
            console.log(response)
            setCounter(response.data.result)
        }
    ).catch(
        (error) => {
            console.log(error)
        }  
    )
    console.log("getting data")
  }
  
  console.log(counter)

  const listenToCounter = ()=>{
    setToggle(false)
  }

  const openCounter = ()=>{
    setToggle(true)
    let id = {
        product_id: props.id
    }
    addToCart(id).then((response) => {
        console.log(response)
        setCart(response.data.result)
    }
).catch(
    (error) => {
        console.log(error)
    }  
)
  }

  const addedWishlist = (id) => {
    let wishlistobj = {
        bookIdList:[id], isAdded: true
    }
    console.log(wishlistobj)
    addToWishlist(props.id).then(
        (response) => {
            console.log(response)
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )
}
    return (
        <Box className={classes.bookOne}>
            <Box className={classes.bookchild}>
            <img className={classes.imgTwo} src={img1} alt="img" width='35px' height='47px'/>
            <img className={classes.imgThree} src={img2} alt="img" width='35px' height='47px'/>
            <Box className={classes.childTwo}>
                <img className={classes.imgOne} src={img} alt="img" width='80%' height='80%'/>
                {
                toggle ? (
                            <Box className={classes.mindiv} listenToCounter={listenToCounter} onClick={get_counter} >
                                <Box className={classes.buttondiv}>
                                <Box size="large" color="#DBDBDB" aria-label="add"  sx={{ width:'100px', height:'80px'}}  >
                                    <RemoveCircleOutlinedIcon onClick={decNum} sx={{ width:'60px', height:'40px'}} />
                                </Box>
                                     <span className={classes.num}>{count}</span>
                                <Box size="large" color="#DBDBDB" aria-label="substract" sx={{ width:'100px', height:'80px'}} >
                                    <AddCircleOutlinedIcon onClick={incNum} sx={{ width:'60px', height:'40px'}}/>
                                </Box>
                                </Box>
                            </Box>
                 ) :
                         
                        <Button variant="contained"  sx={{backgroundColor:'#b71c1c'}} onClick={openCounter} >ADD TO BAG </Button>
                         
                }
                <Button variant="contained" sx={{backgroundColor:'#212121', height:'40px'}} onClick={()=> addedWishlist(props.id)}><FavoriteIcon /> WISHLIST</Button>
            </Box>
            </Box>
            <Box className={classes.childThree}>
                <Box className={classes.boxOne}>
                    <span className={classes.h1}>{props.name}</span>
                    <span className={classes.h6}>{props.author}</span>
                    <span className={classes.rate}>
                    <span className={classes.h5}> 4.5 <StarBorderOutlinedIcon sx={{width: '10px', height: '10px'}} /></span>
                    <span className={classes.h4} >{props.quantity}</span>
                    </span>
                    <span className={classes.bookprice}>
                    <span className={classes.h3}>{props.discountPrice}</span> 
                    <span className={classes.h2}>{props.price}</span>
                    </span>
                </Box>
                <hr/>
            
                <nav className={classes.details}><li>Book Details</li></nav>
                <p className={classes.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sunt itaque laborum nostrum laudantium porro reiciendis 
                libero doloribus officia suscipit doloremque at quis quia, 
                culpa ipsum numquam nemo soluta, minima temporibus?
                </p>
                <hr/>

                <Box className={classes.feedback}>
                    Customer Feedback
                    <Box className={classes.feedbackBox}>
                    <Typography component="legend" sx={{position:'relative', left:'20px'}}>Overall rating</Typography>
                    <Rating name="no-value" value={null} sx={{position:'relative', left:'20px'}}/> 
                    <Textarea label="Soft" placeholder="Write Your Review..." variant="soft" sx={{backgroundColor:"White", width:'90%',position:'relative', left:'30px', top:'10px'}}/>
                    <Button variant="contained" sx={{position:'relative', left:'500px', top:'20px'}}>Submit</Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}

export default Book01;