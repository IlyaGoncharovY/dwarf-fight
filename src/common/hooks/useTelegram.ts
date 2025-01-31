// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const tg = window.Telegram.WebApp;

interface IReturnParams {
    tg: any,
    onCloseTMA: () => void,
    userTG: any,
    onToggleButton: () => void
}

/**
 * хук для использования объекта tg, и его функционала.
 * @returns {IReturnParams} Объект, содержащий данный с api телеграма, а так же функции для взаимодействия с ним.
 * @return {Object} tg - оъект из tg api,
 * @return {() => void} onCloseTMA - функция для закрытия TMA,
 * @return {Object} userTG - обьект с информаией по пользователю TG.
 * @return {() => void} onToggleButton - функция для отображения кнопки в чате TG.
 */
export const useTelegram = (): IReturnParams => {

  const onCloseTMA = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  const userTG = tg.initDataUnsafe?.user;

  return {
    tg,
    onCloseTMA,
    userTG,
    onToggleButton,
  };
};
