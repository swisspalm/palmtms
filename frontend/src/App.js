// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { Authenticator } from "@aws-amplify/ui-react";
import RequireAuth from './RequireAuth';


// ----------------------------------------------------------------------

export default function App() {
  return (
  <Authenticator.Provider>
   <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  </Authenticator.Provider>
  );
}
