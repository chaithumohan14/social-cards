import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useProfileQuery } from "../utils/graphql";
import {
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   SwipeableDrawer,
   Avatar,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         flexGrow: 1,
      },
      menuButton: {
         marginRight: theme.spacing(2),
      },
      title: {
         flexGrow: 1,
         cursor: "default",
      },
      slider: {
         width: "auto",
      },
   })
);

function Navbar() {
   const router = useRouter();
   const classes = useStyles();
   const { client, data } = useProfileQuery();
   const [sliderState, setSlider] = useState(false);
   const logout = () => {
      localStorage.removeItem("token");
      client.resetStore();
   };

   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setSlider(!sliderState)}
               >
                  <MenuIcon />
               </IconButton>
               <SwipeableDrawer
                  open={sliderState}
                  onOpen={() => setSlider(true)}
                  onClose={() => setSlider(false)}
                  className={classes.slider}
                  anchor="left"
               >
                  <List>
                     {data?.profile?.id && (
                        <ListItem>
                           <ListItemIcon>
                              <Avatar>
                                 {" "}
                                 {data.profile.username
                                    ?.slice(0, 2)
                                    .toUpperCase()}{" "}
                              </Avatar>
                           </ListItemIcon>
                           <ListItemText>
                              Hi , {data.profile.username}
                           </ListItemText>
                        </ListItem>
                     )}
                     <ListItem
                        button
                        style={{
                           width: 200,
                        }}
                        onClick={() => router.push("/")}
                     >
                        <ListItemIcon>
                           <Home></Home>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                     </ListItem>
                  </List>
               </SwipeableDrawer>
               <Link href="/">
                  <Typography variant="h6" className={classes.title}>
                     Social Cards
                  </Typography>
               </Link>
               {data?.profile?.id ? (
                  <Button onClick={logout} color="inherit">
                     Logout
                  </Button>
               ) : (
                  <>
                     <Link href="/login">
                        <Button color="inherit">Login</Button>
                     </Link>
                     <Link href="/signup">
                        <Button color="inherit">Sign Up</Button>
                     </Link>
                  </>
               )}
            </Toolbar>
         </AppBar>
      </div>
   );
}
export default Navbar;
