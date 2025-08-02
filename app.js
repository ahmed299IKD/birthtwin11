// --- START OF FILE app.js ---
// Countries list
const countries = [
    'Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 
    'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 
    'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 
    'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire, Sint Eustatius and Saba', 
    'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 
    'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 
    'Canada', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 
    'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo (Democratic Republic of the)', 
    'Cook Islands', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czech Republic', 
    'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 
    'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Falkland Islands', 
    'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 
    'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 
    'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 
    'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and McDonald Islands', 'Holy See', 'Honduras', 
    'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 
    'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 
    'Korea (North)', 'Korea (South)', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 
    'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Madagascar', 'Malawi', 
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 
    'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 
    'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 
    'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'North Macedonia', 
    'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine, State of', 
    'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 
    'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthelemy', 
    'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 
    'Saint Martin (French part)', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 
    'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 
    'Sierra Leone', 'Singapore', 'Sint Maarten (Dutch part)', 'Slovakia', 'Slovenia', 'Solomon Islands', 
    'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'South Sudan', 'Spain', 
    'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Switzerland', 'Syria', 
    'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 
    'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 
    'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 
    'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna', 'Western Sahara', 
    'Yemen', 'Zambia', 'Zimbabwe'
];

// Enhanced translations with new export features
const translations = {
    en: {
        'landing.welcome': 'Discover how many people share your special day!',
        'landing.description': 'Join our global community and find out how many birth twins you have around the world.',
        'landing.register': 'Register Now',
        'landing.viewStats': 'View Statistics',
        'landing.admin': 'Admin',
        'register.title': 'Register Your Birth Date',
        'register.email': 'Email Address *',
        'register.password': 'Password *',
        'register.day': 'Day',
        'register.month': 'Month',
        'register.year': 'Year',
        'register.time': 'Time of Birth (Optional)',
        'register.country': 'Country *',
        'register.city': 'City (Optional)',
        'register.showEmail': 'Show my email to others born on the same date',
        'register.submit': 'Register',
        'register.loginPrompt': 'Already have an account? Login',
        'login.title': 'Login to TwinBirth',
        'login.email': 'Email Address',
        'login.password': 'Password',
        'login.submit': 'Login',
        'login.registerPrompt': 'Don\'t have an account? Register',
        'stats.title': 'Birth Statistics',
        'stats.totalUsers': 'Total Users',
        'stats.sameDay': 'Same Date',
        'stats.countries': 'Countries',
        'stats.today': 'Today\'s Birthdays',
        'stats.byMonth': 'Births by Month',
        'stats.byYear': 'Births by Year',
        'stats.topCountries': 'Top Countries',
        'stats.results': 'Birth Twins',
        'stats.exportCSV': 'Export CSV',
        'stats.exportExcel': 'Export Excel',
        'stats.exportJSON': 'Export JSON',
        'admin.title': 'Admin Dashboard',
        'admin.email': 'Admin Email',
        'admin.password': 'Admin Password',
        'admin.login': 'Login',
        'admin.submissions': 'All Submissions',
        'admin.logout': 'Logout',
        'admin.totalReg': 'Total Registrations',
        'admin.todayReg': 'Today\'s Registrations',
        'admin.uniqueCountries': 'Unique Countries',
        'admin.privacyOn': 'Privacy Enabled',
        'admin.filterCountry': 'Filter by Country',
        'admin.filterYear': 'Filter by Year',
        'common.back': 'Back to Home',
        'common.ok': 'OK',
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'success.title': 'Registration Successful!',
        'success.message': 'You have been successfully registered.',
        'success.stats': 'There are people born on the same day as you!',
        'export.title': 'Exporting Data',
        'export.preparing': 'Preparing export...',
        'export.processing': 'Processing data...',
        'export.complete': 'Export complete!',
        'export.error': 'Export failed',
        'months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'table.date': 'Date',
        'table.time': 'Time',
        'table.country': 'Country',
        'table.city': 'City',
        'table.email': 'Email',
        'table.year': 'Year',
        'table.actions': 'Actions',
        'table.delete': 'Delete',
        'validation.emailRequired': 'Email is required',
        'validation.emailInvalid': 'Please enter a valid email address',
        'validation.passwordRequired': 'Password is required',
        'validation.passwordMin': 'Password must be at least 6 characters',
        'validation.dayRequired': 'Day is required',
        'validation.monthRequired': 'Month is required',
        'validation.yearRequired': 'Year is required',
        'validation.countryRequired': 'Country is required',
        'validation.yearInvalid': 'Please enter a valid year'
    },
    ar: {
        'landing.welcome': 'اكتشف عدد الأشخاص الذين يتشاركون معك في يومك المميز!',
        'landing.description': 'انضم إلى مجتمعنا العالمي واكتشف عدد توأم الميلاد لديك حول العالم.',
        'landing.register': 'سجل الآن',
        'landing.viewStats': 'عرض الإحصائيات',
        'landing.admin': 'المدير',
        'register.title': 'سجل تاريخ ميلادك',
        'register.email': 'عنوان البريد الإلكتروني *',
        'register.password': 'كلمة المرور *',
        'register.day': 'اليوم',
        'register.month': 'الشهر',
        'register.year': 'السنة',
        'register.time': 'وقت الولادة (اختياري)',
        'register.country': 'الدولة *',
        'register.city': 'المدينة (اختياري)',
        'register.showEmail': 'أظهر بريدي الإلكتروني للآخرين المولودين في نفس التاريخ',
        'register.submit': 'سجل',
        'register.loginPrompt': 'لديك حساب بالفعل؟ تسجيل الدخول',
        'login.title': 'تسجيل الدخول إلى TwinBirth',
        'login.email': 'عنوان البريد الإلكتروني',
        'login.password': 'كلمة المرور',
        'login.submit': 'تسجيل الدخول',
        'login.registerPrompt': 'ليس لديك حساب؟ سجل',
        'stats.title': 'إحصائيات المواليد',
        'stats.totalUsers': 'إجمالي المستخدمين',
        'stats.sameDay': 'نفس التاريخ',
        'stats.countries': 'الدول',
        'stats.today': 'أعياد الميلاد اليوم',
        'stats.byMonth': 'المواليد حسب الشهر',
        'stats.byYear': 'المواليد حسب السنة',
        'stats.topCountries': 'أفضل الدول',
        'stats.results': 'التوأم الميلادي',
        'stats.exportCSV': 'تصدير CSV',
        'stats.exportExcel': 'تصدير Excel',
        'stats.exportJSON': 'تصدير JSON',
        'admin.title': 'لوحة التحكم',
        'admin.email': 'بريد المشرف الإلكتروني',
        'admin.password': 'كلمة مرور المشرف',
        'admin.login': 'تسجيل الدخول',
        'admin.submissions': 'جميع التسجيلات',
        'admin.logout': 'تسجيل الخروج',
        'admin.totalReg': 'إجمالي التسجيلات',
        'admin.todayReg': 'تسجيلات اليوم',
        'admin.uniqueCountries': 'دول فريدة',
        'admin.privacyOn': 'الخصوصية مفعلة',
        'admin.filterCountry': 'تصفية حسب الدولة',
        'admin.filterYear': 'تصفية حسب السنة',
        'common.back': 'العودة إلى الرئيسية',
        'common.ok': 'موافق',
        'common.loading': 'جاري التحميل...',
        'common.error': 'خطأ',
        'success.title': 'تم التسجيل بنجاح!',
        'success.message': 'لقد تم تسجيلك بنجاح.',
        'success.stats': 'يوجد أشخاص ولدوا في نفس يومك!',
        'export.title': 'تصدير البيانات',
        'export.preparing': 'جاري إعداد التصدير...',
        'export.processing': 'جاري معالجة البيانات...',
        'export.complete': 'اكتمل التصدير!',
        'export.error': 'فشل التصدير',
        'months': ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        'table.date': 'التاريخ',
        'table.time': 'الوقت',
        'table.country': 'الدولة',
        'table.city': 'المدينة',
        'table.email': 'البريد الإلكتروني',
        'table.year': 'السنة',
        'table.actions': 'الإجراءات',
        'table.delete': 'حذف',
        'validation.emailRequired': 'البريد الإلكتروني مطلوب',
        'validation.emailInvalid': 'الرجاء إدخال عنوان بريد إلكتروني صالح',
        'validation.passwordRequired': 'كلمة المرور مطلوبة',
        'validation.passwordMin': 'يجب أن تكون كلمة المرور 6 أحرف على الأقل',
        'validation.dayRequired': 'اليوم مطلوب',
        'validation.monthRequired': 'الشهر مطلوب',
        'validation.yearRequired': 'السنة مطلوبة',
        'validation.countryRequired': 'الدولة مطلوبة',
        'validation.yearInvalid': 'الرجاء إدخال سنة صالحة'
    },
    fr: {
        'landing.welcome': 'Découvrez combien de personnes partagent votre journée spéciale !',
        'landing.description': 'Rejoignez notre communauté mondiale et découvrez combien de jumeaux de naissance vous avez dans le monde.',
        'landing.register': 'S\'inscrire maintenant',
        'landing.viewStats': 'Voir les statistiques',
        'landing.admin': 'Admin',
        'register.title': 'Enregistrez votre date de naissance',
        'register.email': 'Adresse e-mail *',
        'register.password': 'Mot de passe *',
        'register.day': 'Jour',
        'register.month': 'Mois',
        'register.year': 'Année',
        'register.time': 'Heure de naissance (Optionnel)',
        'register.country': 'Pays *',
        'register.city': 'Ville (Optionnel)',
        'register.showEmail': 'Montrer mon e-mail aux autres nés le même jour',
        'register.submit': 'S\'inscrire',
        'register.loginPrompt': 'Vous avez déjà un compte ? Connectez-vous',
        'login.title': 'Connexion à TwinBirth',
        'login.email': 'Adresse e-mail',
        'login.password': 'Mot de passe',
        'login.submit': 'Connexion',
        'login.registerPrompt': 'Vous n\'avez pas de compte ? Inscrivez-vous',
        'stats.title': 'Statistiques de naissance',
        'stats.totalUsers': 'Utilisateurs totaux',
        'stats.sameDay': 'Même date',
        'stats.countries': 'Pays',
        'stats.today': 'Anniversaires d\'aujourd\'hui',
        'stats.byMonth': 'Naissances par mois',
        'stats.byYear': 'Naissances par année',
        'stats.topCountries': 'Pays principaux',
        'stats.results': 'Jumeaux de naissance',
        'stats.exportCSV': 'Exporter CSV',
        'stats.exportExcel': 'Exporter Excel',
        'stats.exportJSON': 'Exporter JSON',
        'admin.title': 'Tableau de bord administrateur',
        'admin.email': 'E-mail administrateur',
        'admin.password': 'Mot de passe administrateur',
        'admin.login': 'Connexion',
        'admin.submissions': 'Toutes les inscriptions',
        'admin.logout': 'Déconnexion',
        'admin.totalReg': 'Inscriptions totales',
        'admin.todayReg': 'Inscriptions d\'aujourd\'hui',
        'admin.uniqueCountries': 'Pays uniques',
        'admin.privacyOn': 'Confidentialité activée',
        'admin.filterCountry': 'Filtrer par pays',
        'admin.filterYear': 'Filtrer par année',
        'common.back': 'Retour à l\'accueil',
        'common.ok': 'OK',
        'common.loading': 'Chargement...',
        'common.error': 'Erreur',
        'success.title': 'Inscription réussie !',
        'success.message': 'Vous avez été inscrit avec succès.',
        'success.stats': 'Il y a des personnes nées le même jour que vous !',
        'export.title': 'Exportation des données',
        'export.preparing': 'Préparation de l\'export...',
        'export.processing': 'Traitement des données...',
        'export.complete': 'Export terminé !',
        'export.error': 'Échec de l\'export',
        'months': ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        'table.date': 'Date',
        'table.time': 'Heure',
        'table.country': 'Pays',
        'table.city': 'Ville',
        'table.email': 'E-mail',
        'table.year': 'Année',
        'table.actions': 'Actions',
        'table.delete': 'Supprimer',
        'validation.emailRequired': 'L\'e-mail est requis',
        'validation.emailInvalid': 'Veuillez saisir une adresse e-mail valide',
        'validation.passwordRequired': 'Le mot de passe est requis',
        'validation.passwordMin': 'Le mot de passe doit contenir au moins 6 caractères',
        'validation.dayRequired': 'Le jour est requis',
        'validation.monthRequired': 'Le mois est requis',
        'validation.yearRequired': 'L\'année est requise',
        'validation.countryRequired': 'Le pays est requis',
        'validation.yearInvalid': 'Veuillez saisir une année valide'
    }
};

// Global variables
let currentLang = 'en';
let currentUser = null;
let isAdminLoggedIn = false;
let birthsByMonthChart = null;
let birthsByYearChart = null;
let allUsers = [];
let filteredUsers = [];
let isLoading = false;

// Utility functions
const utils = {
    // Debounce function to limit the rate at which a function gets called
    debounce: function(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    },
    
    // Validate email format
    isValidEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Validate year (between 1900 and current year)
    isValidYear: function(year) {
        const currentYear = new Date().getFullYear();
        return year >= 1900 && year <= currentYear;
    },
    
    // Format date for display
    formatDate: function(day, month, year) {
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    },
    
    // Show loading state
    showLoading: function(element) {
        if (element) {
            element.disabled = true;
            element.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ${translations[currentLang]['common.loading']}`;
        }
    },
    
    // Hide loading state
    hideLoading: function(element, originalText) {
        if (element) {
            element.disabled = false;
            element.innerHTML = originalText;
        }
    },
    
    // Show error message
    showError: function(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
        }
    },
    
    // Hide error message
    hideError: function(elementId) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.classList.add('hidden');
        }
    }
};

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main application initialization function
function initializeApp() {
    initializeForm();
    updateLanguage();
    setupEventListeners();
    
    // Listen for changes in authentication state
    auth.onAuthStateChanged(user => {
        currentUser = user;
        if (user) {
            updateStatistics();
            // If the admin panel is visible, check the user's admin status
            if (document.getElementById('admin') && !document.getElementById('admin').classList.contains('hidden')) {
                checkAdminStatus(user);
            }
        } else {
            // User is signed out, ensure admin view is hidden
            isAdminLoggedIn = false;
            const adminLogin = document.getElementById('adminLogin');
            const adminContent = document.getElementById('adminContent');
            if (adminLogin) adminLogin.classList.remove('hidden');
            if (adminContent) adminContent.classList.add('hidden');
        }
    });
}

// Sets up all the event listeners for the application
function setupEventListeners() {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
        
        // Real-time validation
        registrationForm.email.addEventListener('blur', validateEmail);
        registrationForm.password.addEventListener('blur', validatePassword);
        registrationForm.day.addEventListener('change', validateDay);
        registrationForm.month.addEventListener('change', validateMonth);
        registrationForm.year.addEventListener('blur', validateYear);
        registrationForm.country.addEventListener('change', validateCountry);
    }
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        
        // Real-time validation
        loginForm.loginEmail.addEventListener('blur', validateLoginEmail);
        loginForm.loginPassword.addEventListener('blur', validateLoginPassword);
    }
    
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // Use debounce to prevent excessive filtering on every keystroke
        searchInput.addEventListener('input', utils.debounce(function() {
            const searchTerm = this.value.toLowerCase();
            filterAndDisplayAdminUsers(searchTerm);
        }, 300));
    }
    
    // Language change buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage(btn.getAttribute('data-lang')));
    });
    
    // Export buttons
    document.getElementById('exportCSV')?.addEventListener('click', () => exportData('csv'));
    document.getElementById('exportExcel')?.addEventListener('click', () => exportData('xlsx'));
    document.getElementById('exportJSON')?.addEventListener('click', () => exportData('json'));
    
    // Admin filter buttons
    document.getElementById('filterCountryBtn')?.addEventListener('click', filterByCountry);
    document.getElementById('filterYearBtn')?.addEventListener('click', filterByYear);
}

// Initialize form dropdown options
function initializeForm() {
    // Populate days (1-31)
    const daySelect = document.getElementById('day');
    if (daySelect) {
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }
    
    // Populate months
    updateFormOptions();
    
    // Populate countries
    const countrySelect = document.getElementById('country');
    if (countrySelect) {
        const sortedCountries = [...countries].sort();
        sortedCountries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });
    }
}

// Change and update the application language
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    updateLanguage();
    updateFormOptions();
    
    // Re-render any visible data that depends on language
    if (document.getElementById('statistics') && !document.getElementById('statistics').classList.contains('hidden')) {
        createBirthsByMonthChart();
    }
    
    if (document.getElementById('admin') && !document.getElementById('admin').classList.contains('hidden') && isAdminLoggedIn) {
        displayAdminTable();
    }
}

// Update all text content based on the current language
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update placeholder text
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
    
    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === currentLang;
        btn.classList.toggle('bg-blue-600', isActive);
        btn.classList.toggle('text-white', isActive);
        btn.classList.toggle('hover:bg-blue-100', !isActive);
    });
}

// Update form options (like months) based on language
function updateFormOptions() {
    const monthSelect = document.getElementById('month');
    if (monthSelect) {
        const selectedValue = monthSelect.value;
        monthSelect.innerHTML = ''; // Clear existing options
        const months = translations[currentLang]?.months || translations.en.months;
        months.forEach((month, index) => {
            const option = document.createElement('option');
            option.value = index + 1;
            option.textContent = month;
            monthSelect.appendChild(option);
        });
        monthSelect.value = selectedValue;
    }
}

// Show a specific section of the application
function showSection(sectionName) {
    document.querySelectorAll('#app > section').forEach(section => {
        section.classList.add('hidden');
    });
    
    const sectionElement = document.getElementById(sectionName);
    if (!sectionElement) return;
    
    sectionElement.classList.remove('hidden');
    
    // Trigger fade-in animation
    const fadeElement = sectionElement.querySelector('.fade-in');
    if (fadeElement) {
        fadeElement.classList.remove('fade-in');
        void sectionElement.offsetWidth; // Trigger reflow
        fadeElement.classList.add('fade-in');
    }
    
    // Load data for sections that require it
    if (sectionName === 'statistics') {
        loadStatisticsPage();
    } else if (sectionName === 'admin') {
        checkAdminStatus(auth.currentUser);
    }
}

// Load all necessary data for the statistics page
function loadStatisticsPage() {
    updateStatistics();
    displayResults();
    displayCountryDistribution();
    createBirthsByMonthChart();
    createBirthsByYearChart();
}

// Show a toast notification
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- VALIDATION FUNCTIONS ---
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    
    if (!email) {
        utils.showError('emailError', translations[currentLang]['validation.emailRequired']);
        return false;
    } else if (!utils.isValidEmail(email)) {
        utils.showError('emailError', translations[currentLang]['validation.emailInvalid']);
        return false;
    } else {
        utils.hideError('emailError');
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    
    if (!password) {
        utils.showError('passwordError', translations[currentLang]['validation.passwordRequired']);
        return false;
    } else if (password.length < 6) {
        utils.showError('passwordError', translations[currentLang]['validation.passwordMin']);
        return false;
    } else {
        utils.hideError('passwordError');
        return true;
    }
}

function validateDay() {
    const day = document.getElementById('day').value;
    
    if (!day) {
        utils.showError('dayError', translations[currentLang]['validation.dayRequired']);
        return false;
    } else {
        utils.hideError('dayError');
        return true;
    }
}

function validateMonth() {
    const month = document.getElementById('month').value;
    
    if (!month) {
        utils.showError('monthError', translations[currentLang]['validation.monthRequired']);
        return false;
    } else {
        utils.hideError('monthError');
        return true;
    }
}

function validateYear() {
    const year = document.getElementById('year').value;
    
    if (!year) {
        utils.showError('yearError', translations[currentLang]['validation.yearRequired']);
        return false;
    } else if (!utils.isValidYear(parseInt(year))) {
        utils.showError('yearError', translations[currentLang]['validation.yearInvalid']);
        return false;
    } else {
        utils.hideError('yearError');
        return true;
    }
}

function validateCountry() {
    const country = document.getElementById('country').value;
    
    if (!country) {
        utils.showError('countryError', translations[currentLang]['validation.countryRequired']);
        return false;
    } else {
        utils.hideError('countryError');
        return true;
    }
}

function validateLoginEmail() {
    const email = document.getElementById('loginEmail').value;
    const emailError = document.getElementById('loginEmailError');
    
    if (!email) {
        utils.showError('loginEmailError', translations[currentLang]['validation.emailRequired']);
        return false;
    } else if (!utils.isValidEmail(email)) {
        utils.showError('loginEmailError', translations[currentLang]['validation.emailInvalid']);
        return false;
    } else {
        utils.hideError('loginEmailError');
        return true;
    }
}

function validateLoginPassword() {
    const password = document.getElementById('loginPassword').value;
    
    if (!password) {
        utils.showError('loginPasswordError', translations[currentLang]['validation.passwordRequired']);
        return false;
    } else {
        utils.hideError('loginPasswordError');
        return true;
    }
}

// --- AUTHENTICATION HANDLERS ---
async function handleRegistration(e) {
    e.preventDefault();
    
    // Validate all fields
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isDayValid = validateDay();
    const isMonthValid = validateMonth();
    const isYearValid = validateYear();
    const isCountryValid = validateCountry();
    
    if (!isEmailValid || !isPasswordValid || !isDayValid || !isMonthValid || !isYearValid || !isCountryValid) {
        return;
    }
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    utils.showLoading(submitBtn);
    
    const email = form.email.value;
    const password = form.password.value;
    const day = form.day.value;
    const month = form.month.value;
    const year = form.year.value;
    
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        await db.collection('users').doc(user.uid).set({
            email: email,
            day: parseInt(day),
            month: parseInt(month),
            year: parseInt(year),
            time: form.time.value,
            country: form.country.value,
            city: form.city.value,
            showEmail: form.showEmail.checked,
            birthDate: utils.formatDate(day, month, year),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        const sameDayCount = await getSameDayCount(day, month, year);
        document.getElementById('modalSameDay').textContent = sameDayCount;
        document.getElementById('successModal').classList.remove('hidden');
        
        form.reset();
        showToast(translations[currentLang]['success.message'], 'success');
        
    } catch (error) {
        console.error('Registration error:', error);
        showToast(`${translations[currentLang]['common.error']}: ${error.message}`, 'error');
    } finally {
        utils.hideLoading(submitBtn, originalText);
    }
}

async function handleLogin(e) {
    e.preventDefault();
    
    // Validate all fields
    const isEmailValid = validateLoginEmail();
    const isPasswordValid = validateLoginPassword();
    
    if (!isEmailValid || !isPasswordValid) {
        return;
    }
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    utils.showLoading(submitBtn);
    
    const email = form.loginEmail.value;
    const password = form.loginPassword.value;
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
        showSection('statistics');
        showToast('Login successful!', 'success');
    } catch (error) {
        console.error('Login error:', error);
        showToast(`${translations[currentLang]['common.error']}: ${error.message}`, 'error');
    } finally {
        utils.hideLoading(submitBtn, originalText);
    }
}

async function handleAdminLogin(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    utils.showLoading(submitBtn);
    
    const email = form.adminEmail.value;
    const password = form.adminPassword.value;
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
        // After sign-in, check if the user is an admin.
        // The checkAdminStatus function will be triggered by onAuthStateChanged.
    } catch (error) {
        console.error('Admin login error:', error);
        showToast(`${translations[currentLang]['common.error']}: Invalid credentials.`, 'error');
    } finally {
        utils.hideLoading(submitBtn, originalText);
    }
}

// --- STATISTICS AND DATA DISPLAY ---
async function getSameDayCount(day, month, year) {
    try {
        const snapshot = await db.collection('users')
            .where('day', '==', parseInt(day))
            .where('month', '==', parseInt(month))
            .get();
        // Note: This query is simpler and more efficient than including year.
        // It finds people born on the same day and month across all years.
        return snapshot.size > 0 ? snapshot.size - 1 : 0;
    } catch (error) {
        console.error('Error getting same day count:', error);
        return 0;
    }
}

function closeModal() {
    document.getElementById('successModal').classList.add('hidden');
    showSection('statistics');
}

async function updateStatistics() {
    try {
        const usersSnapshot = await db.collection('users').get();
        const users = usersSnapshot.docs.map(doc => doc.data());
        
        // Update total users
        const totalUsersElement = document.getElementById('totalUsers');
        if (totalUsersElement) totalUsersElement.textContent = users.length;
        
        // Update unique countries
        const uniqueCountries = new Set(users.map(user => user.country));
        const countriesCountElement = document.getElementById('countriesCount');
        if (countriesCountElement) countriesCountElement.textContent = uniqueCountries.size;
        
        // Update today's birthdays
        const today = new Date();
        const todayBirthdays = users.filter(user => 
            user.day === today.getDate() && user.month === (today.getMonth() + 1)
        ).length;
        const todayBirthdaysElement = document.getElementById('todayBirthdays');
        if (todayBirthdaysElement) todayBirthdaysElement.textContent = todayBirthdays;
        
        // Update same day count if user is logged in
        if (currentUser) {
            const userDoc = await db.collection('users').doc(currentUser.uid).get();
            if(userDoc.exists) {
                const userData = userDoc.data();
                const sameDayCount = await getSameDayCount(userData.day, userData.month, userData.year);
                const sameDayCountElement = document.getElementById('sameDayCount');
                if (sameDayCountElement) sameDayCountElement.textContent = sameDayCount;
            }
        }
    } catch (error) {
        console.error('Error updating statistics:', error);
        showToast('Error updating statistics', 'error');
    }
}

// Display results table for the current user's birth date
async function displayResults() {
    const resultsTable = document.getElementById('resultsTable');
    if (!resultsTable) return;
    
    if (!currentUser) {
        resultsTable.innerHTML = `<p class="text-center text-gray-500 py-8">${translations[currentLang]['stats.results']}</p>`;
        return;
    }
    
    try {
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        if (!userDoc.exists) return;
        
        const currentUserData = userDoc.data();
        const snapshot = await db.collection('users')
            .where('day', '==', currentUserData.day)
            .where('month', '==', currentUserData.month)
            .get();
        
        const users = snapshot.docs
            .map(doc => doc.data())
            .filter(user => user.email !== currentUserData.email);
        
        if (users.length === 0) {
            resultsTable.innerHTML = '<p class="text-center text-gray-500 py-8">No birth twins found yet. Invite more friends!</p>';
            return;
        }
        
        const tableHTML = `
            <div class="overflow-x-auto">
                <table class="data-table w-full">
                    <thead>
                        <tr>
                            <th class="text-left py-3 px-4">${translations[currentLang]['table.date']}</th>
                            <th class="text-left py-3 px-4">${translations[currentLang]['table.country']}</th>
                            <th class="text-left py-3 px-4">${translations[currentLang]['table.city']}</th>
                            <th class="text-left py-3 px-4">${translations[currentLang]['table.email']}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(user => `
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3 px-4">${user.birthDate}</td>
                                <td class="py-3 px-4">${user.country}</td>
                                <td class="py-3 px-4">${user.city || '-'}</td>
                                <td class="py-3 px-4">${user.showEmail ? user.email : 'Hidden'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>`;
        resultsTable.innerHTML = tableHTML;
    } catch (error) {
        console.error('Error displaying results:', error);
        showToast('Error loading results', 'error');
    }
}

// --- CHART CREATION ---
async function createBirthsByMonthChart() {
    const ctx = document.getElementById('birthsByMonthChart')?.getContext('2d');
    if (!ctx) return;
    
    try {
        const usersSnapshot = await db.collection('users').get();
        const users = usersSnapshot.docs.map(doc => doc.data());
        
        const monthCounts = Array(12).fill(0);
        users.forEach(user => {
            if (user.month >= 1 && user.month <= 12) {
                monthCounts[user.month - 1]++;
            }
        });
        
        if (birthsByMonthChart) birthsByMonthChart.destroy();
        
        birthsByMonthChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: translations[currentLang].months,
                datasets: [{
                    label: translations[currentLang]['stats.byMonth'],
                    data: monthCounts,
                    backgroundColor: 'rgba(59, 130, 246, 0.6)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                scales: { 
                    y: { 
                        beginAtZero: true, 
                        ticks: { 
                            precision: 0 
                        } 
                    } 
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });
    } catch (error) { 
        console.error('Error creating births by month chart:', error);
        showToast('Error creating chart', 'error');
    }
}

async function createBirthsByYearChart() {
    const ctx = document.getElementById('birthsByYearChart')?.getContext('2d');
    if (!ctx) return;
    
    try {
        const usersSnapshot = await db.collection('users').get();
        const users = usersSnapshot.docs.map(doc => doc.data());
        
        const yearCounts = {};
        users.forEach(user => {
            if (user.year) {
                yearCounts[user.year] = (yearCounts[user.year] || 0) + 1;
            }
        });
        
        const sortedYears = Object.keys(yearCounts).sort((a, b) => a - b);
        const counts = sortedYears.map(year => yearCounts[year]);
        
        if (birthsByYearChart) birthsByYearChart.destroy();
        
        birthsByYearChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: sortedYears,
                datasets: [{
                    label: translations[currentLang]['stats.byYear'],
                    data: counts,
                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    borderColor: 'rgba(139, 92, 246, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                scales: { 
                    y: { 
                        beginAtZero: true, 
                        ticks: { 
                            precision: 0 
                        } 
                    } 
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });
    } catch (error) { 
        console.error('Error creating births by year chart:', error);
        showToast('Error creating chart', 'error');
    }
}

async function displayCountryDistribution() {
    const container = document.getElementById('countryDistribution');
    if (!container) return;
    
    try {
        const usersSnapshot = await db.collection('users').get();
        const users = usersSnapshot.docs.map(doc => doc.data());
        
        if (users.length === 0) {
            container.innerHTML = '<p class="text-center text-gray-500">No country data available.</p>';
            return;
        }
        
        const countryCount = users.reduce((acc, user) => {
            if (user.country) {
                acc[user.country] = (acc[user.country] || 0) + 1;
            }
            return acc;
        }, {});
        
        const sortedCountries = Object.entries(countryCount).sort((a, b) => b[1] - a[1]).slice(0, 10);
        
        container.innerHTML = sortedCountries.map(([country, count]) => {
            const percentage = ((count / users.length) * 100).toFixed(1);
            return `
                <div class="flex items-center justify-between text-sm mb-2">
                    <span class="font-medium">${country}</span>
                    <div class="flex items-center">
                        <div class="w-32 bg-gray-200 rounded-full h-2 mx-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: ${percentage}%"></div>
                        </div>
                        <span class="text-gray-600 font-semibold">${count}</span>
                    </div>
                </div>`;
        }).join('');
    } catch (error) { 
        console.error('Error displaying country distribution:', error);
        showToast('Error displaying country distribution', 'error');
    }
}

// --- DATA EXPORT ---
async function exportData(format) {
    if (isLoading) return;
    
    isLoading = true;
    showExportModal();
    updateExportProgress(10, translations[currentLang]['export.preparing']);
    
    try {
        const usersSnapshot = await db.collection('users').get();
        const users = usersSnapshot.docs.map(doc => {
            const data = doc.data();
            // Ensure data has the fields we need
            return {
                Date: data.birthDate || '',
                Time: data.time || '',
                Country: data.country || '',
                City: data.city || '',
                Email: data.email || '',
                Show_Email: data.showEmail ? 'Yes' : 'No',
                Year: data.year || ''
            };
        });
        
        updateExportProgress(50, translations[currentLang]['export.processing']);
        
        let blob, filename;
        switch (format) {
            case 'csv':
                const csv = Papa.unparse(users);
                blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                filename = 'twinbirth_data.csv';
                break;
            case 'xlsx':
                const worksheet = XLSX.utils.json_to_sheet(users);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
                const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
                blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                filename = 'twinbirth_data.xlsx';
                break;
            case 'json':
                blob = new Blob([JSON.stringify(users, null, 2)], { type: 'application/json' });
                filename = 'twinbirth_data.json';
                break;
            default:
                throw new Error('Unsupported format');
        }
        
        updateExportProgress(90, 'Generating file...');
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        updateExportProgress(100, translations[currentLang]['export.complete']);
        setTimeout(() => {
            hideExportModal();
            showToast('Export successful!', 'success');
        }, 1500);
    } catch (error) {
        console.error('Error exporting data:', error);
        updateExportProgress(100, translations[currentLang]['export.error']);
        setTimeout(() => {
            hideExportModal();
            showToast(`Export failed: ${error.message}`, 'error');
        }, 1500);
    } finally {
        isLoading = false;
    }
}

function showExportModal() { 
    const modal = document.getElementById('exportModal');
    if (modal) modal.classList.remove('hidden');
}

function hideExportModal() { 
    const modal = document.getElementById('exportModal');
    if (modal) modal.classList.add('hidden');
}

function updateExportProgress(percentage, status) {
    const progressBar = document.getElementById('exportProgress');
    const statusText = document.getElementById('exportStatus');
    
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (statusText) statusText.textContent = status;
}

// --- ADMIN PANEL ---
/**
 * Checks if the currently logged-in user has admin privileges by inspecting
 * the ID token for a custom claim 'isAdmin'.
 */
async function checkAdminStatus(user) {
    if (!user) {
        isAdminLoggedIn = false;
        const adminLogin = document.getElementById('adminLogin');
        const adminContent = document.getElementById('adminContent');
        if (adminLogin) adminLogin.classList.remove('hidden');
        if (adminContent) adminContent.classList.add('hidden');
        return;
    }
    
    try {
        // Force refresh the token to get the latest claims.
        const idTokenResult = await user.getIdTokenResult(true);
        if (idTokenResult.claims.isAdmin) {
            isAdminLoggedIn = true;
            const adminLogin = document.getElementById('adminLogin');
            const adminContent = document.getElementById('adminContent');
            if (adminLogin) adminLogin.classList.add('hidden');
            if (adminContent) adminContent.classList.remove('hidden');
            loadAdminDashboard();
        } else {
            isAdminLoggedIn = false;
            const adminLogin = document.getElementById('adminLogin');
            const adminContent = document.getElementById('adminContent');
            if (adminLogin) adminLogin.classList.remove('hidden');
            if (adminContent) adminContent.classList.add('hidden');
            showToast('Access Denied. You are not an administrator.', 'error');
            await auth.signOut(); // Sign out non-admin users trying to access the panel.
        }
    } catch (error) {
        console.error('Error checking admin status:', error);
        isAdminLoggedIn = false;
        showToast('Error checking admin status', 'error');
    }
}

// Loads all data for the admin dashboard
function loadAdminDashboard() {
    fetchAllUsersForAdmin();
    updateAdminStats();
}

// Fetches all users and stores them for filtering and display
async function fetchAllUsersForAdmin() {
    try {
        const usersSnapshot = await db.collection('users').orderBy('createdAt', 'desc').get();
        allUsers = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        filteredUsers = [...allUsers];
        displayAdminTable();
    } catch (error) {
        console.error('Error fetching users for admin:', error);
        showToast('Could not load user data.', 'error');
    }
}

// Filters the admin user list and re-renders the table
function filterAndDisplayAdminUsers(searchTerm) {
    if (!searchTerm) {
        filteredUsers = [...allUsers];
    } else {
        filteredUsers = allUsers.filter(user =>
            (user.email && user.email.toLowerCase().includes(searchTerm)) ||
            (user.country && user.country.toLowerCase().includes(searchTerm)) ||
            (user.city && user.city.toLowerCase().includes(searchTerm)) ||
            (user.year && user.year.toString().includes(searchTerm))
        );
    }
    displayAdminTable();
}

// Renders the main table in the admin dashboard
function displayAdminTable() {
    const adminTableContainer = document.getElementById('adminTable');
    if (!adminTableContainer) return;
    
    if (filteredUsers.length === 0) {
        adminTableContainer.innerHTML = '<p class="text-center text-gray-500 py-8">No users found.</p>';
        return;
    }
    
    const tableHTML = `
        <div class="overflow-x-auto">
            <table class="data-table w-full">
                <thead>
                    <tr class="border-b">
                        <th class="text-left py-3 px-4">${translations[currentLang]['table.email']}</th>
                        <th class="text-left py-3 px-4">${translations[currentLang]['table.date']}</th>
                        <th class="text-left py-3 px-4">${translations[currentLang]['table.country']}</th>
                        <th class="text-left py-3 px-4">${translations[currentLang]['table.actions']}</th>
                    </tr>
                </thead>
                <tbody>
                    ${filteredUsers.map(user => `
                        <tr class="border-b hover:bg-gray-50">
                            <td class="py-3 px-4">${user.email}</td>
                            <td class="py-3 px-4">${user.birthDate}</td>
                            <td class="py-3 px-4">${user.country}</td>
                            <td class="py-3 px-4">
                                <button onclick="deleteUser('${user.id}', '${user.email}')" class="text-red-600 hover:text-red-800 transition-all text-sm" aria-label="Delete user">
                                    <i class="fas fa-trash-alt mr-1"></i>${translations[currentLang]['table.delete']}
                                </button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>`;
    adminTableContainer.innerHTML = tableHTML;
}

// Updates the stat cards in the admin dashboard
async function updateAdminStats() {
    try {
        const usersSnapshot = await db.collection('users').get();
        const users = usersSnapshot.docs.map(doc => ({...doc.data(), createdAt: doc.data().createdAt?.toDate()}));
        
        // Update total registrations
        const adminTotalReg = document.getElementById('adminTotalReg');
        if (adminTotalReg) adminTotalReg.textContent = users.length;
        
        // Update today's registrations
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayRegistrations = users.filter(u => u.createdAt && u.createdAt >= today).length;
        const adminTodayReg = document.getElementById('adminTodayReg');
        if (adminTodayReg) adminTodayReg.textContent = todayRegistrations;
        
        // Update unique countries
        const uniqueCountries = new Set(users.map(u => u.country)).size;
        const adminUniqueCountries = document.getElementById('adminUniqueCountries');
        if (adminUniqueCountries) adminUniqueCountries.textContent = uniqueCountries;
        
        // Update privacy enabled count
        const privacyEnabled = users.filter(u => u.showEmail === false).length;
        const adminPrivacyOn = document.getElementById('adminPrivacyOn');
        if (adminPrivacyOn) adminPrivacyOn.textContent = privacyEnabled;
    } catch (error) {
        console.error('Error updating admin stats:', error);
        showToast('Error updating admin statistics', 'error');
    }
}

// Deletes a user from Firestore
async function deleteUser(userId, userEmail) {
    if (!confirm(`Are you sure you want to delete the user: ${userEmail}? This will only remove their data record.`)) {
        return;
    }
    
    try {
        await db.collection('users').doc(userId).delete();
        showToast('User data deleted successfully.', 'success');
        // Refresh admin view
        loadAdminDashboard();
        updateStatistics(); // Refresh public stats
    } catch (error) {
        console.error('Error deleting user:', error);
        showToast(`Error deleting user: ${error.message}`, 'error');
    }
}

// Logs out the admin user
async function adminLogout() {
    try {
        await auth.signOut();
        isAdminLoggedIn = false;
        const adminLogin = document.getElementById('adminLogin');
        const adminContent = document.getElementById('adminContent');
        if (adminLogin) adminLogin.classList.remove('hidden');
        if (adminContent) adminContent.classList.add('hidden');
        
        const adminEmail = document.getElementById('adminEmail');
        const adminPassword = document.getElementById('adminPassword');
        if (adminEmail) adminEmail.value = '';
        if (adminPassword) adminPassword.value = '';
        
        showToast('Admin logged out.', 'info');
    } catch (error) {
        console.error('Admin logout error:', error);
        showToast('Logout failed.', 'error');
    }
}

// Placeholder functions for unimplemented filter features
function filterByCountry() { 
    showToast('Country filter feature is not yet implemented.', 'info');
}

function filterByYear() { 
    showToast('Year filter feature is not yet implemented.', 'info');
}

// --- END OF FILE app.js ---