document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const logoLink = document.getElementById('logo-link');
    const logo = document.getElementById('logo');
    const aboutSection = document.getElementById('about-section');
    const leftContent = document.querySelector('.about-content');
    const rightImage = document.querySelector('.about-image');
    let lastScrollTop = 0;

    // Функция для плавной прокрутки
    function setupScroll() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetElement = document.querySelector(link.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.error(`Element not found: ${link.getAttribute('href')}`);
                }
            });
        });

        if (logoLink && logo) {
            logoLink.addEventListener('click', (e) => {
                e.preventDefault();
                const homeElement = document.querySelector('#home');
                if (homeElement) {
                    homeElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.error('Element #home not found');
                }
            });
        }
    }

    // Функция для изменения логотипа при скролле
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && logo) {
            logo.classList.add('shrink');
        } else if (scrollTop === 0 && logo) {
            logo.classList.remove('shrink');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    window.addEventListener('scroll', handleScroll);
    setupScroll();
    
    // Задержка перед запуском анимации overlay текста
    setTimeout(function () {
        const overlayText = document.querySelector('.overlay-text');
        if (overlayText) {
            overlayText.classList.add('visible');
        }
    }, 500);

    // Задержка перед показом текста и кнопки
    setTimeout(function () {
        const additionalInfo = document.querySelector('.additional-info');
        if (additionalInfo) {
            additionalInfo.classList.add('visible');
        }
    }, 2000);

    // Плавная прокрутка к форме при нажатии на кнопку "Apply Now"
    const applyButton = document.querySelector('.apply-button');
    if (applyButton) {
        applyButton.addEventListener('click', function (e) {
            e.preventDefault();
            const contactForm = document.querySelector('#contact-form-section');
            if (contactForm) {
                contactForm.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Плавная прокрутка к форме при нажатии на кнопку "Fast Track Admission"
    const fastTrackButton = document.querySelector( '.fast-track-button');
    if (fastTrackButton) {
        fastTrackButton.addEventListener('click', function (e) {
            e.preventDefault();
            const contactForm = document.querySelector('#contact-form-section');
            if (contactForm) {
                contactForm.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollToContactButton = document.querySelector('.scroll-to-contact');
    if (scrollToContactButton) {
        scrollToContactButton.addEventListener('click', function (e) {
            e.preventDefault();
            const contactForm = document.querySelector('#contact-form-section');
            if (contactForm) {
                contactForm.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});


function openFullscreen(imgSrc, altText) {
    const overlay = document.getElementById('about-fullscreen-overlay');
    const fullscreenImg = document.getElementById('about-fullscreen-img');
    const fullscreenCaption = document.getElementById('about-fullscreen-caption'); // Получаем элемент для подписи
    
    fullscreenImg.src = imgSrc;
    fullscreenCaption.innerText = altText; // Устанавливаем текст подписи
    
    function openFullscreen(imgSrc) {
        const overlay = document.getElementById('about-fullscreen-overlay');
        const fullscreenImg = document.getElementById('about-fullscreen-img');
        fullscreenImg.src = imgSrc;
        overlay.style.display = 'flex'; // Показываем оверлей с картинкой
    }
    
    function closeFullscreen() {
        const overlay = document.getElementById('about-fullscreen-overlay');
        overlay.style.display = 'none'; // Скрываем оверлей
    }
}



function openFullscreen(imgSrc, altText, titleText) {
    // Проверяем ширину экрана: для мобильных и планшетных устройств (меньше 1024px)
    if (window.innerWidth <= 900) {
        const overlay = document.getElementById('study-fullscreen-overlay');
        const fullscreenImg = document.getElementById('study-fullscreen-img');
        const fullscreenText = document.getElementById('fullscreen-text');
        
        fullscreenImg.src = imgSrc;
        fullscreenText.innerHTML = `<strong>${titleText}</strong><br>${altText}`;
        overlay.style.display = 'flex'; // Показываем оверлей с картинкой и текстом
    }
}

function closeFullscreen() {
    const overlay = document.getElementById('study-fullscreen-overlay');
    overlay.style.display = 'none'; // Скрываем оверлей
}

