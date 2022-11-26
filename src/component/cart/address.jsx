import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

const useStyle= makeStyles({
    addressmain:{
        width:'100vw',
        height:'80vh',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        // border: '1px solid red',
    },
    detail:{
        width:'60vw',
        height:'80vh',
        border: '1px solid #DBDBDB',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignContent:'space-between',
        alignItems:'center',
        // border:'1px solid red',
    },
    done:{
        width:'90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // border:'1px solid red',
    },
    dtwo:{
        width:'60%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        // border:'1px solid red',
        position:'relative',
        top:'30px',
        right:'90px',
    },
    dthree:{
        // border:'1px solid red',
        position:'relative',
        top:'50px',
        right:'350px',
    },
    dfour:{
        width:'60%',
        height:'auto',
        // border:'1px solid red', 
        display:'flex',
        flexDirection:'column',
        alignContent:'space-between',
        justifyContent:'space-evenly',
        position:'relative',
        top:'50px',
        right:'90px',   
        textAlign:'left',
    },
    dfive:{
        width:'60%',
        height:'20%',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'space-between',
        justifyContent:'space-between',
        position:'relative',
        top:'70px',
        right:'90px',
        textAlign:'left',
        // border:'1px solid red', 
        
    },
    dsix:{
        display:'flex',
        flexDirection:'column',
        alignContent:'space-between',
        justifyContent:'space-evenly',
    },
    dseven:{
        display:'flex',
        flexDirection:'column',
        alignContent:'space-between',
        justifyContent:'space-evenly',
    },
    deight:{
        position:'relative',
        top:'60px',
        left:'350px',
    },
    dnine:{
        width:'500px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        position:'relative',
        top:'10px',
        right:'60px'
        // border:'1px solid red', 
    },
    dten:{
        width:'100px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        // border:'1px solid red', 
    },
    deleven:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        alignContent:'space-betwen',
        alignItems:'flex-start',
        // border:'1px solid red',
        position:'relative',
        top:'50px',
        right:'120px'
    },
    space2:{
        height:'5vh',
    },

})


function Address(props) {
    const classes = useStyle()
    const [visible1, setVisible1] = useState(false)

    const oprnOrder=()=>{
        props.listenToDetails()
        setVisible1(true)
    }

    return (
        <Paper elevation={0} className={classes.addressmain}>
             
            <Box className={classes.detail}>
            <Box className={classes.space2} ></Box>
                <Box className={classes.done}>
                        <span style={{font:' normal normal medium 18px/24px Roboto', color: '#333232'}} >Customer Details</span>
                        <Button variant="outlined" sx={{background: '#FFFFFF 0% 0% no-repeat padding-box', borderRadius: '2px',
                                        color: '#A03037',font: 'normal normal normal 12px/16px Roboto', border: '1px solid #A03037'}}>Add New address</Button>
                    </Box>
                    <Box className={classes.dtwo}>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" size='small' />
                        <TextField id="outlined-basic" label="Mobile Number" variant="outlined" size='small'/>
                    </Box>
                    <Box className={classes.dthree}>
                        <FormControlLabel  value="one" control={<Radio />}  color="#A03037" />
                        <span style={{font:'normal normal medium 15px/20px Roboto',color: '#0A0102'}}>1. Work </span> 
                        <span style={{font:'normal normal medium 12px/16px Roboto', color: '#A03037',  position:'relative',left:'50px'}}>Edit</span>
                    </Box>
                    <Box className={classes.dfour}>
                        <span style={{font: 'normal normal normal 12px/16px Roboto',color: '#0A0102'}}>Address</span>
                        <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="BridgeLabz Solutions LLP, No. 42, 14th Main, 15th Cross, Sector 4,
                            Opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore"
                            style={{ width: 550, height:60, background:' #F5F5F5 0% 0% no-repeat padding-box', font: 'normal normal normal 12px/16px Roboto',color: '#878787' }}
                            />
                    </Box>
                    <Box className={classes.dfive}>
                        <Box className={classes.dsix}>
                        <span style={{font: 'normal normal normal 12px/16px Roboto',color: '#0A0102'}}>City/Town</span>
                        <TextField id="outlined" placeholder='Pune' variant="outlined" size='small'  style={{background:'#F5F5F5 0% 0% no-repeat padding-box',borderRadius: '2px',font:'normal normal normal 12px/16px Roboto'}}/>
                        </Box>
                        <Box className={classes.dseven}>
                        <span style={{font: 'normal normal normal 12px/16px Roboto',color: '#0A0102'}}>State</span>
                        <TextField id="outlined" placeholder="Maharashtra" variant="outlined" size='small' sx={{background:'#F5F5F5 0% 0% no-repeat padding-box',borderRadius: '2px',font:'normal normal normal 12px/16px Roboto'}}/>
                        </Box>
                    </Box>
                    <Box className={classes.deleven}>
                        <Box>
                            <span>Type</span>
                        </Box>
                        <Box className={classes.dnine}>
                            <Box  className={classes.dten}>
                                <FormControlLabel value="Two" control={<Radio />} />
                                <span style={{font: 'normal normal medium 15px/20px Roboto',color: '#0A0102'}}> Home </span>
                            </Box>
                            <Box className={classes.dten}>
                                <FormControlLabel value="Two" control={<Radio />} />
                                <span style={{font: 'normal normal medium 15px/20px Roboto',color: '#0A0102'}}> Work </span>
                            </Box>
                            <Box className={classes.dten}>
                                <FormControlLabel value="Two" control={<Radio />} />
                                <span style={{font: 'normal normal medium 15px/20px Roboto',color: '#0A0102'}}> other </span>
                            </Box>
                        </Box>
                
                    </Box>
                    
                    <Box  className={classes.deight}>
                        {
                            visible1 ? null : <Button variant="contained" onClick={oprnOrder} sx={{background:' #3371B5 0% 0% no-repeat padding-box', borderRadius: '3px'}}>Continue</Button>
                        }
                        
                    </Box>
            </Box>
        </Paper>
    );
}

export default Address;