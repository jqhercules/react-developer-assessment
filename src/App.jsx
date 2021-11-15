import { Routes, Route } from 'react-router-dom';

import GlobalStyles from './theme/globalStyles';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';

import Listing from './components/Listing';

const App: React.FC = () => {
  return (
    <main className="row">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Listing />} />
        </Routes>
      </ThemeProvider>
    </main>
  );
};

export default App;
