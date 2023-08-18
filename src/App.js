import * as React from 'react';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from '@mui/material';


const useStyles = makeStyles({
  button: {
    color:"white",
    backgroundColor:"black"
  },
});
const App = () => {
  const classes = useStyles();
  return (
    <div>
     <Button
     variant="contained" 
     size="large" 
     startIcon={<PersonIcon />}
     className={classes.button}
     >
     MATERIAL UI
     </Button>
     </div>
  )
}
export default App;
