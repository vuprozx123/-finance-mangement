
// an vap dang ky
function toggleForm() {
    var registerModel = document.getElementById('register-model');
    var registerModal = document.getElementById('register-modal');

    if (registerModal.style.display === 'none' || registerModal.style.display === '') {
        registerModel.style.display = 'none';
        registerModal.style.display = 'flex';
    }
}


// an vao dang nhap
function toggleForms() {
    var registerModel = document.getElementById('register-model');
    var registerModal = document.getElementById('register-modal');


    if (registerModel.style.display === 'none' || registerModel.style.display === '') {
        registerModel.style.display = 'flex';
        registerModal.style.display = 'none';
    }
}

// an vao tao tai khoan
function toggleFormss() {
    var registerModel = document.getElementById('register-model');
    var registerModal = document.getElementById('register-modal');

    if (registerModel.style.display === 'none' || registerModel.style.display === '') {
        registerModel.style.display = 'flex';
        registerModal.style.display = 'none';
    } else {
        registerModel.style.display = 'none';
        registerModal.style.display = 'flex';
    }
}


function Validator(options) {

    const formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(rule => {
            const inputElement = formElement.querySelector(rule.selector);

            inputElement.onblur = () => {
                const errorMessage = rule.test(inputElement.value);
                if (errorMessage) {
                    inputElement.parentElement.classList.add('invalid');
                    inputElement.parentElement.querySelector('.form-message').innerText = errorMessage;
                }
            }
        });
    }
}

Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : message;
        }
    }

}

Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (regex.test(value)) {
                return undefined;
            }
            return 'Email không hợp lệ';
        }
    }
}

Validator.minLength = (selector, min) => {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : `Mật khẩu phai it nhat  ${min} ky tu`;
        }
    }
}



function register() {
    var username = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password-again').value;

    if (password !== confirmPassword) {
        alert('Xác nhận mật khẩu không khớp.');
        return;
    }

    // Lưu thông tin đăng ký vào Local Storage
    localStorage.setItem('fullname', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Đăng ký thành công!');
}


function login() {
    var loginUsername = document.getElementById('inputname').value;
    var loginPassword = document.getElementById('inputpassword').value;

    // Lấy thông tin đăng ký từ Local Storage
    var storedUsername = localStorage.getItem('fullname');
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    // Kiểm tra thông tin đăng nhập
    if ((loginUsername === storedUsername || loginUsername === storedEmail) && loginPassword === storedPassword) {
        alert('Đăng nhập thành công!');
    } else {
        alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
    }
}


// thay doi ngon ngu
function changeLanguage(lang) {
    const translations = {
        'en': {
            'abc': 'Sign up',
            'abd': 'Login',
            'abe': 'Sign up',
            'abf': 'Login',
            'abg': 'Forgot Password',
            'abh': 'Create account',
            'menu': 'Menu',
            'language': 'Language',
            'money': 'Diary',
            'transaction': 'My wallet',
            'bank': 'Money',
            'recommend': 'Introduce',
            'setting': 'Setting',
            'event': 'Conect-bank',
            'VND': 'VND to USD',
            'USD': 'USD to VND',
            'monthyear': 'Select month',
            'button-convert': 'Convert',
            'add-expense': 'Add expense',
            'am-money': 'Amount',
            'placeholders': {
                'fullname': 'Fullname',
                'email': 'Email',
                'password': 'Password',
                'password-again': 'Password again',
                'inputname': 'User name',
                'inputpassword': 'Password',
                'header-search': 'Search',
                'amount': 'Enter amount',
                'a-money': 'Enter-amount',
            }
        },
        'vi': {
            'abc': 'Đăng ký',
            'abd': 'Đăng nhập',
            'abe': 'ĐĂNG KÝ',
            'abf': 'ĐĂNG NHẬP',
            'abg': 'Quên mật khẩu',
            'abh': 'Tạo tài khoản',
            'menu': 'Danh mục',
            'language': 'Ngôn ngữ',
            'money': 'Nhật kí',
            'bank': 'Tiền tệ',
            'recommend': 'Giới thiệu',
            'setting': 'Cài đặt',
            'event': 'Liên kết ngân hàng',
            'VND': 'VND sang USD',
            'USD': 'USD sang VND',
            'monthyear': 'Chọn tháng',
            'button-convert': 'Chuyển thành',
            'add-expense': 'Thêm khoảng chi tiêu',
            'am-money': 'Giá tiền',
            'transaction': 'Ví của tôi',
            'placeholders': {
                'fullname': 'Họ và tên',
                'email': 'Email',
                'password': 'Mật khẩu',
                'password-again': 'Nhập lại mật khẩu',
                'inputname': 'Tên đăng nhập',
                'inputpassword': 'Mật khẩu',
                'header-search': 'Tìm kiếm',
                'amount': 'Nhập số tiền',
                'a-money': 'Nhập giá tiền',
            }


        }
    };

    document.getElementById('abc').innerText = translations[lang]['abc'];
    document.getElementById('abd').innerText = translations[lang]['abd'];
    document.getElementById('abe').innerText = translations[lang]['abe'];
    document.getElementById('abf').innerText = translations[lang]['abf'];
    document.getElementById('abg').innerText = translations[lang]['abg'];
    document.getElementById('abh').innerText = translations[lang]['abh'];
    document.getElementById('menu').innerText = translations[lang]['menu'];
    document.getElementById('money').innerText = translations[lang]['money'];
    document.getElementById('transaction').innerText = translations[lang]['transaction'];
    document.getElementById('bank').innerText = translations[lang]['bank'];
    document.getElementById('event').innerText = translations[lang]['event'];
    document.getElementById('recommend').innerText = translations[lang]['recommend'];
    document.getElementById('setting').innerText = translations[lang]['setting'];
    document.getElementById('language').innerText = translations[lang]['language'];
    document.getElementById('monthyear').innerText = translations[lang]['monthyear'];
    document.getElementById('button-convert').innerText = translations[lang]['button-convert'];
    document.getElementById('VND').innerText = translations[lang]['VND'];
    document.getElementById('USD').innerText = translations[lang]['USD'];
    document.getElementById('am-money').innerText = translations[lang]['am-money'];
    document.getElementById('a-money').innerText = translations[lang]['a-money'];
    document.getElementById('add-expense').innerText = translations[lang]['add-expense'];
    const placeholders = translations[lang]['placeholders'];
    Object.keys(placeholders).forEach(id => {
        document.getElementById(id).placeholder = placeholders[id];
    });

}


let isLanguageVisible = false;

function Language() {
    const formLanguage = document.querySelector('.category-list-item-active');
    isLanguageVisible = !isLanguageVisible; // Đảo ngược trạng thái
    formLanguage.style.display = isLanguageVisible ? 'block' : 'none';
}



// chuyen doi don vi tien te
function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var resultElement = document.getElementById('result');

    if (currency === 'vnd') {
        var exchangeRate = 0.000043;
        var usdAmount = amount * exchangeRate;
        resultElement.innerHTML = usdAmount.toFixed(2) + ' USD';
    } else {
        var vndAmount = amount * exchangeRate;
        resultElement.innerHTML = vndAmount.toFixed(2) + ' VND';
    }
}

function openChangeMoney() {
    const Money = document.getElementById('converter');

    if (Money) {
        Money.style.display = 'block';
    }
}


// cac khoan thu chi
window.onload = function () {
    var savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    var list = document.getElementById('list');

    savedExpenses.forEach(function (expense) {
        var listItem = document.createElement('li');
        listItem.textContent = expense.description + ': ' + expense.amount+ 'VND';
        list.appendChild(listItem);
    });
};

function addExpense() {
    var description = document.getElementById('description').value;
    var amount = document.getElementById('a-money').value;

    if (description && amount) {
        var listItem = document.createElement('li');
        listItem.textContent = description + ': ' + amount + ' VND';
        document.getElementById('list').appendChild(listItem);

        // Save to local storage
        var savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        savedExpenses.push({ description: description, amount: amount });
        localStorage.setItem('expenses', JSON.stringify(savedExpenses));

        // Clear input fields
        document.getElementById('description').value = '';
        document.getElementById('a-money').value = '';
    } else {
        alert('Please enter both description and amount.');
    }
}


function openAmount() {
    const Amount = document.getElementById('expense-form');

    if (Amount) {
        Amount.style.display = 'block';
    }
}


//bieu do
// Lấy dữ liệu từ localStorage nếu có, nếu không, sử dụng một đối tượng trống
var financialData = JSON.parse(localStorage.getItem('financialData')) || {};

function updateChart() {
    var selectedMonth = document.getElementById('month').value;
    var ctx = document.getElementById('myChart').getContext('2d');

    var data = {
        labels: Object.keys(financialData),
        datasets: [{
            label: 'Tổng tiền',
            data: Object.values(financialData),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function addExpense() {
    var selectedMonth = document.getElementById('month').value;
    var amount = document.getElementById('a-money').value;

    if (!financialData[selectedMonth]) {
        financialData[selectedMonth] = parseInt(amount);
    } else {
        financialData[selectedMonth] += parseInt(amount);
    }

    // Lưu dữ liệu vào localStorage
    localStorage.setItem('financialData', JSON.stringify(financialData));

    updateChart();
}

window.onload = updateChart;

















