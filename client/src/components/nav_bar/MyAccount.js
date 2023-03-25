import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Axios from "axios";
import useStyles from "./styles";
import { createInventory, getInventory } from "../../actions/inventory";
import * as api from "../../api/index";


const MyAccount = () => {
    const classes = useStyles();
    const [udata,setUData]=useState({
        "bname":'',
        'address':'',
        "eyear":'',
        "clist":'',
        "nproduct":'',
        "file":'',

    })

  
 

  const apiCall=async()=>{
    try {
        const id=JSON.parse(localStorage.getItem('profile')).result._id;
        const api=`http://localhost:5000/user/myProfile/${id}`;
        
        let ppdata=await Axios.get(api);
        setUData(ppdata.data)
        console.log (ppdata.data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    apiCall()
  },[])






  
  return (
    <Paper className={classes.paper}>
    
    
    
    <Typography variant="h5" style={{margin: "5rem" ,marginBottom: '0rem'}}  >{"My Account"}</Typography>
    <div style={{margin: "5rem" ,marginTop: '.5rem'}}  >

    <div style={{display: 'flex', alignItems: "center"}} >
        <Typography variant="h6">Business Name : </Typography>
        <Typography >{udata.bname}</Typography>
        </div>

        <div style={{display: 'flex', alignItems: "center"}} >
        <Typography variant="h6" >Address : </Typography>
        <Typography>{udata.address}</Typography>
        </div>
        <div style={{display: 'flex', alignItems: "center"}} >
        <Typography variant="h6" >Establishment Year : </Typography>
        <Typography>{udata.eyear}</Typography>
        </div>

        <div style={{display: 'flex', alignItems: "center"}} >
        <Typography variant="h6" >Product : </Typography>
        <Typography>{udata.nproduct}</Typography>
        </div>
      <br/>
        <div>
        <img src={udata.file} height="100px" width='100px' />
        </div>
      </div>

       
   
         

   
    </Paper>
  );
};

export default MyAccount;
