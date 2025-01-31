import {Route, Routes} from 'react-router-dom';

import {App, Arena} from '../../../../pages';

import s from './AnimatedRoutes.module.css';
import {useAnimatedRoutes} from './hook/useAnimatedRoutes.ts';

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
        <Route path="/arena" element={<Arena onNavigate={handleNavigation} />} />
      </Routes>
    </>
  );
};
