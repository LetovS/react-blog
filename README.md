## Server
### cd ./server
```
npm i
```
```
node ./index.js
```

## Client
###  start cd ./client
```
npm i
```
```
npm run dev
```
### Checks
1 задание:
- Layout (Header + Footer )
- Модальное окно с формой обратной связи (в footer "Написать мне")
2 задание:
- использованием Routes (в App.tsc + Protected - ака авторизация по токену)
- компоненты Blog, BlogPost (http://localhost:5174/blog, http://localhost:5174/blog/id)
- BurgerMenu + useWindowSize при уменьшении ширины окна менее 768px Menu в Header всхлопывается до в мини меню
3 задание:
- контекст ThemeContext для переключения темы день\ночь, реализован в виде слайдера в Header, так же контекст берётся в footer
- форма регистрации с использвоанеи react-hook-form + простая валидация / две кнопки для открытия форм (регистрации и логина)
- компонент слайдер для галереи /gallery
- логин с редиректом на страницу Todo (в localStorage записывается токен, который используется для авторизации по путям). Загружаются todo с сервера, добавление/редактирование todo'шек.
