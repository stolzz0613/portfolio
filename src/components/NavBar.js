import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import avatarPic from "../avatar.png";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from "@material-ui/icons";

// CSS STYLES

const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: "tan"
    }
}));

const menuIcons = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/portfolio"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/portfolio/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
    },
];

const NavBar = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    }
    const sideList = slider => (
        <Box 
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatarPic} alt="Image"/>
            <Divider/>
            <List>
                {menuIcons.map((IsItem, key)=>(
                    <ListItem button key={key} component={Link} to={IsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {IsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={IsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider
                        anchor="right"
                        onClose={toggleSlider("right", false)}
                        open={state.right}
                    >
                        {sideList("right")} 
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default NavBar
