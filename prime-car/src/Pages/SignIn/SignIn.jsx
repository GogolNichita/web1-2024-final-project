import React, { useState } from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import GoogleIcon from './GoogleIcon';
import { supabase } from '../../assets/supabaseClient';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginGoogle = async (event) => {
        event.preventDefault();
        try {

            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: '/'
                }
            })

            if (error) {
                console.error('Error logging in:', error.message);
                alert('Error logging in: ' + error.message);
            }
                else {
                    console.log('User logged in:', email);
                    alert('Thanks for logging in! ' + email);
            }
            // Redirect or perform other actions upon successful login
        } catch (error) {
            console.error('Error logging in ', error.message);
            alert('Error logging in: ' + error.message);
            // Handle login error, e.g., display an error message to the user
        }
    }
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                console.error('Error logging in:', error.message);
                alert('Error logging in: ' + error.message);
            }
                else{
                    console.log('User logged in:', email);
                    alert('Thanks for logging in! ' + email);
            }
            // Redirect or perform other actions upon successful login
        } catch (error) {
            console.error('Error logging in ', error.message);
            alert('Error logging in: ' + error.message);
            // Handle login error, e.g., display an error message to the user
        }
    };

    return (
        <Box sx={{backgroundColor: 'black'}}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Form-maxWidth': '800px',
                        '--Transition-duration': '0.4s', // set to `none` to disable transition
                        overflow: 'hidden',
                    },
                }}
            />
            <Box
                sx={{
                    width: { xs: '100%', md: '50vw' },
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backdropFilter: 'blur(12px)',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        width: '100%',
                        px: 2,
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
                            paddingLeft: '22%',
                            color: 'white',
                            marginTop: '10%',
                            '&:hover': {
                                textDecoration: 'none',
                            },
                        }}
                    >
                        Prime Car
                    </Link>
                    <Box
                        component="main"
                        sx={{
                            my: 'auto',
                            py: 2,
                            pb: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: 400,
                            maxWidth: '100%',
                            mx: 'auto',
                            borderRadius: 'sm',
                            '& form': {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            },
                            '& .MuiFormLabel-asterisk': {
                                visibility: 'hidden',
                            },
                        }}
                    >
                        <Stack gap={4} sx={{ mb: 2 }}>
                            <Stack gap={1}>
                                <Typography component="h1" level="h3" sx={{color: '#CDD7E1'}}>
                                    Sign in
                                </Typography>
                                <Typography level="body-sm" sx={{color: '#9FA6AD'}}>
                                    New at Prime Car?{' '}
                                    <Link href="/signUp" level="title-sm" sx={{color: '#4393E4'}}>
                                        Sign up!
                                    </Link>
                                </Typography>
                            </Stack>
                            <Button onClick={handleLoginGoogle}
                                variant="soft"
                                sx={{
                                    backgroundColor: '#171A1C',
                                    color: 'White'
                                }}
                                fullWidth
                                startDecorator={<GoogleIcon />}
                            >
                                Continue with Google
                            </Button>
                        </Stack>
                        <Divider sx={{color: '#9FA6AD'}}>or</Divider>
                        <Stack gap={4} sx={{ mt: 2 }}>
                            <form onSubmit={handleLogin}>
                                <FormControl required>
                                    <FormLabel sx={{color: '#F0F4F8'}}>Email</FormLabel>
                                    <Input
                                        sx={{
                                            backgroundColor: '#0B0D0E',
                                            borderColor:'#32383E',
                                            color: '#ffffff'
                                        }}
                                        type="email"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl required>
                                    <FormLabel sx={{color: '#F0F4F8'}}>Password</FormLabel>
                                    <Input
                                        sx={{
                                            backgroundColor: '#0B0D0E',
                                            borderColor:'#32383E',
                                            color: '#ffffff'
                                        }}
                                        type="password"
                                        name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormControl>
                                <Stack gap={4} sx={{ mt: 2 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Checkbox
                                            size="sm"
                                            label="Remember me"
                                            name="persistent"
                                            sx={{
                                                color: '#F0F4F8',
                                                '& .MuiCheckbox-checkbox': {
                                                    backgroundColor: '#0B0D0E',
                                                    borderColor:'#32383E',
                                                    borderRadius: '4px',
                                                },
                                                '& .MuiSvgIcon-root': {
                                                    backgroundColor: '#0B6BCB',
                                                    borderRadius: '4px',
                                                },
                                            }}
                                        />
                                        <Link level="title-sm" href="/forgetPassword" sx={{color: '#4393E4'}}>
                                            Forgot your password?
                                        </Link>
                                    </Box>
                                    <Button type="submit" fullWidth>
                                        Sign in
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                    <Box component="footer" sx={{ py: 3 }}>
                        <Typography level="body-xs" textAlign="center" sx={{color: '#9FA6AD'}}>
                            © Prime Car {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    height: '100%',
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    left: { xs: 0, md: '50vw' },
                    backgroundColor: 'background.level1',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
                }}
            />
        </Box>
    );
}
