document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.program-block');
    const section = document.getElementById('programs-section');

    // Настройка наблюдателя
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Отключаем наблюдение после появления
            }
        });
    }, {
        threshold: 0.2 // Процент видимости элемента для запуска анимации
    });

    // Отслеживание появления блоков на экране
    blocks.forEach(block => {
        observer.observe(block);
    });

    // Раскрытие текста при клике на блок
    blocks.forEach(block => {
        block.addEventListener('click', () => {
            block.classList.toggle('expand');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scholarshipSection = document.querySelector('.scholarship-info');
    const applyNow = document.querySelector('.apply-now');
    const paragraphs = scholarshipSection.querySelectorAll('p');

    // Настройка наблюдателя для секции с текстом
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Показать заголовок
                scholarshipSection.classList.add('visible');
                
                // Показать элементы списка с задержкой
                paragraphs.forEach((paragraph, index) => {
                    setTimeout(() => {
                        paragraph.classList.add('visible');
                    }, index * 200); // Задержка между пунктами
                });
                
                // Показать "Apply now"
                applyNow.classList.add('visible');  // Добавляем класс visible

                // Отключить наблюдателя после появления
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Процент видимости элемента для запуска анимации
    });

    // Начать наблюдение за секцией
    observer.observe(scholarshipSection);
    observer.observe(applyNow);  // Следим за кнопкой
});











document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.program-block-advantage');

    // Setting up observer for scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add active class when block is visible
                observer.unobserve(entry.target); // Stop observing once it appears
            }
        });
    }, {
        threshold: 0.2 // 20% of the element should be visible to trigger
    });

    // Observe each block
    blocks.forEach(block => observer.observe(block));

    // Toggle block expansion on click
    blocks.forEach((block, index) => {
        block.addEventListener('click', () => {
            if (window.innerWidth > 768) { // Desktop: Open blocks in rows of three
                const rowStart = Math.floor(index / 3) * 3;
                const rowBlocks = Array.from(blocks).slice(rowStart, rowStart + 3);
                rowBlocks.forEach(b => b.classList.toggle('expand'));
            } else { // Mobile: Open individual block
                block.classList.toggle('expand');
            }
        });
    });
});













document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.about-content p');

    // Observer to track visibility of paragraphs
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class when in view
            }
        });
    }, {
        threshold: 0.2 // 20% of the element must be visible to trigger
    });

    // Observe each paragraph
    paragraphs.forEach(paragraph => observer.observe(paragraph));
});
