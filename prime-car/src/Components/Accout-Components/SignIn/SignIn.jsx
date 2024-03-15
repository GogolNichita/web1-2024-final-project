import React, {useState} from 'react';
import {CssVarsProvider} from '@mui/joy/styles';
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
import { supabase } from './supabaseClient';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const {user, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                console.error('Error logging in:', error.message);
                alert('Error logging in: ' + error.message);
                return;
            }

            console.log('User logged in:', user);
            alert('Thx, for LoggIn!')
            // Redirect or perform other actions upon successful login
        } catch (error) {
            console.error('Error logging in ', error.message);
            alert('Error logging in: ' + error.message);
            // Handle login error, e.g., display an error message to the user
        }
    };

    return (
        React.createElement(CssVarsProvider, null,
            React.createElement(CssBaseline, null),
            React.createElement(GlobalStyles, {
                styles: {
                    ':root': {
                        '--Form-maxWidth': '800px',
                        '--Transition-duration': '0.4s', // set to `none` to disable transition
                        'overflow': 'hidden',
                    },
                }
            }),
            React.createElement(Box, {
                    sx: {
                        width: {xs: '100%', md: '50vw'},
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        backdropFilter: 'blur(12px)',
                        backgroundColor: 'rgba(19 19 24 / 0.4)',
                    }
                },
                React.createElement(Box, {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '100dvh',
                            width: '100%',
                            px: 2,
                        }
                    },
                    React.createElement(Link, {
                            href: "/",
                            level: "title-lg",
                            sx: {
                                fontFamily: 'American Captain',
                                fontWeight: 400,
                                fontSize: '56px',
                                lineHeight: '56px',
                                paddingLeft: '22%',
                                color: 'White',
                                marginTop: '10%',
                                '&:hover': {
                                    textDecoration: 'none',
                                }
                            }
                        },
                        "Prime Car"),
                    React.createElement(Box, {
                            component: "main",
                            sx: {
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
                                [`& .MuiFormLabel-asterisk`]: {
                                    visibility: 'hidden',
                                },
                            }
                        },
                        React.createElement(Stack, {gap: 4, sx: {mb: 2}},
                            React.createElement(Stack, {gap: 1},
                                React.createElement(Typography, {component: "h1", level: "h3"}, "Sign in"),
                                React.createElement(Typography, {level: "body-sm"},
                                    "New at Prime Car? ",
                                    React.createElement(Link, {
                                        href: "/signUp",
                                        level: "title-sm"
                                    }, "Sign up!")
                                )
                            ),
                            React.createElement(Button, {
                                variant: "soft",
                                color: "neutral",
                                fullWidth: true,
                                startDecorator: React.createElement(GoogleIcon, null)
                            }, "Continue with Google")
                        ),
                        React.createElement(Divider, null, "or"),
                        React.createElement(Stack, {gap: 4, sx: {mt: 2}},
                            React.createElement(
                                'form',
                                {
                                    onSubmit: handleLogin,
                                },
                                React.createElement(
                                    FormControl,
                                    { required: true },
                                    React.createElement(FormLabel, null, 'Email'),
                                    React.createElement(Input, { type: 'email', name: 'email', onChange: (e) => setEmail(e.target.value) })
                                ),
                                React.createElement(
                                    FormControl,
                                    { required: true },
                                    React.createElement(FormLabel, null, 'Password'),
                                    React.createElement(Input, { type: 'password', name: 'password', onChange: (e) => setPassword(e.target.value) })
                                ),
                                React.createElement(
                                    Stack,
                                    { gap: 4, sx: { mt: 2 } },
                                    React.createElement(
                                        Box,
                                        {
                                            sx: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            },
                                        },
                                        React.createElement(Checkbox, {
                                            size: 'sm',
                                            label: 'Remember me',
                                            name: 'persistent',
                                        }),
                                        React.createElement(Link, { level: 'title-sm', href: '#replace-with-a-link' }, 'Forgot your password?')
                                    ),
                                    React.createElement(Button, { type: 'submit', fullWidth: true }, 'Sign in')
                                )
                            )

                        )
                    ),
                    React.createElement(Box, {
                            component: "footer",
                            sx: {py: 3}
                        },
                        React.createElement(Typography, {level: "body-xs", textAlign: "center"},
                            "© Prime Car ",
                            new Date().getFullYear()
                        )
                    )
                )
            ),
            React.createElement(Box, {
                sx: {
                    height: '100%',
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    left: {xs: 0, md: '50vw'},
                    backgroundColor: 'background.level1',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
                }
            })
        )
    );
}