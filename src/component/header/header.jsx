import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import img  from "./education.svg";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Paper from '@mui/material/Paper';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { getWishlist } from '../services/dataservices'; 
import { useEffect, useState } from "react";
import Cart from '../cart/cart';
import { getCartList } from '../services/dataservices'; 
import {useNavigate} from "react-router-dom";
import {addToCart} from "../services/dataservices";
import Head from "./head"

const useStyle = makeStyles ({
  texthead:{
    width:'10%', 
    height:'20%',
    display:'flex',
    justifyContent:'space-evenly', 
    position: 'relative', 
    left:'13%',
    fontSize:'20px',
    // border:'1px solid red',
    
  },
  imagehead:{
    width:'20%',
  },
  icon:{
    display:"flex",
    justifyContent:'space-between', 
    position: 'relative' ,
    right:'14%',
     width:'15%',
     border:'0px solid green' 
  },
  ['@media only screen and (min-width :320px) and (max-width :480px)']:{
    texthead:{
      width:'60%', 
      height:'10%',
      display:'flex',
      justifyContent:'space-evenly', 
      position: 'relative', 
      left:'1%',
      fontSize:'15px',
      // border:'1px solid red',
    },
    icon:{
      display:"none",
    },
  },
  ['@media only screen and (min-width :481px) and (max-width :768px)']:{
    texthead:{
      width:'30%', 
      height:'30%',
      display:'flex',
      justifyContent:'space-evenly', 
      position: 'relative', 
      left:'5%',
      fontSize:'20px',
      // border:'1px solid red',
    },
    icon:{
      display:"none",
    },
  },
  ['@media only screen and (min-width :769px) and (max-width :899px)']:{
    texthead:{
      width:'30%', 
      height:'20%',
      display:'flex',
      justifyContent:'space-evenly', 
      position: 'relative', 
      left:'5%',
      fontSize:'20px',
      // border:'1px solid red',
    },
    imagehead:{
      width:'15%',
    },
    icon:{
      display:"none",
    },
  },
  ['@media only screen and (min-width :900px) and (max-width :1024px)']:{
    texthead:{
      width:'20%', 
      height:'10%',
      display:'flex',
      justifyContent:'space-evenly', 
      position: 'relative', 
      left:'5%',
      fontSize:'20px',
      // border:'1px solid red',
    },
    imagehead:{
      width:'15%',
    },
    icon:{
      position:'relative',
      right:'10%'
    }
  },
})
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    left: '12%' ,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      
        },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    color:'#9D9D9D',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '38vw',
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']:{
      width: '58vw',
      // border:'1px solid red',
      position: 'relative',
      left: '5%' ,
    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']:{
      width: '40%',
      // border:'1px solid red',
      position: 'relative',
      left: '6%' ,
    },
    ['@media only screen and (min-width :769px) and (max-width :899px)']:{
      width: '35%',
      // border:'1px solid red',
      position: 'relative',
      left: '5%' ,
    },
    ['@media only screen and (min-width :900px) and (max-width :1024px)']:{
      width: '35%',
      // border:'1px solid red',
      position: 'relative',
      left: '2%' ,
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color:'#9D9D9D',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FCFCFC',
    ['@media only screen and (min-width :481px) and (max-width :768px)']:{
      zIndex:'1',
    }
    
    
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      backgroundColor:'#FCFCFC',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '32vw',
        position:'relative',
        left:'4%',
        borderRadius:"2px",
        
      },
      ['@media only screen and (min-width :320px) and (max-width :480px)']:{
        width: '80%',
        // border:'1px solid red',
        position:'relative',
        left:'1%',
      },
      ['@media only screen and (min-width :481px) and (max-width :768px)']:{
        width: '80%',
        // border:'1px solid red',
        position:'relative',
        left:'10%',
      },
      ['@media only screen and (min-width :769px) and (max-width :899px)']:{
        width: '100%',
        // border:'1px solid red',
        position:'relative',
        left:'13%',
      },
      ['@media only screen and (min-width :900px) and (max-width :1024px)']:{
        width: '30vw',
        // border:'1px solid red',
        position:'relative',
        left:'13%',
      }
  },
    
  }));

function Header(props) {
  const navigate = useNavigate()
  const classes = useStyle();
  const [sort, setSort] = React.useState('');
  const [wishlist, setwishlist] = useState([]);
  const [detail, setDetails]=useState({});
  const [bookcart, setBookCart] = useState([])
  const [visible, setVisible] = useState(false)

 


const openCart=()=>{
      navigate('/cart')
      setVisible(true)
}
const openwishlist=()=>{
  navigate('/wishlist')
}

const get_wishlist = ()=> {
  getWishlist().then((response) => {
          console.log(response)
          setwishlist(response.data.result)
      }
  ).catch(
      (error) => {
          console.log(error)
      }  
  )
  console.log("getting data")
}

console.log(wishlist)

useEffect(() =>{
  get_wishlist()
}, [])

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };


    return (
      <Box>
        <Box sx={{ flexGrow: 1 , width:'100vw'}}>
        <AppBar position="static" backgroundColor='#A03037'>
          <Toolbar sx={{backgroundColor:'#A03037'}}>
          
            <Typography
              variant=""
              noWrap
              component="div"
              className={classes.texthead}
            >   
             <img  src={img} alt="img"  className={classes.imagehead}  />
              Bookstore
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1, }} />
            <Box className={classes.icon} >
              <Button size="extra-large" aria-label="show 4 new mails" variant="contained"  color="inherit" sx={{backgroundColor:'#A03037'}}>
                  <PermIdentityOutlinedIcon sx={{ fontSize: 30  }} />
              </Button>
              <Button size="large" aria-label="show 4 new mails" variant="contained" onClick={openwishlist}  color="inherit" sx={{backgroundColor:'#A03037'}}>
                  <FavoriteIcon   sx={{ fontSize: 30 }}/>
              </Button>
                <Button size="large" color="inherit" variant="contained" sx={{backgroundColor:'#A03037'}} onClick={openCart}>
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }}  />
                </Button>
             
              
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                // aria-controls={mobileMenuId}
                aria-haspopup="true"
                // onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {/* {renderMobileMenu}
        {renderMenu} */}
      </Box>
           
    </Box>
    );
    
}

export default Header;