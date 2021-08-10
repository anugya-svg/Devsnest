import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { user,email } from '../actions';
import {useSelector,useDispatch} from "react-redux"
const App=()=>{
    const newEmail=useSelector((state)=>state.email)
    const newUser=useSelector((state)=>state.user)

    const dispatch=useDispatch();
    return (
        <div className="main">
          
            <TextField variant="outlined" label="UserName" size="medium" className="input" color="secondary" onChange={(e)=>{
                dispatch(user(e.target.value))
            }}></TextField>
            <TextField variant="outlined" label="Email" size="medium" color="secondary" className="input" onChange={(e)=>{
                dispatch(email(e.target.value))
            }}></TextField>
            <Typography variant="h5" display="block" >Name:{newUser}</Typography>
            <Typography variant="h5" display="block" >Email:{newEmail}</Typography>
           
        </div>
    )
}
export default App;