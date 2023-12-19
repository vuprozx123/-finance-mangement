// Định nghĩa các ngôn ngữ khác nhau
const translations = {
    'en': {
        greeting: 'Hello, World!',
        // ...
    },
    'vi': {
        greeting: 'Xin chào, Thế giới!',
        // ...
    },
    // Thêm các ngôn ngữ khác nếu cần
};

// Chọn ngôn ngữ mặc định
let currentLanguage = 'en';

// Hàm để lấy dịch
function translate(key) {
    return translations[currentLanguage][key] || key;
}

// Sử dụng
console.log(translate('greeting')); // In ra 'Hello, World!'

// Thay đổi ngôn ngữ
currentLanguage = 'vi';
console.log(translate('greeting')); // In ra 'Xin chào, Thế giới!'


// Cài đặt và sử dụng i18next
// npm install i18next

const i18next = require('i18next');

i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                greeting: 'Hello, World!',
                // ...
            }
        },
        vi: {
            translation: {
                greeting: 'Xin chào, Thế giới!',
                // ...
            }
        }
    }
});

// Sử dụng
console.log(i18next.t('greeting')); // In ra 'Hello, World!'

// Thay đổi ngôn ngữ
i18next.changeLanguage('vi');
console.log(i18next.t('greeting')); // In ra 'Xin chào, Thế giới!'
