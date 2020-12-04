import React, {useState} from "react"
import { makeStyles, useTheme } from '@material-ui/styles';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab} from "@material-ui/core"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: ".5em",
        [theme.breakpoints.down("md")]: {
          marginBottom: ".5em"
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: 0
        } 
      },
    appBar: {
        display: "flex",
        alignItems: "center",
        padding: ".5%"
    },
    movingBar: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    activeTab: {
        textShadow: "1px 1px 1px  #FFFFFF",
        color: "white",
        fontSize: "1em",
    },
    tab: {
        color: "white",
        fontSize: "1em"
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
      },
    drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
        backgroundColor: "transparent"
    }
    },
    drawer: {
    backgroundColor: theme.palette.primary.light,
    width: "30%"
    },
    drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
    fontSize: "1.5em"
    },
    drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
    "& .MuiListItemText-root": {
        opacity: 1
    }
    },
    appbar: {
    zIndex: theme.zIndex.modal + 1
    },
    
}))
export default function Header(props) {
    const [value, setValue] = useState(0)
    const [openDrawer, setOpenDrawer] = useState(false)

    const theme = useTheme();
    const classes = useStyles();

    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);




    function ElevationScroll(props) {
        const {children} = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: props.window ? window() : undefined
        });
        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
            style: {
                backgroundColor: trigger ? "#0D4F8B": "transparent",
            }
        });
    }
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const routes = [{name: "Home", link: "/", activeIndex: 0}, {name: "About", link: "/about", activeIndex: 1}, {name: "Projects", link: "/projects", activeIndex: 2}, {name: "Contact", link: "/contact", activeIndex: 3}]

    const tabs = (
        <>
            <Tabs value={value} onChange={handleChange} indicatorColor = "secondary">
                {routes.map((route, index) => (
                    <Tab key={`${route}${index}`} component={Link} to={route.link} label={route.name} className={value === route.activeIndex ? classes.activeTab : classes.tab}/>
                ))}
            </Tabs>
        </>
    )

    const drawer = (
        <>
            <SwipeableDrawer  disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)} classes={{paper: classes.drawer}}>
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {routes.map((route, index) => (
                        <ListItem 
                            key={`${route}${route.activeIndex}`} divider button 
                            component={Link} to={route.link} 
                            selected={value === route.activeIndex}  className={value === route.activeIndex ? classes.activeTab : classes.tab} 
                            onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}}>
                                <ListItemText className={classes.drawerItem} disableTypography>
                                    {route.name}
                                </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}  disableRipple className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </>
    )
    return (
        <div>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar disableGutters>
                    {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
                
            </ElevationScroll>
        </div>
    )
}