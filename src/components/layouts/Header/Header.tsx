import { Button } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function handleLogout (){
    localStorage.removeItem('token');
    navigate("/")
  }

  return(
    <>
      <div className=" py-10 bg-blue-500 ">
        <div className="flex justify-end px-8">
          <Button onClick={handleLogout} variant="contained" size="small" startIcon={<LogoutIcon/>}>Logout</Button>
        </div>
      </div>
    </>
  )
}

export default Header