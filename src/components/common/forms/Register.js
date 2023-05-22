import * as React from 'react';
import { useState } from "react";
import { Navigate, useNavigate, Link } from 'react-router-dom';
import CustomSnackbar from '../utils/CustomSnackbar';

// styles
import { InputLabel, Grid, FormControl, Select, MenuItem, Typography, Container, Avatar, Checkbox, Box, Button, CssBaseline, TextField, FormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { createUserAccount } from '../../../api/common/commonApis.js';


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

export default function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password_confirmation: "",
        password: "",
        role: "",

        snackbarMessage: "",
        openSnackbar: false,
        snackbarSeverity: "success",
    })

    const {
        username,
        password,
        password_confirmation,
        role,

        snackbarMessage,
        openSnackbar,
        snackbarSeverity,
    } = values;

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const closeSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setValues({ ...values, openSnackbar: false });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
        createUserAccount(
            username,
            password,
            password_confirmation,
            role,
        ).then((res) => {
            if (res.status === 201) {
                setValues({
                    username: "",
                    password_confirmation: "",
                    password: "",
                    role: "",

                    snackbarMessage: "Account Created Successfully, Proceed to Log In",
                    openSnackbar: true,
                    snackbarSeverity: "success",
                })

                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            } else {
                setValues({
                    username: "",
                    password_confirmation: "",
                    password: "",
                    role: "",

                    snackbarMessage: "Something Went Wrong, please retry",
                    openSnackbar: true,
                    snackbarSeverity: "error",
                });
            }
        })
            .catch((err) => {
                // TODO: DISPLAY ERROR MESSAGES ON APPROPRIATE FIELD
                setValues({
                    username: "",
                    password_confirmation: "",
                    password: "",
                    role: "",

                    snackbarMessage: "Something Went Wrong, please retry",
                    openSnackbar: true,
                    snackbarSeverity: "error",
                });
            });
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
                        Create Account
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Preferred Username"
                            name="username"
                            autoComplete="name"
                            onChange={handleChange("username")}
                            value={username}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Preferred Password"
                            type="password"
                            onChange={handleChange("password")}
                            value={password}
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password_confirmation"
                            label="Retype Password"
                            type="password"
                            onChange={handleChange("password_confirmation")}
                            value={password_confirmation}
                            id="password_confirmation"
                            autoComplete="current-password"
                        />
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Role</InputLabel>
                            <Select
                                labelId="select-label"
                                id="simple-select"
                                value={role}
                                label="Role"
                                onChange={handleChange("role")}
                            >
                                {/* <MenuItem value="SCHOOL_ADMIN">School</MenuItem> */}
                                <MenuItem value="ADMIN">LinkedIn Admin</MenuItem>
                                <MenuItem value="SEEKER">Job Seeker</MenuItem>
                                <MenuItem value="EMPLOYER">Company Admin</MenuItem>
                            </Select>
                        </FormControl>
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
                            CREATE ACCOUNT
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/reset" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    {"Have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}