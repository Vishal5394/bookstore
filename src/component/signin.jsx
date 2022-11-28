import React from 'react';
// import './signin.css';
import img1 from './component.png';
import img2 from './twobooks.jpg';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputBase, TextField } from '@mui/material';
import { useState } from "react";
import { login } from './services/userservices';
import {useNavigate} from "react-router-dom";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
    background: {
        width: '100vw',
        height: '100vh',
        /* border: 1px solid red; */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        aligncontent: 'center',
    },

    imgbox: {
        width: '30%',
        height: '45%',
        //  border: '1px solid red', 
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: '5%',
        position: 'relative',
        left: '100px',
    },

    img1: {
        width: '40%',
        height: '60%',
        borderRadius: '50%',
        position: 'relative',
        right: '80px',
    },
    img2: {
        width: '8%',
        height: '8%',
        borderRadius: '60%',
        position: 'relative',
        top: '-150px',
        right: '30px',
    },

    imgboxp: {
        position: 'relative',
        right: '80px',
        textAlign: 'left',
        font: 'normal normal medium 18px/24px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        textTransform: 'uppercase',
        opacity: '1',

    },

    main: {
        width: '23%',
        height: '55%',
        /* border: '1px solid red', */
        position: 'relative',
        right: '70px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderRadius: '5px',
    },

    head: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'space-between',
        alignItems: 'center',
        /* border: '1px solid red',*/
    },

    child: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        top: '-20px',
        right: '0px',
        // border: '1px solid red',
    },

    child2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'relative',
        top: '-10px',
    },

    span: {
        textAlign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        textTransform: 'capitalize',
        opacity: '1',
        // border: '1px solid red',
        marginTop: '10px',
    },

    middle: {
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        /* border: '1px solid red', */
        position: 'relative',
        top: '-15px',
    },

    email: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
    },
    password: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        position:"relative",
        top:'10px'
    },

    passwordp: {
        textAlign: 'right',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#9D9D9D',
        opacity: '1',
        //  border: '1px solid red', 
        position: 'relative',
        top: '-20px'
    }
})

function Signin(props) {
    const navigate = useNavigate()
    const classes = useStyle()
    const openSignup = () => {
        props.listenToSignin()
    }

    const [signindata, setsignindata] = useState({ email: "", password: "" })
    const [regexdata, setregexdata] = useState({ emailborder: false, emailhelper: "", passborder: false, passhelper: "" })

    const takeEmail = (event) => {
        setsignindata((prevstate) => ({ ...prevstate, email: event.target.value }))
        console.log(signindata)
    }
    const takePassword = (event) => {
        setsignindata((prevstate) => ({ ...prevstate, password: event.target.value }))
        console.log(signindata)
    }

    const submit = () => {
        let emailtest = emailRegex.test(signindata.email)
        let passwordtest = passwordRegex.test(signindata.password)

        if (emailtest === false) {
            setregexdata((prevstate) => ({
                ...prevstate, emailborder: true,
                emailhelper: "Enter Correct email"
            }))
        }
        else if (emailtest === true) {
            setregexdata((prevstate) => ({
                ...prevstate, emailborder: false, emailhelper: ""
            }))
        }
        if (passwordtest === false) {
            setregexdata((prevstate) => ({
                ...prevstate, passborder: true, passhelper: "Enter Correct password"
            }))
            console.log("password test")
        }
        else if (passwordtest == true) {
            setregexdata((prevstate) => ({
                ...prevstate, passborder: false, passhelper: ""
            }))
        }
        console.log(signindata)
        if (emailtest === true && passwordtest === true) {
            login(signindata).then(
                (responce) => {
                    navigate('/dashboard')
                    console.log(responce);
                    localStorage.setItem('token', responce.data.result.accessToken)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
            console.log("log in Successfilly")
        }

    }

    return (
        <Paper className={classes.background} sx={{ backgroundColor: '#9e9e9e' }}>
            <Box className={classes.imgbox} elevation={4}>
                <img className={classes.img1} id='img1' src={img1} alt="img1" width='40%' height='60%' />
                <img className={classes.img2} id='img2' src={img2} alt="img2" width='8%' height='8%' />
                <p className={classes.imgboxp}>Online Book Shopping</p>
            </Box>
            <Box className={classes.main} elevation={4}>
                <Box className={classes.head}>
                    <h3>LOGIN</h3>
                    <h3 style={{ color: '#878787' }} onClick={openSignup}>SIGNUP</h3>
                </Box>
                <Box className={classes.middle} container direction={"column"} spacing={2}  >
                    <Box className={classes.email}>
                        <span className={classes.span}>Email Id</span>
                        <TextField id="email" size='small' variant="outlined" onChange={takeEmail} error={regexdata.emailborder}
                            helperText={regexdata.emailhelper} sx={{ width: '100%', borderRadius: '2px', height: '30px' }} />
                    </Box>
                    <Box className={classes.password}>
                        <span className={classes.span}>Password</span>
                        <TextField size='small' variant="outlined" onChange={takePassword} error={regexdata.passborder}
                            helperText={regexdata.passhelper} sx={{ width: '100%', borderRadius: '2px', height: '30px' }} />

                        <VisibilityOffIcon sx={{ position: 'relative', left: '85%', top: '-20%' }} />
                        <p className={classes.passwordp} >Forgot password?</p>
                    </Box>
                </Box>
                <Box className={classes.child}>
                    <Button variant="contained" sx={{ backgroundColor: '#b71c1c', width: '70%' }} onClick={submit}>Login</Button>
                    <h5>OR</h5>
                </Box>
                <Box className={classes.child2}>
                    <Button variant="contained">Facebook</Button>
                    <Button variant="contained" sx={{ color: 'black', backgroundColor: '#f5f5f5' }}>Google</Button>
                </Box>

            </Box>

        </Paper>

    )

}

export default Signin