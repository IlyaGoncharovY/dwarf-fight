import {useState} from 'react';
import {Path, useLocation, useNavigate} from 'react-router-dom';

export interface Location<State> extends Path {
  state: State;
  key: string
}

interface IUseAnimatedRoutesReturnsParams {
  isTransitioning: boolean;
  location: Location<any>;
  handleNavigation: (path: string) => void
}

/**
 * useAnimatedRoutes - Кастомный хук для управления анимацией переходов между страницами.
 * Добавляет задержку перед навигацией, чтобы отобразить анимацию исчезновения текущей страницы.
 *
 * @returns {IUseAnimatedRoutesReturnsParams} Объект с состоянием анимации и функцией навигации.
 * @property {boolean} isTransitioning - Флаг, указывающий, происходит ли сейчас анимация перехода.
 * @property {Location} location - Объект с текущей локацией из react-router.
 * @property {Function} handleNavigation - Функция для навигации с анимацией.
 *
 * @example
 * const { isTransitioning, location, handleNavigation } = useAnimatedRoutes();
 *
 * handleNavigation('/new-page'); // Запускает анимацию и перенаправляет пользователя
 */
export const useAnimatedRoutes = (): IUseAnimatedRoutesReturnsParams => {

  const location = useLocation();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * handleNavigation - Выполняет переход на указанную страницу с анимацией.
   * Устанавливает `isTransitioning` в `true`, затем через 800 мс выполняет навигацию.
   *
   * @param {string} path - Путь, на который следует выполнить навигацию.
   */
  const handleNavigation = (path: string) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate(path);
        setIsTransitioning(false);
      }, 800);
    }
  };

  return {
    isTransitioning,
    location,
    handleNavigation,
  };
};
