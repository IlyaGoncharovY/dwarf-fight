import {Navigate, Route, Routes} from 'react-router-dom';

import s from './AnimatedRoutes.module.css';
import {useAnimatedRoutes} from './hook/useAnimatedRoutes.ts';

import {App, Arena} from '@/pages';
import {ArenaPVP} from '@/pages/arenaPVP/ArenaPVP.tsx';

/**
 * AnimatedRoutes - Компонент маршрутизации с анимацией переходов между страницами.
 *
 * Использует `useAnimatedRoutes` для управления анимацией и состояния навигации.
 *
 * @returns {JSX.Element} Компонент с маршрутизацией и эффектом анимации переходов.
 */
export const AnimatedRoutes = (): JSX.Element => {

  const {isTransitioning, location, handleNavigation} = useAnimatedRoutes();

  return (
    <>
      <div className={`${s.transitionOverlay} ${isTransitioning ? s.active : ''}`} />

      <Routes location={location}>
        <Route path="/" element={<App onNavigate={handleNavigation} />} />
        <Route path="/arenaPVE" element={<Arena onNavigate={handleNavigation} />} />
        <Route path="/arenaPVP" element={<ArenaPVP onNavigate={handleNavigation} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
