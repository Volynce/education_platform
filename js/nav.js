document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger-menu');
    const body = document.querySelector('body');
    const logo = document.getElementById('logo');
    const header = document.getElementById('header');

    if (burgerBtn && burgerMenu) {
        burgerBtn.addEventListener('click', function(e) {
            burgerMenu.classList.toggle('show');
            e.stopPropagation();
        });

        body.addEventListener('click', function(e) {
            if (!burgerMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
                burgerMenu.classList.remove('show');
            }
        });
    }

    if (logo) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                logo.classList.add('hide-logo'); // Добавляем класс для скрытия логотипа
            } else {
                logo.classList.remove('hide-logo'); // Удаляем класс, чтобы показать логотип
            }
        });
    }

    let lastScrollTop = 0;
    if (header) {
        window.addEventListener('scroll', function () {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                header.classList.add("hide");
            } else {
                header.classList.remove("hide");
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Функция, которая показывает/скрывает кнопку в зависимости от прокрутки
    function toggleScrollToTopBtn() {
        if (window.scrollY > 300) { // Если прокрутили на 300px вниз
            scrollToTopBtn.classList.add('show');
            scrollToTopBtn.classList.remove('hide');
        } else {
            scrollToTopBtn.classList.remove('show');
            scrollToTopBtn.classList.add('hide');
        }
    }

    // Добавляем обработчик события на прокрутку страницы
    window.addEventListener('scroll', toggleScrollToTopBtn);

    // Обработка нажатия на кнопку - плавная прокрутка наверх
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});
