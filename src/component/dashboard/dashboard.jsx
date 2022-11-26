import React from 'react';
import Header from '../header/header';
import Books from '../books/books';
import Book01 from '../book01/book01';
import Cart from "../cart/cart";
import { useEffect, useState } from "react";
import { getBooksList } from '../services/dataservices'; 
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    head: {
        // width:'100vw',
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignContent:'space-between',
        alignItems:'flex-start',
    },
   
})
function Dashboard() {
    const classes = useStyle()
    const[toggle, setToggle] = useState(false)
    const [bookslist, setBookslist] = useState([])
    const [detail, setDetails]=useState({})

    const getBooks = ()=> {
        getBooksList().then((response) => {
                console.log(response)
                setBookslist(response.data.result)
            }
        ).catch(
            (error) => {
                console.log(error)
            }  
        )
        console.log("getting data")
    }

    console.log(bookslist)

    useEffect(() =>{
        getBooks()
    }, [])

    const autorefresh =()=>{
        getBooks()
    }
    const openBook01 = (bookobj) => {
        console.log(bookobj, 'Book details')
        setToggle(true)
    }

    const listenToBook01 = () => {
        setToggle(false)
    }

    
    return (
        <div className={classes.head}>
            <Header />
            {
                toggle ? <Book01 listenToBook01={listenToBook01}id={detail._id} name={detail.bookName} author={detail.author}
                quantity={detail.quantity} price={detail.price} discountPrice={detail.discountPrice} /> : 
             <div  style={{border:'0px solid red',width:'70vw', height:'480vh', display:'flex', flexWrap:'wrap', justifyContent:'space-between',
                            alignContent:'space-between', alignItem:'center', position:'relative',left:'200px'}} >
            {
                bookslist.map((book) => (<div onClick={()=>{openBook01(book); setDetails(book)}}><Books book ={book} autorefresh={autorefresh} className={classes.bookhead}/></div>))
            }
            </div>
        }
            
        </div>
    );
}

export default Dashboard;