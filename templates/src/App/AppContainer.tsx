import { RecoilRoot } from 'recoil';
import App from './App';
import { GlobalStyle } from '../styles';
import { queryClient } from '../services';
import { QueryClientProvider } from '@tanstack/react-query';

function AppContainer() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default AppContainer;
