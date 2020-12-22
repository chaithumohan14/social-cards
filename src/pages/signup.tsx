import React, { useReducer } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "../components/Navbar";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { ProfileDocument, useRegisterMutation } from "../utils/graphql";

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
      marginTop: theme.spacing(3),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

interface RegisterState {
   email: string;
   password: string;
   username: string;
   firstName?: string;
   lastName?: string;
}

const registerInitialState: RegisterState = {
   email: "",
   password: "",
   username: "",
};

type Actions =
   | { type: "EMAIL"; email: string }
   | { type: "PASSWORD"; password: string }
   | { type: "USERNAME"; username: string };

const registerRed: React.Reducer<RegisterState, Actions> = (
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
      case "USERNAME":
         return {
            ...prevState,
            username: action.username,
         };
   }
};

function SignUp() {
   const router = useRouter();
   const classes = useStyles();
   const [{ email, password, username }, dispatch] = useReducer(
      registerRed,
      registerInitialState
   );
   const [register, { loading }] = useRegisterMutation();
   //    const { data } = useProfileQuery();
   const onSubmit = async (e: React.FormEvent | React.MouseEvent) => {
      e.preventDefault();
      const { data: newData } = await register({
         variables: {
            username,
            email,
            password,
         },
         refetchQueries: [{ query: ProfileDocument }],
      });
      if (newData?.register?.id) {
         router.push("/");
         return <></>;
      }
   };

   return (
      <>
         <Navbar />
         <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign up
               </Typography>
               <form onSubmit={onSubmit} className={classes.form} noValidate>
                  <Grid container spacing={2}>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           id="username"
                           label="Username"
                           name="username"
                           autoComplete="username"
                           value={username}
                           onChange={(e) =>
                              dispatch({
                                 type: "USERNAME",
                                 username: e.target.value,
                              })
                           }
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           id="email"
                           label="Email Address"
                           name="email"
                           autoComplete="email"
                           value={email}
                           onChange={(e) =>
                              dispatch({
                                 type: "EMAIL",
                                 email: e.target.value,
                              })
                           }
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           name="password"
                           label="Password"
                           type="password"
                           id="password"
                           autoComplete="current-password"
                           value={password}
                           onChange={(e) =>
                              dispatch({
                                 type: "PASSWORD",
                                 password: e.target.value,
                              })
                           }
                        />
                     </Grid>
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.submit}
                     onClick={onSubmit}
                     disabled={loading}
                  >
                     Sign Up
                  </Button>
                  <Grid container justify="flex-end">
                     <Grid item>
                        <NextLink href="/login">
                           <Link variant="body2">
                              Already have an account? Sign in
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

export default SignUp;
