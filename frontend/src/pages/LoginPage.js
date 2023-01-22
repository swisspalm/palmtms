import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';

import { Authenticator } from '@aws-amplify/ui-react';
import { useAuthenticator, View } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  const components = {
    SignUp: {
      Footer() {
        return (
          <View textAlign="center">
            <strong>Password Policy</strong>:
            <ul>
              <li>Minimum of 8 characters</li>
              <li>At least one lowercase character</li>
              <li>At least one uppercase character</li>
              <li>At least one number character</li>
              <li>At least one symbol character</li>
            </ul>
          </View>
        );
      }
    }
  }

  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);

  return (
  <>
    <Helmet>
      <title> Login | Minimal UI </title>
    </Helmet>
    <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
    <View className="auth-wrapper">
      <Authenticator components={components}/>
    </View>
  </>
    
  );
 
}
