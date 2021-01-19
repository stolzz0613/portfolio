import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";

// CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: 'absolute',
        left:'50%',
        top: '50%',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
        width: "100vw",
        zIndex: 1,
    },
}))
const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify= "center">
                <Avatar className={classes.avatar} src={avatar} alt="image"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Andres Bustos"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed 
                    strings={["Web Design", "Web Development", "MERN Stack"]} 
                    typeSpeed={60} 
                    backSpeed={50}
                    loop
                />
            </Typography>
        </Box>
    )
}

export default Header
