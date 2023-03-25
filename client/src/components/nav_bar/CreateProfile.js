import React,{useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import FileBase64 from "react-file-base64";
import Fab from "@mui/material/Fab";
import Axios from 'axios'
const CreateProfile = () => {
    const [udata,setUData]=useState({
        "id": '',
        "bname":'',
        'address':'',
        "eyear":'',
        "clist":'',
        "nproduct":'',
        "file":'',

    })
    // console.log(,"hii")
  const chaneHandler=(event)=>{
     console.log("hii");
   const n=event.target.name;
  setUData({...udata,[n]:event.target.value})
  }

  const fileUpload=()=>{

  }

  
  const handleSubmit = async(event) => {
    const id=JSON.parse(localStorage.getItem('profile')).result._id;
    const api=`http://localhost:5000/user/profile/${id}`;
    event.preventDefault();
    console.log("hello")
    try {
      
      const pdata=await Axios.patch(api,{...udata,id:id});
      console.log(pdata)
    } catch (error) {
      console.log(error)
    }
    console.log("uiuiuuinu");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create Profile
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            value={udata.bname}
            fullWidth
            onChange={chaneHandler}
            id="bname"
            label="Business Name"
            name="bname"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            value={udata.address}
            onChange={chaneHandler}
            fullWidth
            name="address"
            label="Address"
            type="text"
            id="address"
            autoComplete="address"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            value={udata.eyear}
            onChange={chaneHandler}
            name="eyear"
            label="Establishment Year"
            type="text"
            id="eyear"
            autoComplete="eyear"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={udata.clist}
            onChange={chaneHandler}
            name="clist"
            label="Category"
            type="text"
            id="clist"
            autoComplete="clist"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={udata.nproduct}
            onChange={chaneHandler}
            name="nproduct"
            label="Number of Product"
            type="text"
            id="nproduct"
            autoComplete="address"
          />
          <div>
            Upload Logo
            </div>
            <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setUData({ ...udata, file: base64 })
                  }
                />
           
          <br></br>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            onClick={handleSubmit} 
            // onClick={submitHandler}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default CreateProfile;
