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

const useStyle = makeStyles ({
      one: {
        width:'200px',
        height:'30px',
        // border: '1px solid red',
        position:'relative',
        top:"-20px",
        left:"410px",
    },
    name:{
        // border: '1px solid red',
        textAlign: 'left',
        font: 'normal normal normal 25px/33px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        opacity: '1',
        position:'relative',
        left:"200px",
        top:'20px',
    },
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    left: '200px' ,
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
      width: '600px',
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
        width: '500px',
        position:'relative',
        left:'20px',
        borderRadius:"2px",
      },
    },
  }));

function Header(props) {
  const navigate = useNavigate()
  const classes = useStyle()
  const [sort, setSort] = React.useState('');
  const [wishlist, setwishlist] = useState([]);
  const [detail, setDetails]=useState({});
  const [bookcart, setBookCart] = useState([])



const openCart=()=>{
      navigate('/cart')
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
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'flex' },width:'150px',
              justifyContent:'space-evenly', position: 'relative', left:'150px' }}
            >   
             <img src={img} alt="img"  sx={{ width:'30px', height:'20px', position:'relative', right:'50px'}}/>
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
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent:'space-between', position: 'relative' , right: '220px', width:'250px',border:'0px solid green'  }}>
              <Button size="extra-large" aria-label="show 4 new mails" variant="contained"  color="inherit" sx={{backgroundColor:'#A03037'}}>
                  <PermIdentityOutlinedIcon sx={{ fontSize: 30  }} />
              </Button>
              <Button size="large" aria-label="show 4 new mails" variant="contained"  color="inherit" sx={{backgroundColor:'#A03037'}}>
                  <FavoriteIcon sx={{ fontSize: 30 }} onclick={get_wishlist}/>
              </Button>
                <Button size="large" color="inherit" variant="contained" sx={{backgroundColor:'#A03037'}}>
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} onClick={openCart} />
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

export default Header;