import * as React from 'react';
import "./styles.scss";
import { Typography, Toolbar } from "@mui/material";
import { KeyboardArrowDown } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import DropDownMenu from './DropDownMenu';

const Header = ({
  pageTitle,
  children
}) => {
  const userData = useSelector((state) => state.user.userData);
  
  const onDropDown = () => {
    
  }

  return (
    <div className='headerBody'>
      <Toolbar>
        <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
          <Typography variant="h6" noWrap component="div" color="#000000" sx={{fontWeight: 'bold', flex: 1}}>
            {pageTitle}
          </Typography>
          <Typography variant="h7" noWrap component="div" color="#000000">
            {userData.fname}
          </Typography>
          <KeyboardArrowDown sx={{cursor: 'pointer'}} onClick={onDropDown}/>
          {/* <DropDownMenu /> */}
        </div>
      </Toolbar>
      {children}
    </div>
  )
}

export default Header;