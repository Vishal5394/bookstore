import React from 'react';
// import './signup.css';
import img1 from './component.png';
import img2 from './twobooks.jpg';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputBase, TextField } from '@mui/material';
import { useState } from "react";
import { signup } from './services/userservices';


const fullNameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /^([6-9]{1}[0-9]{9})$/;




const useStyle = makeStyles({
    background: {
        width: '100vw',
        height: '100vh',
        /* border: '1px solid red', */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },

    imgbox: {
        width: '30%',
        height: '45%',
        /* border: '1px solid red', */
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderradius: '5%',
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
        height: '60%',
        /* border: '1px solid red ',*/
        position: 'relative',
        right: '70px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '5px',
    },

    head1: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // border: '1px solid red', 
    },

    child3: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        top: '0px',
        right: '0px',
        /* border: '1px solid red',*/
    },

    span: {
        textAlign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        textTransform: 'capitalize',
        opacity: '1',
    },

    middle: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        /* border: '1px solid red',*/
        position: 'relative',
        top: '-15px',
    },

    label: {
        textAlign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        textTransform: 'capitalize',
        opacity: ' 1',
        position: 'relative',
        right: '90px',
        marginTop: '10px',
    }
})

function Signup(props) {
    const classes = useStyle()
    const openSignin = () => {
        props.listenToSignup()
    }

    const [signupdata, setsignupdata] = useState({ fullName: "", email: "", password: "",phone:"", service: "advance" })
    const [regexdata, setregexdata] = useState({
        fullNameborder: false, fullNamehelper: "", phoneborder: false, phonehelper: "",
        emailborder: false, emailhelper: "", passwordborder: false, passwordhelper: ""
    })

    const takeFullName = (event) => {
        setsignupdata((prevstate) => ({ ...prevstate, fullName: event.target.value }))
        console.log(signupdata)
    }
    const takeEmail = (event) => {
        setsignupdata((prevstate) => ({ ...prevstate, email: event.target.value }))
        console.log(signupdata)
    }
    const takePassword = (event) => {
        setsignupdata((prevstate) => ({ ...prevstate, password: event.target.value }))
        console.log(signupdata)
    }
    const takePhone = (event) => {
        setsignupdata((prevstate) => ({ ...prevstate, phone: event.target.value }))
        console.log(signupdata)
    }
    const submit = () => {
        console.log(signupdata, "aftersubmit")
        let fullNametest = fullNameRegex.test(signupdata.fullName)
        let phonetest = phoneRegex.test(signupdata.phone)
        let emailtest = emailRegex.test(signupdata.email)
        let passwordtest = passwordRegex.test(signupdata.password)
        if (fullNametest === false) {
            setregexdata((prevstate) => ({ ...prevstate, fullNameborder: true, fullNamehelper: "Enter Correct First Name" }))
        }
        else if (fullNametest == true) {
            setregexdata((prevstate) => ({ ...prevstate, fullNameborder: false, fullNamehelper: "" }))
        }
        if (phonetest === false) {
            setregexdata((prevstate) => ({ ...prevstate, phoneborder: true, phonehelper: "Enter Correct mobile No." }))
        }
        else if (phonetest == true) {
            setregexdata((prevstate) => ({ ...prevstate, phoneborder: false, phonehelper: "" }))
        }
        if (emailtest === false) {
            setregexdata((prevstate) => ({ ...prevstate, emailborder: true, emailhelper: "Enter Correct email" }))
        }
        else if (emailtest == true) {
            setregexdata((prevstate) => ({ ...prevstate, emailborder: false, emailhelper: "" }))
        }
        if (passwordtest === false) {
            setregexdata((prevstate) => ({ ...prevstate, passwordborder: true, passwordhelper: "Enter Correct password" }))
        }
        else if (passwordtest == true) {
            setregexdata((prevstate) => ({ ...prevstate, passwordborder: false, passwordhelper: "" }))
        }
        if(fullNametest === true && phonetest === true && emailtest === true && passwordtest === true) {
           signup(signupdata).then(
                (responce) => {
                    console.log(responce)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
            console.log("Signup in Successfilly")
        }
    }

    return (
        <Paper className={classes.background} sx={{ backgroundColor: '#9e9e9e' }}>
            <Box className={classes.imgbox} elevation={4}  >
                <img className={classes.img1} id='img1' src={img1} alt="img1" />
                <img className={classes.img2} id='img2' src={img2} alt="img2" />
                <p className={classes.imgboxp}>Online Book Shopping</p>
            </Box>
            <Box className={classes.main} elevation={4}>
                <Box className={classes.head1}>
                    <h3 style={{ color: '#878787' }} onClick={openSignin}>LOGIN</h3>
                    <h3 >SIGNUP</h3>
                </Box>
                <Box className={classes.middle} container direction={"column"} spacing={4} >


                    <label className={classes.label} >Full Name</label>
                    <TextField size='small' variant="outlined" onChange={takeFullName} 
                    error={regexdata.fullNameborder} helperText={regexdata.fullNamehelper}
                    sx={{ width: '70%', borderRadius: '2px', height: '30px' }} />


                    <label className={classes.label}>Email Id</label>
                    <TextField size='small' variant="outlined" onChange={takeEmail} 
                    error={regexdata.emailborder} helperText={regexdata.emailhelper}
                     sx={{ width: '70%', borderRadius: '2px', height: '30px'}} />


                    <label className={classes.label}>Password</label>s
                    <TextField size='small' variant="outlined" onChange={takePassword} 
                    error={regexdata.passwordborder} helperText={regexdata.passwordhelper}
                     sx={{ width: '70%', borderRadius: '2px', height: '30px' }} />

                    <label className={classes.label}>Mobile No.</label>
                    <TextField size='small' variant="outlined" onChange={takePhone} 
                    error={regexdata.phoneborder} helperText={regexdata.phonehelper}
                     sx={{ width: '70%', borderRadius: '2px', height: '30px' }} />

                </Box>
                <Box className={classes.child3}>
                    <Button variant="contained" sx={{ backgroundColor: '#b71c1c', width: '70%' }} onClick={submit}>Signup</Button>
                </Box>
                <VisibilityOffIcon sx={{ position: 'relative', left: '265px', top: '-130px' }} />
            </Box>
        </Paper>
    );
}

export default Signup;