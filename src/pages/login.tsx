import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import { ProfileDocument, useLoginMutation } from "../utils/graphql";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import NextLink from "next/link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";

interface LoginState {
   email: string;
   password: string;
}

const initialLoginState: LoginState = {
   email: "",
   password: "",
};

type Actions =
   | { type: "EMAIL"; email: string }
   | { type: "PASSWORD"; password: string };

const loginreducer: React.Reducer<LoginState, Actions> = (
   prevState,
   action
) => {
   switch (action.type) {
      case "EMAIL":
         return {
            ...prevState,
            email: action.email,
         };
      case "PASSWORD":
         return {
            ...prevState,
            password: action.password,
         };
      default:
         return prevState;
   }
};

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

export default function SignIn() {
   const router = useRouter();
   const classes = useStyles();
   let [loginMutation, { loading }] = useLoginMutation();
   const [{ email, password }, dispatch] = useReducer(
      loginreducer,
      initialLoginState
   );
   const onSubmit: React.FormEventHandler = async (
      e: React.FormEvent | React.MouseEvent
   ) => {
      e.preventDefault();
      const { data } = await loginMutation({
         variables: {
            email,
            password,
         },
         refetchQueries: [{ query: ProfileDocument }],
      });
      if (data?.login?.id) {
         router.push("/");
      }
   };

   return (
      <>
         <Navbar></Navbar>
         <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign in
               </Typography>
               <form onSubmit={onSubmit} className={classes.form} noValidate>
                  <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Email Address"
                     name="email"
                     autoFocus
                     value={email}
                     onChange={(e) =>
                        dispatch({
                           type: "EMAIL",
                           email: e.target.value,
                        })
                     }
                  />
                  <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     value={password}
                     onChange={(e) =>
                        dispatch({
                           type: "PASSWORD",
                           password: e.target.value,
                        })
                     }
                  />
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.submit}
                     disabled={loading}
                     onClick={onSubmit}
                  >
                     Sign In
                  </Button>
                  <Grid container>
                     <Grid item xs>
                        <NextLink href="/forgotpassword">
                           <Link variant="body2">{"Forgot Password?"}</Link>
                        </NextLink>
                     </Grid>
                     <Grid item>
                        <NextLink href="/signup">
                           <Link variant="body2">
                              {"Don't have an account? Sign Up"}
                           </Link>
                        </NextLink>
                     </Grid>
                  </Grid>
               </form>
            </div>
         </Container>
      </>
   );
}
