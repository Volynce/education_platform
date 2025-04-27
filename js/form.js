$(document).ready(function() {
    const translations = {
        en: {
            successMessage: "Your message has been sent successfully.",
            errorMessage: "There was an error. Please try again.",
            emailError: "Error sending email to example@mail.ru"
        },
        ru: {
            successMessage: "Ваше сообщение успешно отправлено.",
            errorMessage: "Произошла ошибка. Пожалуйста, попробуйте снова.",
            emailError: "Ошибка при отправке письма на example@mail.ru"
        }
    };

    // Get the selected language from localStorage
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'ru'; 

    // Handle form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();  // Prevent page reload

        // Clear previous message
        $('#responseMessage').text('');

        // Send form data via AJAX
        $.ajax({
            url: 'send_email.php',  // Path to PHP script
            type: 'POST',
            data: $(this).serialize(),  // Serialize form data for submission
            success: function(response) {
                // Display success message
                $('#responseMessage').text(translations[selectedLanguage].successMessage);
                $('#responseMessage').css('color', 'green');
            },
            error: function(xhr) {
                let errorMsg = translations[selectedLanguage].emailError;
                if (xhr.status === 400) {
                    // Error: Bad request (empty fields or invalid request)
                    errorMsg = translations[selectedLanguage].errorMessage;
                } else if (xhr.status === 500) {
                    // Error: Server error
                    errorMsg = translations[selectedLanguage].errorMessage;
                }
                // Display error message
                $('#responseMessage').text(errorMsg);
                $('#responseMessage').css('color', 'red');
            }
        });
    });
});
