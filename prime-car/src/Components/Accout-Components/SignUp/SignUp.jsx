import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {supabase} from "../../../assets/supabaseClient";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Prime Car
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUp() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
            const {user, error} = await supabase.auth.signUp({
                email: data.get('email'),
                password: data.get('password'),
                options: {
                    data: {
                        first_name: data.get('firstName'),
                        family_name: data.get('lastName'),
                    }
                }
            });

            if (error) {
                console.error('Error registration in:', error.message);
                alert('Error registration in: ' + error.message);
                return;
            }

            console.log('User registration in:', user);
            alert('Thx, for registration!')
            // Redirect or perform other actions upon successful Registration
        } catch (error) {
            console.error('Error registration in ', error.message);
            alert('Error registration in: ' + error.message);
            // Handle Registration error, e.g., display an error message to the user
        }
    };

    return (
        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'black',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{bgcolor: 'black'}}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Link
                        href="/"
                        level="title-lg"
                        sx={{
                            fontFamily: 'American Captain',
                            fontWeight: 400,
                            fontSize: '56px',
                            lineHeight: '56px',
                            paddingLeft: '0',
                            color: 'White',
                            marginTop: '10%',
                            marginBottom: '5%',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'none',
                            }
                        }}
                    >
                        Prime Car
                    </Link>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    InputLabelProps={{style: {color: 'white'}}}
                                    InputProps={{style: {color: 'white'}}}
                                    sx={{backgroundColor: 'rgba(19 19 24 / 0.4)'}}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    InputLabelProps={{style: {color: 'white'}}}
                                    InputProps={{style: {color: 'white'}}}
                                    sx={{backgroundColor: 'rgba(19 19 24 / 0.4)'}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    InputLabelProps={{style: {color: 'white'}}}
                                    InputProps={{style: {color: 'white'}}}
                                    sx={{backgroundColor: 'rgba(19 19 24 / 0.4)'}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    InputLabelProps={{style: {color: 'white'}}}
                                    InputProps={{style: {color: 'white'}}}
                                    sx={{backgroundColor: 'rgba(19 19 24 / 0.4)'}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" style={{color: 'white'}}/>}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                    sx={{
                                        backgroundColor: 'rgba(19 19 24 / 0.4)',
                                        color: 'White',
                                        marginLeft: '0px',
                                        paddingRight: '0%',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signIn" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{mt: 5, color: 'White'}}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
