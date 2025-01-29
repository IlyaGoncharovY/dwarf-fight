export default {
  multipass: true, // Максимальная оптимизация
  js2svg: {
    pretty: false, // Минимальный размер
  },
  plugins: [
    'preset-default',
    {
      name: 'removeViewBox',
      active: false, // Сохраняем viewBox для масштабируемости
    },
    {
      name: 'removeDimensions', // Удаляем фиксированные width/height
      active: true,
    },
    {
      name: 'prefixIds', // Заменяет cleanupIDs
      active: true,
      params: {
        prefix: 'optimized-', // Добавляем префикс
        delim: '-', // Разделитель для префиксов
      },
    },
    {
      name: 'removeMetadata', // Удаляем метаданные
      active: true,
    },
    {
      name: 'removeComments', // Удаляем комментарии
      active: true,
    },
    {
      name: 'removeUnusedNS', // Удаляем неиспользуемые пространства имён
      active: true,
    },
    {
      name: 'removeEditorsNSData', // Удаляем данные редакторов
      active: true,
    },
    {
      name: 'cleanupAttrs', // Оптимизация атрибутов
      active: true,
    },
  ],
};
