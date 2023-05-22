import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import {
    setLoggedInUserRef,
    setCurrentUserRole,
    setAccessToken,
} from '../../../features/users/userSlice';


import jwt_decode from "jwt-decode";



// styles
import {
    Grid,
    Typography,
    Container,
    Checkbox,
    Box,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    InputAdornment,
    IconButton,
} from '@mui/material';
import CustomSnackbar from '../utils/CustomSnackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { LoadingButton as _LoadingButton } from '@mui/lab';
import { generateToken } from '../../../api/common/commonApis';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                LinkedIn
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        username: "",
        password: "",

        showPassword: false,

        snackbarMessage: "",
        openSnackbar: false,
        snackbarSeverity: "success",
    })

    const {
        username,
        password,

        showPassword,

        snackbarMessage,
        openSnackbar,
        snackbarSeverity,
    } = values;

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    function handleHome(role) {
        if (role === "ADMIN") {
            navigate("/admin")
        } else if (role === "EMPLOYER") {
            navigate("/company")
        } else if (role === "SEEKER") {
            navigate("/seeker")
        } else {
            console.log({ error: "Invalid role" })
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // const response = await 
        generateToken(username, password).then((response) => {
            if (response.status === 200) {
                // decodes JWT to determine user role and reference
                const decodedToken = jwt_decode(response.data.accessToken)
                dispatch(setAccessToken({ accessToken: response.data.accessToken }));
                dispatch(setLoggedInUserRef({ loggedInUserRef: decodedToken.user_ref }));
                dispatch(setCurrentUserRole({ currentUserRole: decodedToken.role }));
                handleHome(decodedToken.role)
            }
        })
            .catch((err) => {
                // TODO: DISPLAY ERROR MESSAGES ON WRONG CREDENTIALS
                setValues({
                    username: "",
                    password: "",

                    snackbarMessage: "Invalid details, please retry with correct details",
                    openSnackbar: true,
                    snackbarSeverity: "error",
                });
            });

    };
    const setPasswordVisibility = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: !values[prop],
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const closeSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setValues({ ...values, openSnackbar: false });
    };



    return (
        <ThemeProvider theme={theme}>
            <CustomSnackbar
                openSnackbar={openSnackbar}
                handleClose={closeSnackbar}
                snackbarMessage={snackbarMessage}
                snackbarSeverity={snackbarSeverity}
            />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <img
                            alt="LinkedIn"
                            src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
                            style={{ width: "150px", height: "30px", marginRight: "20px" }}
                        ></img>
                    </Box>
                    <Typography component="h6" variant="h6">
                        Sign In To Account
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            sx={{ mt: 3 }}
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            onChange={handleChange("username")}
                            value={username}
                            autoFocus
                        />
                        <TextField
                            type={values.showPassword ? "text" : "password"}
                            fullWidth
                            required
                            sx={{ mt: 3 }}
                            id='password'
                            label="Password"
                            name="password"
                            value={password}
                            onChange={handleChange("password")}
                            errorMessages={["This Field is Required"]}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={setPasswordVisibility("showPassword")}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOffIcon />
                                            ) : (
                                                <VisibilityIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>

                    </Box>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/reset" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup" variant="body2">
                                {"New To LinkedIn?"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}