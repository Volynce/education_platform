document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail-container img');
    const slides = document.querySelectorAll('.slider-main .slide');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            document.querySelector('.thumbnail-container img.active')?.classList.remove('active');
            thumbnail.classList.add('active');
            
            slides.forEach(slide => slide.style.display = 'none');
            slides[index].style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const certificates = document.querySelectorAll('.certificate');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const closeFullscreenButton = document.getElementById('close-fullscreen');

    let currentIndex = 0;
    const slideWidth = certificates[0].offsetWidth + 20; // ширина с отступом
    let isMoving = false;
    let autoSlideInterval;

    // Клонирование первого и последнего элемента для бесконечного эффекта
    const firstClone = certificates[0].cloneNode(true);
    const lastClone = certificates[certificates.length - 1].cloneNode(true);
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, certificates[0]);

    // Функция для перемещения слайдера
    function moveSlider(index) {
        if (!isMoving) {
            isMoving = true;
            const offset = -index * slideWidth;
            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(${offset}px)`;

            setTimeout(() => {
                isMoving = false;
                if (index === certificates.length) {
                    slider.style.transition = 'none';
                    currentIndex = 0;
                    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
                } else if (index < 0) {
                    slider.style.transition = 'none';
                    currentIndex = certificates.length - 1;
                    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
                }
            }, 500);
        }
    }

    // Автоматическое перелистывание
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex++;
            moveSlider(currentIndex);
        }, 7000); // Каждые 7 секунд
    }

    // Событие нажатия кнопки "назад"
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = certificates.length - 1;
        }
        moveSlider(currentIndex);
    });

    // Событие нажатия кнопки "вперед"
    nextButton.addEventListener('click', function () {
        if (currentIndex < certificates.length) {
            currentIndex++;
        }
        moveSlider(currentIndex);
    });

    // Открытие картинки на весь экран
    certificates.forEach(certificate => {
        certificate.addEventListener('click', function () {
            fullscreenImg.src = this.src;
            fullscreenOverlay.style.display = 'flex';
            clearInterval(autoSlideInterval); // Остановка авто-слайдера при открытии
        });
    });

    // Закрытие полноэкранного режима
    closeFullscreenButton.addEventListener('click', function () {
        fullscreenOverlay.style.display = 'none';
        startAutoSlide(); // Возобновление авто-слайдера при закрытии
    });

    // Поддержка свайпа для мобильных устройств
    let startX = 0;
    let endX = 0;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
        const diffX = startX - endX;

        if (diffX > 50) {
            // свайп влево
            if (currentIndex < certificates.length) {
                currentIndex++;
            }
            moveSlider(currentIndex);
        } else if (diffX < -50) {
            // свайп вправо
            if (currentIndex > 0) {
                currentIndex--;
            }
            moveSlider(currentIndex);
        }
    });

    // Запуск автослайдера
    startAutoSlide();


    // Открытие картинки на весь экран
    certificates.forEach(certificate => {
        certificate.addEventListener('click', function() {
            fullscreenImg.src = this.src;
            fullscreenOverlay.style.display = 'flex';
            clearInterval(autoSlideInterval); // Остановка авто-слайдера при открытии
        });
    });

    // Закрытие полноэкранного режима
    closeFullscreenButton.addEventListener('click', function() {
        fullscreenOverlay.style.display = 'none';
        startAutoSlide(); // Возобновление авто-слайдера при закрытии
    });

    // Запуск автослайдера
    startAutoSlide();
});