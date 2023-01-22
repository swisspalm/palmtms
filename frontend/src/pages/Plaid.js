import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Divider, Flex, Heading, View } from '@aws-amplify/ui-react';
import Accounts from '../components/Accounts';
import Transactions from '../components/Transactions';

// ----------------------------------------------------------------------

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

export default function Plaid() {

  const { id } = useParams();

  const [accountMap, setAccountMap] = useState({});

  const updateAccounts = (accounts) => {
    const accountMap = accounts.reduce((acc, cur, idx) => {
      acc[cur.account_id] = cur;
      return acc;
    }, {});
    setAccountMap(accountMap);
  }

  return (
    <>
      <Helmet>
        <title> Plaid Connector </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Connect Plaid
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Connect your bank
          </Typography>
          <Flex direction="column">
            <Divider/>
            <Flex direction="row">
              <Heading level={5}>Institution</Heading>
            </Flex>
            <Flex direction="row">
              <View>
                <Heading level={6}>Accounts</Heading>
                <Accounts id={id} updateAccounts={updateAccounts}/>
              </View>
              <View>
                <Heading level={6}>Transactions</Heading>
                <Transactions id={id} accounts={accountMap}/>
              </View>
            </Flex>
          </Flex>
        </StyledContent>
      </Container>
    </>
  );
}



