import { Typography } from "@mui/material";
import { FC } from "react"
import { Link } from "react-router-dom";

type CopyRightProps = {
  name: string
}
const Copyright: FC<CopyRightProps> = (props: CopyRightProps) =>{
  const {name} = props;

  return(
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        {name}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default Copyright;