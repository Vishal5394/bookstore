import React, { useState } from "react";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyle = makeStyles({
    buttondiv: {
        width:'250px',
        height:'50px',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItem:'center',
        border:'1px solid #DBDBDB',
    },
    count:{
        width:'80px',
        height:'50px',
        position:'relative',
        top:'-25px',
        border:'1px solid #DBDBDB',
        borderRadius:'20px',
    }
})

function Counter () {
    const classes = useStyle()
  const [count, setCount] = useState(0);
  
const incNum = () =>{
    setCount(count+1);
}

const decNum = () =>{
    if (count > 0){
        setCount(count-1);
    } else {
        setCount(0);
    }
}
  return (
    < div className={classes.mindiv}>
        <div className={classes.buttondiv}>
        <Fab size="medium" color="#FAFAFA" aria-label="add" onClick={incNum}>
            <AddIcon />
        </Fab>
            <h1 className={classes.count}>{count}</h1>
            <Fab size="medium" color="#FAFAFA" aria-label="substract" onClick={decNum}>
                <RemoveIcon />
            </Fab>
        </div>
    </div>
  )
}

export default Counter;