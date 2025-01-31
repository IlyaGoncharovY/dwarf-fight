import {BrowserRouter} from 'react-router-dom';

import {AnimatedRoutes} from './animatedRoutes/AnimatedRoutes.tsx';

export const Main = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};
