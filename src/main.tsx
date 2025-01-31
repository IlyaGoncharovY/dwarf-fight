import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';

import {store} from './store';
import {Main} from './components/commonRout';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Main/>
    </Provider>
  </StrictMode>,
);
