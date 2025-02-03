# 🏆 Goblin Battle Arena

**Goblin Battle Arena** — это браузерная игра, в которой игрок сражается с гоблином, совершая атаки и уклоняясь от ударов. Игра включает систему ходов и анимации, создавая эффект динамичного боя.

---

## 🎮 **Как играть?**

Игрок и гоблин совершают ходы **по очереди**. В каждом ходу игрок может:

1. **Двигаться** (`Move`): выбрать одно из направлений (`Left`, `Center`, `Right`).
2. **Атаковать** (`Punch`): нанести удар в одно из трёх направлений (`Left`, `Center`, `Right`).

Гоблин тоже случайным образом выбирает **движение** и **атаку**.

---

## ⚔ **Механика боя**

✅ Если игрок **ударил** в то место, где находится гоблин, он **наносит урон**.  
❌ Если гоблин **атаковал** в место, где стоит игрок, игрок получает урон.  
🔁 Бой продолжается, пока **один из бойцов не потеряет все HP** или не достигнут **максимальный лимит ходов**.

---

## 🕹 **Управление**

- 🔼 **Кнопки "Move"** — позволяют выбрать направление движения.
- 🥊 **Кнопки "Punch"** — позволяют атаковать в выбранном направлении.
- 🔄 **Кнопка "Restart"** — сбрасывает бой и начинает заново.

---

## 📝 **Журнал боя (Battle Log)**

Все результаты атак **записываются в боевой лог**:

- ✅ **"You hit the Goblin!"** — игрок попал по гоблину.
- ❌ **"Goblin hit you!"** — гоблин попал по игроку.

Журнал автоматически прокручивается вниз по мере появления новых сообщений.

---

## 🎨 **Анимации и визуальные эффекты**

- 🔄 **Плавные переходы между экранами**.
- 🎭 **Анимация персонажей** (подпрыгивание во время боя).
- ⚡ **Эффект перехода при смене страниц**.

---

## ⚙ **Технологии**

- **React** — для создания интерфейса.
- **TypeScript** — для типизации.
- **Redux Toolkit** — управление состоянием (HP, удары, движения).
- **React Router** — маршрутизация страниц (`Arena`, `Start Screen`).
- **CSS Modules** — стилизация компонентов.
- **Custom Hooks** (`useAnimatedRoutes`, `useLogMessages`) — анимация и боевой лог.

---

## 📌 **Планы на будущее**
- 🏆 Добавить **уровни сложности**.
- 🔥 Улучшить **искусственный интеллект** гоблина.
- 🎨 Добавить **новые анимации ударов**.
- 🎶 Ввести **музыкальное сопровождение**.

---

## 🚀 **Запуск проекта**

```sh
git clone https://github.com/IlyaGoncharovY/dwarf-fight
```

### 📦 Установка зависимостей:
```sh
pnpm i
```

### ⚙ Запуск dev:

```sh
pnpm run dev
```
