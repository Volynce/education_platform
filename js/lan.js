document.addEventListener('DOMContentLoaded', () => {
    const languageDropdown = document.getElementById('language-dropdown');
    const languageDropdownMobile = document.getElementById('language-dropdown-mobile');

    // Translate function
    function translate(language) {
        const translations = {
            en: {
                pageTitle: "Go study in China",
                navHome: "Home",
                navServices: "Services",
                navadmissionSection: "About us",
                navOffice: "Office",
                navReviews: "Reviews",
                overlayText: "Choose your bright future from now",
                onlineCourseHeading: "Online Professional Chinese Language Courses",
                onlineCourseText: "Professional teachers help you learn the most widely spoken language in the world in advance",
                applyButton: "Apply now",
                reviewsHeading: "Reviews",
                reviewsContent: "Customer reviews.",
                studySectionHeading: "Are you ready for your study application?",
                studyContent1: "2024 Chinese Language Mid-term Enrollment",
                studyContent2: "2025 Study in China Early Action (Enrolling for spring and autumn simultaneously, accelerate the start of your study abroad journey)",
                studyContent3: "【If you have a school in mind, we can apply for you】",
                fastTrackButton: "Fast Track Admission",
                schoolsHeading: "Schools we collaborate with:",
                aboutTitle: "About us",
                whoWeAreHeading: "Who We Are",
                whoWeAreText: "Go Study In China is a professional and comprehensive study abroad education company. We have established strong business partnerships with dozens of schools in China and employ several Chinese study abroad consultants. We help students from various countries to study in China. We are committed to providing a full range of services including study abroad intermediation, educational training consultancy, education services, and language training. Our extensive scope of services covers school applications, study abroad planning, Chinese language training, document submission, interview coaching, visa services, and more, enabling students to enjoy a “one-stop” study abroad experience.",
                whyStudyHeading: "Why Study in China?",
                whyStudyText: "Studying in China means you will develop alongside one of the countries with the strongest technological foundations and the most promising future prospects in the world.",
                langProgramTitle: "Language Program",
                langProgramContent1: "Non-degree Chinese Language Training",
                langProgramContent2: "Prepares you for pursuing a bachelor’s degree at a university.",
                langProgramContent3: "For most majors and scholarship applications within Chinese undergraduate degrees, students are required to have a Chinese HSK level of 4-5. The Chinese Language Training Program is a non-degree program offered by Chinese universities for international students with at least a high school education. It typically includes beginner, intermediate, and advanced courses, usually lasting from one semester to one year, and is taught at Chinese universities.",
                langProgramContent4: "Target Audience: Beginners in Chinese, not passed HSK level 4",
                langProgramContent5: "Learning Content: Chinese listening, speaking, reading, writing, and experience with Chinese culture",
                langProgramContent6: "Learning Mode: Offline classes within Chinese schools",
                langProgramContent7: "Ensuring Your Success: Professional teachers and learning environments will significantly improve your HSK pass rate, ensuring your application to university undergraduate programs. The school's extracurricular activities and excellent accommodation facilities allow you to experience the lifestyle of studying in China in a relaxed learning process.",
                bachelorsMastersTitle: "University Bachelor's/Master's Program",
                bachelorsMastersContent1: "1. English-Taught Programs Direct admission to universities without needing Chinese proficiency (IELTS or TOEFL certificate required, or proof of English instruction during high school)",
                bachelorsMastersContent2: "2. Chinese-Taught Programs More choices of majors and schools (HSK level 4 or above certificate required)",
                bachelorsMastersContent3: "Target Audience: High school graduates with proof of English or Chinese proficiency",
                bachelorsMastersContent4: "Scope of Schools: Focused on applications to China's top 100 and top-tier specialized schools",
                bachelorsMastersContent5: "Learning Scope: Offline classes within Chinese schools Scholarships: Partial or full scholarships",
                bachelorsMastersContent6: "School Selection, Customized Privately",
                onePlusFourTitle: "1+4 Program",
                onePlusFourContent1: "Preparatory Course + Undergraduate Specialized Plan",
                onePlusFourContent2: "After 1 year of language classes, use your HSK results to directly enter a university's undergraduate scholarship program. Secure your undergraduate spot in advance with no application pressure and guaranteed scholarships.",
                onePlusFourContent3: "Target Audience: High school graduates",
                onePlusFourContent4: "Learning Content: 1 year of Chinese language courses, followed by 4 years of university studies in your major",
                onePlusFourContent5: "Scope of Schools: Choose from over 10 schools in China",
                onePlusFourContent6: "Reduce study pressure and benefit from a broader range of scholarship policies.",
                technicalProgramTitle: "Technical Majors: Associate to Bachelor's Program",
                technicalProgramContent1: "Low language requirements, low cost, high return, good job prospects. From diploma to bachelor's degree, an easier-to-obtain credential. Cultivating applied talents.",
                technicalProgramContent2: "Target Audience: Students with limited study abroad funds or those who place a higher value on vocational and technical education.",
                technicalProgramContent3: "Scope of Schools: Top 20 higher vocational and technical colleges in China.",
                technicalProgramContent4: "Scholarships: Partial or full scholarships.",
                technicalProgramContent5: "Fields of study include: Nursing, Architecture, Mechanical Manufacturing, Automotive Manufacturing, Trade, Logistics, Information Engineering, Electrical, and others.",
                advantagesHeading: "Our Advantages",
                advantage1Title: "Pay once, benefit for four years",
                advantage1Content: "For language class application programs, after successfully graduating from a one-year language class with an HSK level, undergraduate study abroad applications are provided for free; for undergraduate application programs, regardless of whether courses are taught in Chinese or English, one-time payment ensures support until undergraduate graduation, and free graduate application consultation and planning are provided.",
                advantage2Title: "Professional one-stop service by a team",
                advantage2Content: "A team of professional international education planners from China will serve you throughout the process based on your needs, providing complete study abroad planning in China from application to overseas study life, truly making your study abroad worry-free.",
                advantage3Title: "Full support with value-added services",
                advantage3Content: "Multiple professional Chinese teachers provide you with high-quality online and offline language tutoring, pre-departure guidance for China, effectively addressing students' psychological barriers to leaving home. It eases the difficulties of studying abroad by offering services like airport pick-up, bank account opening, daily commuting, housing rentals, and other life guidance services, helping students smoothly transition into study abroad life.",
                advantage4Title: "Giveaway",
                advantage4Content: "Follow and comment on our Instagram account, send a screenshot to your consultant, and you will have the chance to participate in a draw to win a [Free Study in China Opportunity] and [Upgraded Application Services].",
                advantage5Title: "Language Services",
                advantage5Content: "• Online professional HSK Chinese language tutoring\n• Online Chinese conversation practice with native speakers\n• Consultation and communication on study abroad programs\n• Interview coaching",
                advantage6Title: "Customized Private Services",
                advantage6Content: "Tailored to your major, your needs, and your career planning, we provide the most suitable study abroad pathway for you.",
                socialMedia: "Follow us",
                nameLabel: "Name:",
                namePlaceholder: "Your name",
                emailLabel: "Email:",
                emailPlaceholder: "Your email",
                phoneLabel: "Phone:",
                phonePlaceholder: "Your phone",
                telegramLabel: "Telegram:",
                telegramPlaceholder: "Your Telegram",
                submitButton: "Send",
                contactTitle: "Contact Us",
                contactFormHeading: "Contact Us",
                scholarshipSectionHeading: "Answers",
                scholarship1: "Need a guardian for minors?",
                scholarship2: "No foundation in Chinese?",
                scholarship3: "Prefer courses taught in English?",
                scholarship4: "Want to change majors?",
                scholarship5: "Interested in a short-term group language summer camp?",
                scholarship6: "Limited funds for study abroad living expenses?",
                applyNowText: "No need to worry, we can solve all these issues for you",
                certificatesHeading: "Our Admission Notifications",
            },
            ru: {
                navHome: "Главная",
                navStudySection: "Учебные заведения",
                pageTitle: "Go study in China - Обучение в Китае",
                navStudy: "Учебные заведения",
                navServices: "Услуги",
                navAboutSection: "О нас",
                navCertificates: "Результаты работы",
                navContact: "Контакты",
                navOffice: "Офис",
                navReviews: "Отзывы",
                overlayText: "Выберите своё светлое будущее сейчас",
                onlineCourseHeading: "Онлайн-курсы китайского языка",
                onlineCourseText: "Профессиональные преподаватели помогут вам заранее выучить самый распространённый язык в мире",
                applyButton: "Подать заявку",
                reviewsHeading: "Отзывы",
                reviewsContent: "Отзывы клиентов.",
                studySectionHeading: "Готовы ли вы подать заявку на обучение?",
                studyContent1: "2024 Среднесрочное зачисление на курсы китайского языка",
                studyContent2: "2025 Ранняя подача заявок на обучение в Китае (зачисление на весенний и осенний семестры одновременно, ускорение начала обучения за границей)",
                studyContent3: "Если у вас есть на примете университет, то мы можем подать заявку за вас.",
                fastTrackButton: "Ускоренное зачисление",
                schoolsHeading: "Университеты, с которыми мы сотрудничаем:",
                aboutTitle: "О компании",
                whoWeAreHeading: "Кто мы?",
                whoWeAreText: "Go Study In China - профессиональная и комплексная образовательная компания по обучению за рубежом. Мы установили прочные деловые партнерские отношения с десятками школ в Китае. Мы помогаем студентам из разных стран учиться в Китае. Мы стремимся предоставлять полный спектр услуг, включая посредничество в обучении за рубежом, консультации по образовательному обучению, образовательные услуги и языковую подготовку. Наш обширный спектр услуг охватывает подачу заявлений в школу, планирование обучения за рубежом, обучение китайскому языку, подачу документов, подготовку к собеседованиям, визовые услуги и многое другое, что позволяет студентам получить комплексный опыт обучения за рубежом.",
                whyStudyHeading: "Зачем учиться в Китае?",
                whyStudyText: "Обучение в Китае означает, что вы будете развиваться вместе с одной из стран с самой сильной технологической базой и самой многообещающей перспективой на будущее в мире.",
                langProgramTitle: "Языковые курсы",
                langProgramContent1: "Языковые курсы",
                langProgramContent2: "Подготовит вас к поступлению на степень бакалавра в университете.",
                langProgramContent3: "Для большинства специальностей и заявок на стипендии в рамках бакалавриата в Китае студенты должны иметь уровень HSK по китайскому языку 4–5 уровня. Языковые курсы — это программа без получения степени, предлагаемая китайскими университетами для иностранных студентов, имеющих как минимум среднее образование. Обычно она включает курсы начального, среднего и продвинутого уровня, продолжительностью от одного семестра до одного года, и преподается в китайских университетах.",
                langProgramContent4: "Кому подходит: Начинающие в китайском языке (без HSK 4 уровня)",
                langProgramContent5: "Содержание обучения: аудирование, говорение, чтение, письмо на китайском языке и опыт знакомства с китайской культурой.",
                langProgramContent6: "Режим обучения: офлайн-классы в китайских школах.",
                langProgramContent7: "Профессиональные преподаватели и условия обучения значительно улучшат ваш процент сдачи HSK, гарантируя вам поступление на программы бакалавриата в университете. Внеклассные мероприятия школы и отличные условия проживания позволяют вам окунуться в образ жизни обучения в Китае в непринужденном процессе обучения.",
                bachelorsMastersTitle: "Бакалавриат/Магистратура",
                bachelorsMastersContent1: "1. Программы с преподаванием на английском языке. Прямое поступление в университеты без необходимости владения китайским языком (требуется сертификат IELTS или TOEFL или подтверждение обучения английскому языку в старшей школе).",
                bachelorsMastersContent2: "2. Программы с преподаванием на китайском языке. Больше выбора специальностей и школ (требуется сертификат HSK уровня 4 или выше).",
                bachelorsMastersContent3: "Кому подходит: Выпускники старших школ с подтверждёнными знаниями английского или китайского языка.",
                bachelorsMastersContent4: "Поступление в 100 лучших школ Китая.",
                bachelorsMastersContent5: "Объём обучения: офлайн-занятия в китайских школах. Стипендии: частичные или полные стипендии.",
                bachelorsMastersContent6: "Выбор школы, индивидуально",
                onePlusFourTitle: "Программа 1+4",
                onePlusFourContent1: "Языковые курсы + Программа бакалавриата/магистратуры",
                onePlusFourContent2: "После 1 года языковых занятий используйте результаты HSK, чтобы напрямую поступить на стипендиальную программу бакалавриата университета. Заранее забронируйте место на бакалавриате без давления на поступление и гарантированных стипендий.",
                onePlusFourContent3: "Кому подходит: Выпускники старших школ.",
                onePlusFourContent4: "Содержание обучения: 1 год курсов китайского языка, затем 4 года обучения в университете по вашей специальности.",
                onePlusFourContent5: "Поступление в более чем 10 школ в Китае",
                onePlusFourContent6: "Уменьшите нагрузку на учёбу и получите выгоду от более широкого спектра стипендиальных программ.",
                technicalProgramTitle: "Технический колледж",
                technicalProgramContent1: "Низкие языковые требования, низкая стоимость, хорошие перспективы трудоустройства. Более простой в получении диплом.",
                technicalProgramContent2: "Кому подходит: Студенты с ограниченными средствами на обучение за рубежом или те, кто больше ценит профессиональное и техническое образование.",
                technicalProgramContent3: "20 лучших высших профессионально-технических колледжей Китая",
                technicalProgramContent4: "Стипендии: Частичные или полные стипендии",
                technicalProgramContent5: "Области обучения включают: сестринское дело, архитектуру, машиностроение, автомобилестроение, торговлю, логистику, информационную инженерию, электротехнику и другие.",
                advantagesHeading: "Наши приемущества",
                advantage1Title: "Платите один раз, получайте выгоду в течение четырех лет",
                advantage1Content: "Для программ поступления на языковые курсы после успешного окончания годичного языкового курса с уровнем HSK подаются бесплатные заявки на обучение на бакалавриате за рубежом; для программ бакалавриата, независимо от того, преподаются ли курсы на китайском или английском языке, единовременный платеж обеспечивает поддержку до окончания бакалавриата, а также предоставляется бесплатная консультация и планирование подачи заявления на поступление в магистратуру.",
                advantage2Title: "Профессиональная команда",
                advantage2Content: "Команда профессиональных специалистов по международному образованию из Китая будет обслуживать вас на протяжении всего процесса, исходя из ваших потребностей, обеспечивая полное планирование обучения (от подачи заявления до обучения за рубежом).",
                advantage3Title: "Полная поддержка с дополнительными услугами",
                advantage3Content: "Профессиональные преподаватели китайского языка предоставляют вам высококачественное онлайн- и оффлайн-обучение языку, рекомендации перед отъездом в Китай. Это облегчает трудности обучения за границей, предлагая такие услуги, как встреча в аэропорту, открытие банковского счета, ежедневные поездки на работу, аренда жилья и другие услуги по жизнеобеспечению, помогая студентам плавно перейти к учебе за границей.",
                advantage4Title: "Розыгрыш",
                advantage4Content: "Подпишитесь и комментируйте нашу учетную запись Instagram, отправьте снимок экрана, и у вас будет возможность принять участие в розыгрыше, чтобы выиграть [Возможность бесплатного обучения в Китае] и [Обновленные услуги приложений].",
                advantage5Title: "Услуги, связанные с языком",
                advantage5Content: "• Профессиональная онлайн-подготовка к экзамену по китайскому языку HSK\n• Онлайн-практика разговорной речи на китайском языке с носителями языка\n• Консультации и общение по программам обучения за рубежом\n• Подготовка к собеседованию",
                advantage6Title: "Индивидуальные частные услуги",
                advantage6Content: "С учетом вашей специальности, ваших потребностей и вашего планирования карьеры, мы предлагаем вам наиболее подходящий путь обучения за рубежом.",
                socialMedia: "Подписывайтесь на нас!",
                nameLabel: "Имя:",
                namePlaceholder: "Ваше имя",
                emailLabel: "Электронная почта:",
                emailPlaceholder: "Ваш email",
                phoneLabel: "Телефон:",
                phonePlaceholder: "Ваш телефон",
                telegramLabel: "Телеграм:",
                telegramPlaceholder: "Ваш Телеграм",
                submitButton: "Отправить",
                contactTitle: "Свяжитесь с нами",
                contactFormHeading: "Свяжитесь с нами",
                scholarshipSectionHeading: "Вопросы",
                scholarship1: "Нужен опекун для несовершеннолетних?",
                scholarship2: "Нет знаний китайского языка?",
                scholarship3: "Предпочитаете обучение на английском языке?",
                scholarship4: "Хотите сменить специальность?",
                scholarship5: "Заинтересованы в краткосрочном групповом языковом лагере?",
                scholarship6: "Ограничены в средствах на обучение за границей, расходах на проживание?",
                applyNowText: "Не волнуйтесь, мы можем решить все эти проблемы",
                certificatesHeading: "Наши уведомления о зачислении",
            }
        };

        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key]) {
                // Handle placeholders separately for input elements
                if (element.tagName === 'INPUT') {
                    element.setAttribute('placeholder', translations[language][key]);
                } else {
                    element.innerText = translations[language][key];
                }
            }
        });
    }

    // Function to handle language change and reload the page
    function handleLanguageChange(selectedLanguage) {
        localStorage.setItem('selectedLanguage', selectedLanguage); // Save selected language
        location.reload(); // Reload the page to apply translations
    }

    // Add event listeners for language change
    languageDropdown.addEventListener('change', () => {
        const selectedLanguage = languageDropdown.value;
        handleLanguageChange(selectedLanguage);
    });

    languageDropdownMobile.addEventListener('change', () => {
        const selectedLanguage = languageDropdownMobile.value;
        handleLanguageChange(selectedLanguage);
    });

    // Check if a language was previously selected and apply it on page load
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru'; // Default language is 'ru'
    
    translate(savedLanguage); // Apply translations
    languageDropdown.value = savedLanguage; // Set dropdown value
    languageDropdownMobile.value = savedLanguage; // Set mobile dropdown value
});