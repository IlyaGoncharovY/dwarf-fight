import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {useState} from 'react';

import {App, Arena} from '../../../pages';

import s from './AnimatedRoutes.module.css';

export const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigation = (path: string) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate(path);
        setIsTransitioning(false);
      }, 800);
    }
  };

  return (
    <>
      <div className={`${s.transitionOverlay} ${isTransitioning ? s.active : ''}`} />

      <Routes location={location}>
        <Route path="/" element={<App onNavigate={handleNavigation} />} />
        <Route path="/arena" element={<Arena onNavigate={handleNavigation} />} />
      </Routes>
    </>
  );
};
