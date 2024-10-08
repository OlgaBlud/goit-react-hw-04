# React + Vite

# Хедер з формою пошуку

Компонент SearchBar приймає один проп onSubmit – функцію для передачі значення інпуту під час сабміту форми.

Якщо під час натискання кнопки відправки форми текстове поле порожнє, покажи користувачеві сповіщення про те, що необхідно ввести текст для пошуку зображень. Ця перевірка виконується в компоненті SearchBar в момент відправки форми. Для сповіщень використовуй бібліотеку React Hot Toast.

# Галерея зображень

Компонент ImageGallery – це список карток зображень який створює DOM-елемент наступної структури.

Галерея повинна рендеритися лише тоді, коли є які-небудь завантажені зображення. Це добра практика не включати елемент li в компонент карточки, а залишити його частиною компонента галереї.

# Картка зображення

Компонент ImageCard рендериться в елементі галереї.

# Індикатор завантаження

Компонент Loader відображається під галереєю поки відбувається завантаження зображень. Використовуй будь-який готовий компонент, наприклад react-loader-spinner або інший.

Поки йде завантаження зображень, індикатор завантаження не повинен замінювати галерею, а просто рендеритися під нею. Це буде критичним при додаванні зображень до вже завантажених.

# Повідомлення про помилку

Компонент ErrorMessage рендериться замість галереї зображень у випадку помилки HTTP-запиту. Достатньо, щоб це було текстове повідомлення.

# Кнопка завантаження додаткових зображень

Компонент LoadMoreBtn рендерить кнопку із текстом "Load more". При натисканні на кнопку має завантажуватися наступна порція зображень і рендеритися разом із попередніми.

Кнопка має рендеритися лише тоді, коли є які-небудь завантажені зображення.
Якщо масив зображень порожній, кнопка не рендериться.

# Модальне вікно

Компонент ImageModal повинен рендеритися всередині компоненту App та отримувати через пропси з App всі необхідні дані та функції.

Під час натискання на зображення галереї повинно відкриватися модальне вікно ImageModal з темним фоном, яке відображатиме зображення у великому форматі. Модальне вікно має бути налаштовано таким чином, щоб воно закривалося при натисканні на клавішу ESC або при кліку за його межами. Для реалізації функціональності модального вікна використовуй бібліотеку React Modal.
