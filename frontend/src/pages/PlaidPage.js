import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';

import { useParams } from 'react-router-dom';
import { useAuthenticator, Divider, Flex, Heading, View } from '@aws-amplify/ui-react';
import Accounts from '../components/Accounts';
import Transactions from '../components/Transactions';
import Plaid from 'src/components/Plaid';

import { useState, useEffect } from 'react';
import { API, graphqlOperation, Logger } from 'aws-amplify';
import { getItems as GetItems } from '../graphql/queries';
import Institutions from '../components/Institutions';


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

const logger = new Logger("Protected");

export default function PlaidPage() {

  const { id } = useParams();

  const [accountMap, setAccountMap] = useState({});

  const [items, setItems] = useState([]);

  const updateAccounts = (accounts) => {
    const accountMap = accounts.reduce((acc, cur, idx) => {
      acc[cur.account_id] = cur;
      return acc;
    }, {});
    setAccountMap(accountMap);
  };

  const { route, signOut, user } = useAuthenticator((context) => [
    context.route,
    context.signOut,
    context.user
  ]);

  const getItems = async () => {
    try {
      const res = await API.graphql(graphqlOperation(GetItems));
      logger.info(res);
      setItems(res.data.getItems.items);
    } catch (err) {
      logger.error('unable to get items', err);
    }
  };
  
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <Helmet>
        <title> Plaid Connector </title>
      </Helmet>

      <Container>

        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          {route === 'authenticated' ? `Welcome ${user.signInUserSession.idToken.payload.email}` : 'Please Login!'}

          <Typography variant="h3" paragraph>
            Connect Plaid
            <Flex direction="column">
              <Plaid getItems={getItems}/>
              {(items && items.length) ? (
                <View>
                  <Heading>Institutions</Heading>
                  <Institutions institutions={items}/>
                </View>
              ) : (<div/>)
              }
            </Flex>
          </Typography>
        </StyledContent>
      </Container>
    </>
  );
}






