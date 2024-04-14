import React, { useState } from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import { supabase } from '../../../assets/supabaseClient';

export default function ForgetPassword() {
    const [email, setEmail] = useState('');

    const handleForgetPassword = async () => {
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email);
            if (error) {
                throw error;
            }
            alert('Password reset email sent!');
        } catch (error) {
            alert(error.message);
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
                        justifyContent: 'center',
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
                            my: '5vh',
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
                                    Forget Password
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack gap={4} sx={{ mt: 0 }}>
                            <form>
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
                                <Stack gap={0} sx={{ mt: 2 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                    </Box>
                                    <Button type="submit" fullWidth onClick={handleForgetPassword}>
                                        Send Reset Email
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
