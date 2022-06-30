import { Logout, Phone, } from "@mui/icons-material";
import  {
  BottomNavigation,
  BottomNavigationAction,
  Avatar,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material"
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function bottomNav() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => { dispatch({ type: 'LOGOUT' })}

    const handleProfClick = ()=>{
        history.push("/profile")
    }
  return (
    <>
      <BottomNavigation sx={{ position: "relative"}}showLabels> 
        <BottomNavigationAction label="" icon={<Logout />} onClick={handleLogout}/>

         
        <BottomNavigationAction label="Call" 
        
        
        
        //INSERT SPEED DIAL COMP HERE AS AN ICON
        icon={<SpeedDial
          ariaLabel="SpeedDial basic"
          sx={{ position: "absolute", mb: 15}}
          icon={<SpeedDialIcon />}
        >   <Box sx={{ position: "absolute", mt: 10}}>
             <h1>Hello</h1>
             </Box>
            <SpeedDialAction
           
            icon={<Phone />}
            />
      
            </SpeedDial> } />
     

        
      
   
        <BottomNavigationAction label="" icon={<Avatar/>} onClick={handleProfClick}/>

       </BottomNavigation>
    </>
  );
}

export default bottomNav;
