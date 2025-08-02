// --- START OF UPGRADED FILE config.js ---
// TwinBirth Configuration File
// This file contains the application's core settings.
const CONFIG = {
    // Firebase Configuration
    // Replace with your project's Firebase credentials.
    firebase: {
        apiKey: "AIzaSyAgdHnm2zd8aav60xZo1yG8Jnzht7e71_Y",
        authDomain: "birthtwin-a1f16.firebaseapp.com",
        projectId: "birthtwin-a1f16",
        storageBucket: "birthtwin-a1f16.firebasestorage.app",
        messagingSenderId: "856557385980",
        appId: "1:856557385980:web:cbd371615e4785b9307f79"
    },
    
    // Application Settings
    app: {
        name: "TwinBirth",
        version: "2.2.0", // Updated version number
        description: "Discover Your Birth Twins",
        defaultLanguage: "en",
        supportedLanguages: ["en", "ar", "fr"],
        // Admin credentials removed for security - now uses Firebase Custom Claims
        contactEmail: "support@twinbirth.com", // Support contact instead of admin credentials
        maintenanceMode: false // Toggle for maintenance mode
    },
    
    // Data Export Settings
    export: {
        defaultFormat: "csv",
        supportedFormats: ["csv", "xlsx", "json"],
        maxRecordsPerExport: 10000,
        includeHeaders: true,
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        batchSize: 1000 // Number of records to process in each batch
    },
    
    // UI & Theme Settings
    ui: {
        theme: "light", // Supported values: 'light', 'dark', 'auto'
        animations: true,
        toastDuration: 3500,
        chartColors: {
            primary: "#3b82f6",   // Blue
            secondary: "#8b5cf6", // Purple
            success: "#10b981",   // Green
            warning: "#f59e0b",   // Amber
            error: "#ef4444"      // Red
        },
        responsive: {
            mobile: 768,
            tablet: 1024,
            desktop: 1200
        },
        pagination: {
            defaultPageSize: 10,
            pageSizeOptions: [5, 10, 20, 50]
        }
    },
    
    // Data-related Settings
    data: {
        minYear: 1900,
        maxYear: new Date().getFullYear(),
        // A comprehensive list of all countries and territories in the world.
        countries: [
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
        ],
        requiredFields: ["email", "password", "day", "month", "year", "country"],
        optionalFields: ["time", "city", "showEmail"],
        validation: {
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            },
            password: {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/
            },
            year: {
                min: 1900,
                max: new Date().getFullYear()
            }
        }
    },
    
    // Security Settings
    security: {
        passwordMinLength: 8,
        passwordRequirements: {
            uppercase: true,
            lowercase: true,
            numbers: true,
            specialChars: false
        },
        emailValidationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        inputSanitization: true,
        xssProtection: true,
        csrfProtection: true,
        rateLimiting: {
            enabled: true,
            maxAttempts: 5,
            windowMs: 900000, // 15 minutes
            message: "Too many attempts, please try again later."
        },
        sessionTimeout: 3600000, // 1 hour in milliseconds
        admin: {
            // Admin roles and permissions
            roles: {
                superAdmin: {
                    permissions: ["read", "write", "delete", "manage_users", "export_all"]
                },
                admin: {
                    permissions: ["read", "write", "delete", "export_all"]
                },
                moderator: {
                    permissions: ["read", "write"]
                }
            }
        }
    },
    
    // Performance Optimization Settings
    performance: {
        debounceDelay: 300,
        chartUpdateDelay: 1000,
        searchDelay: 500,
        maxConcurrentRequests: 5,
        cacheExpiration: 300000, // 5 minutes in milliseconds
        lazyLoading: {
            enabled: true,
            threshold: 200 // Pixels before viewport
        },
        pagination: {
            enabled: true,
            defaultPageSize: 20
        }
    },
    
    // Feature Flags - Toggle features on or off globally
    features: {
        exportEnabled: true,
        adminPanel: true,
        searchFunctionality: true,
        filtering: true,
        charts: true,
        notifications: true,
        darkMode: true,
        rtlSupport: true,
        userProfiles: true,
        socialSharing: false,
        birthdayReminders: false
    },
    
    // Analytics & Monitoring
    analytics: {
        enabled: false,
        trackingId: "", // e.g., Google Analytics ID
        events: {
            registration: true,
            login: true,
            export: true,
            adminAction: true,
            pageView: true
        }
    },
    
    // Error Handling Configuration
    errors: {
        showUserFriendly: true,
        logToConsole: true,
        retryAttempts: 3,
        timeoutDuration: 10000, // 10 seconds
        customMessages: {
            network: "Network error. Please check your connection.",
            timeout: "Request timed out. Please try again.",
            server: "Server error. Please try again later.",
            unknown: "An unexpected error occurred."
        }
    },
    
    // API Configuration
    api: {
        baseUrl: "",
        endpoints: {
            users: "/api/users",
            statistics: "/api/statistics",
            export: "/api/export"
        },
        timeout: 10000,
        retries: 2
    },
    
    // Email Configuration
    email: {
        service: "", // e.g., SendGrid, Mailgun
        templates: {
            welcome: "welcome-email",
            passwordReset: "password-reset",
            birthdayReminder: "birthday-reminder"
        },
        from: "noreply@twinbirth.com"
    },
    
    // Localization Settings
    localization: {
        defaultLocale: "en",
        fallbackLocale: "en",
        dateFormat: "MM/DD/YYYY",
        timeFormat: "h:mm A",
        currency: "USD",
        numberFormat: {
            decimal: ".",
            thousands: ",",
            precision: 2
        }
    }
};

// Freeze the configuration object to prevent it from being changed.
Object.freeze(CONFIG);

// Export the configuration for use in Node.js environments (like build scripts)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    // Make it available globally in the browser
    window.CONFIG = CONFIG;
}
// --- END OF UPGRADED FILE config.js ---