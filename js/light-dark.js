// theme Light/dark
const themeBtn = document.querySelector(".them-btn")
// Функция для получения текущей темы
const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light"
// Функция для получения текущего значка
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon"
// Слушатель событий для переключения темы
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme")
    themeBtn.classList.toggle("sun")

    localStorage.setItem("saved-theme", getCurrentTheme())
    localStorage.setItem("saved-icon", getCurrentIcon())
})

const savedTheme = localStorage.getItem("saved-theme")
const savedIcon = localStorage.getItem("saved-icon")

// Применяем сохранённую тему и значок
if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme")
    themeBtn.classList[savedIcon == "sun" ? "add" : "remove"]("sun")
}