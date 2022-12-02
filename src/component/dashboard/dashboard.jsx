import React from 'react';
import Header from '../header/header';
import Books from '../books/books';
import Book01 from '../book01/book01';
import Cart from "../cart/cart";
import { useEffect, useState } from "react";
import { getBooksList } from '../services/dataservices'; 
import { makeStyles } from '@mui/styles';
// import Pagination from '@mui/material/Pagination';
import Pagination from "../pagination/pagination";
import Box from '@mui/material/Box';
import Head from "../header/head"


const useStyle = makeStyles({
    book:{
        border:'0px solid  #E2E2E2',
        width:'70vw', 
        height:'120vh', 
        display:'flex', 
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignContent:'space-between', 
        alignItem:'center', 
        position:'relative',
        left:'15%',

    },
    pagenation:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']:{
        book:{
            border:'0px solid  #E2E2E2',
            width:'80vw', 
            height:'210vh', 
            display:'flex', 
            flexWrap:'wrap',
            justifyContent:'space-between',
            alignContent:'space-between', 
            alignItem:'start', 
            position:'relative',
            left:'10%',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']:{
        book:{
            border:'0px solid  #E2E2E2',
            width:'80vw', 
            height:'290vh', 
            display:'flex', 
            flexWrap:'wrap',
            justifyContent:'space-between',
            alignContent:'space-between', 
            alignItem:'start', 
            position:'relative',
            left:'10%',
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :899px)']:{
        book:{
            border:'0px solid  #E2E2E2',
            width:'80vw', 
            height:'330vh', 
            display:'flex', 
            flexWrap:'wrap',
            justifyContent:'space-between',
            alignContent:'space-between', 
            alignItem:'start', 
            position:'relative',
            left:'10%',
        },
    },
    ['@media only screen and (min-width :900px) and (max-width :1024px)']:{
        book:{
            border:'0px solid  #E2E2E2',
            width:'80vw', 
            height:'360vh', 
            display:'flex', 
            flexWrap:'wrap',
            justifyContent:'space-between',
            alignContent:'space-between', 
            alignItem:'start', 
            position:'relative',
            left:'10%',
        },
    },
   
})
function Dashboard() {
    const classes = useStyle();
    const[toggle, setToggle] = useState(false);
    const [bookslist, setBookslist] = useState([]);
    const [detail, setDetails]=useState({});
    const [visible, setVisible] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [PostperPage, setPostperPage]= useState(8);

    const lastPostIndex = currentPage * PostperPage;
    const firstPostIndex = lastPostIndex - PostperPage;
    const currentPosts = bookslist.slice(firstPostIndex, lastPostIndex);

    const getBooks = ()=> {
        getBooksList().then((response) => {
                console.log(response)
                setBookslist(response.data.result)
                setDetails(response.data.result)
            }
        ).catch(
            (error) => {
                console.log(error)
            }  
        )
    }
    console.log( detail._id,"getting data")

    console.log(currentPosts)

    useEffect(() =>{
        getBooks()
    }, [])

    const autorefresh =()=>{
        getBooks()
    }
    const openBook01 = (bookobj) => {
        console.log(bookobj, 'Book details')
        setToggle(true)
        setVisible(true)
    }

    const listenToBook01 = () => {
        setToggle(false)
        setVisible(false)
    }

    
    return (
        <Box>
        <div className={classes.head} >
            <Header />
            <Head/>
            {
                toggle ? <Book01 listenToBook01={listenToBook01} id={detail._id} name={detail.bookName} author={detail.author}
                quantity={detail.quantity} price={detail.price} discountPrice={detail.discountPrice} /> : 
             <div className={classes.book} /*style={{border:'0px solid red',width:'70vw', height:'120vh', display:'flex', flexWrap:'wrap', justifyContent:'space-between',
                            alignContent:'space-between', alignItem:'center', position:'relative',left:'230px'}}*/ >
            {
                currentPosts.map((book) => (<div onClick={()=>{openBook01(book); setDetails(book)}}><Books book ={book} autorefresh={autorefresh} className={classes.bookhead}/></div>))
            }
            </div>
        } 
        </div>
        {visible ? null : 
        (<Box className={classes.pagenation} >
         <Pagination  
          totalPosts={bookslist.length}
          postsPerPage={PostperPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} />
         </Box>)
         }
        </Box>
         
    );
}

export default Dashboard;