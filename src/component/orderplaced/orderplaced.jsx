import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img from './orderplaced.jpeg';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import Header from '../header/header';


const useStyle= makeStyles({
    orderplaced:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
    orderone:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
    imagebox:{
        // border:"1px solid red",
        width:'286px',
        height:'225px',
    },
    para:{
        // border:"1px solid red",
        width:'350px',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        lineHeight:'0.002',
        textAlign: 'center',
        font: 'normal normal normal 18px/22px Lato',
    },
    container:{
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        // border:"1px solid red",
        width:'751px',
        height:'112px',
        
    },
    table:{
        borderCollapse:'collapse',
        width:'100%',
    },
    th:{
        backgroundColor:'#DCDCDC',
        background:' #FAFAFA 0% 0% no-repeat padding-box',
        border: '1px solid #DCDCDC',
        padding:'8px',
        font: 'normal normal medium 12px/15px Lato',
        color:' #333232',
        textAlign: 'center',
        width:'751px',
        height:'20px',
        },
    td:{
        backgroundColor:'#FFFFFF',
        border: '1px solid #DCDCDC',
        textAlign:'center',
        padding:'8px',
        font: 'normal normal normal 12px/15px Lato',
    },
})

function Orderplaced() {
    const classes =useStyle()
    const navigate = useNavigate()

    const openPage=()=>{
        navigate('/dashboard')
  }
   
    return (
        <Paper elevation={0} className={classes.orderplaced}>
        <Header/>
        <Box className={classes.orderone}>
            <img className={classes.imagebox} src={img} alt="img" />
            <p className={classes.para} >
                <p>hurray!!! your order is confirmed </p>
                <p>the order id is #123456 save the order id for</p>
                 <p>further communication..</p>
                 </p>
             <Box className={classes.container}>
                <table className={classes.table}>
                    <thead>
                        <tr className={classes.tr}>
                            <th className={classes.th}>Email us</th>
                            <th className={classes.th}>Contact us</th>
                            <th className={classes.th}>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={classes.tr}>
                            <td className={classes.td}>admin@bookstore.com</td>
                            <td className={classes.td}>+91 8163475881</td>
                            <td className={classes.td}>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex,
                                 near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                        </tr>
                    </tbody>
                </table>
             </Box>
             <Box>
             <Button variant="contained" onClick={openPage}  sx={{background:' #3371B5 0% 0% no-repeat padding-box', borderRadius: '3px'}}>Continue Shopping</Button>
             </Box>
        </Box>
        </Paper>
    );
}

export default Orderplaced;