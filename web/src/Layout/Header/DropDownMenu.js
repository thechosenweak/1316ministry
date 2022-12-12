import { Menu, MenuItem, Fade } from "@mui/material";
import { EditIcon, FileCopyIcon, ArchiveIcon, MoreHorizIcon } from '@mui/icons-material';

const DropDownMenu = ({
    anchorEl,
    handleClose,
    open
}) => {

    return (
        <Menu
            id="fade-menu"
            MenuListProps={{
            'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    )
}

export default DropDownMenu;