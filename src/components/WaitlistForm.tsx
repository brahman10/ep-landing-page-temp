"use client";

import React, { useState, useEffect, useRef } from 'react';

interface WaitlistFormProps {
  className?: string;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ className = '' }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);
  const [joinedCount, setJoinedCount] = useState(1500);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Comprehensive country codes data
  const countryCodes = [
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+1', country: 'Canada', flag: '🇨🇦' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+7', country: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+36', country: 'Hungary', flag: '🇭🇺' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+40', country: 'Romania', flag: '🇷🇴' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+53', country: 'Cuba', flag: '🇨🇺' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+95', country: 'Myanmar', flag: '🇲🇲' },
    { code: '+98', country: 'Iran', flag: '🇮🇷' },
    { code: '+212', country: 'Morocco', flag: '🇲🇦' },
    { code: '+213', country: 'Algeria', flag: '🇩🇿' },
    { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
    { code: '+218', country: 'Libya', flag: '🇱🇾' },
    { code: '+220', country: 'Gambia', flag: '🇬🇲' },
    { code: '+221', country: 'Senegal', flag: '🇸🇳' },
    { code: '+222', country: 'Mauritania', flag: '🇲🇷' },
    { code: '+223', country: 'Mali', flag: '🇲🇱' },
    { code: '+224', country: 'Guinea', flag: '🇬🇳' },
    { code: '+225', country: 'Ivory Coast', flag: '🇨🇮' },
    { code: '+226', country: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+227', country: 'Niger', flag: '🇳🇪' },
    { code: '+228', country: 'Togo', flag: '🇹🇬' },
    { code: '+229', country: 'Benin', flag: '🇧🇯' },
    { code: '+230', country: 'Mauritius', flag: '🇲🇺' },
    { code: '+231', country: 'Liberia', flag: '🇱🇷' },
    { code: '+232', country: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+233', country: 'Ghana', flag: '🇬🇭' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+235', country: 'Chad', flag: '🇹🇩' },
    { code: '+236', country: 'Central African Republic', flag: '🇨🇫' },
    { code: '+237', country: 'Cameroon', flag: '🇨🇲' },
    { code: '+238', country: 'Cape Verde', flag: '🇨🇻' },
    { code: '+239', country: 'São Tomé and Príncipe', flag: '🇸🇹' },
    { code: '+240', country: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: '+241', country: 'Gabon', flag: '🇬🇦' },
    { code: '+242', country: 'Republic of the Congo', flag: '🇨🇬' },
    { code: '+243', country: 'Democratic Republic of the Congo', flag: '🇨🇩' },
    { code: '+244', country: 'Angola', flag: '🇦🇴' },
    { code: '+245', country: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: '+246', country: 'British Indian Ocean Territory', flag: '🇮🇴' },
    { code: '+248', country: 'Seychelles', flag: '🇸🇨' },
    { code: '+249', country: 'Sudan', flag: '🇸🇩' },
    { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
    { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
    { code: '+252', country: 'Somalia', flag: '🇸🇴' },
    { code: '+253', country: 'Djibouti', flag: '🇩🇯' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
    { code: '+256', country: 'Uganda', flag: '🇺🇬' },
    { code: '+257', country: 'Burundi', flag: '🇧🇮' },
    { code: '+258', country: 'Mozambique', flag: '🇲🇿' },
    { code: '+260', country: 'Zambia', flag: '🇿🇲' },
    { code: '+261', country: 'Madagascar', flag: '🇲🇬' },
    { code: '+262', country: 'Réunion', flag: '🇷🇪' },
    { code: '+263', country: 'Zimbabwe', flag: '🇿🇼' },
    { code: '+264', country: 'Namibia', flag: '🇳🇦' },
    { code: '+265', country: 'Malawi', flag: '🇲🇼' },
    { code: '+266', country: 'Lesotho', flag: '🇱🇸' },
    { code: '+267', country: 'Botswana', flag: '🇧🇼' },
    { code: '+268', country: 'Swaziland', flag: '🇸🇿' },
    { code: '+269', country: 'Comoros', flag: '🇰🇲' },
    { code: '+290', country: 'Saint Helena', flag: '🇸🇭' },
    { code: '+291', country: 'Eritrea', flag: '🇪🇷' },
    { code: '+297', country: 'Aruba', flag: '🇦🇼' },
    { code: '+298', country: 'Faroe Islands', flag: '🇫🇴' },
    { code: '+299', country: 'Greenland', flag: '🇬🇱' },
    { code: '+350', country: 'Gibraltar', flag: '🇬🇮' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+352', country: 'Luxembourg', flag: '🇱🇺' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+354', country: 'Iceland', flag: '🇮🇸' },
    { code: '+355', country: 'Albania', flag: '🇦🇱' },
    { code: '+356', country: 'Malta', flag: '🇲🇹' },
    { code: '+357', country: 'Cyprus', flag: '🇨🇾' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
    { code: '+371', country: 'Latvia', flag: '🇱🇻' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+373', country: 'Moldova', flag: '🇲🇩' },
    { code: '+374', country: 'Armenia', flag: '🇦🇲' },
    { code: '+375', country: 'Belarus', flag: '🇧🇾' },
    { code: '+376', country: 'Andorra', flag: '🇦🇩' },
    { code: '+377', country: 'Monaco', flag: '🇲🇨' },
    { code: '+378', country: 'San Marino', flag: '🇸🇲' },
    { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
    { code: '+381', country: 'Serbia', flag: '🇷🇸' },
    { code: '+382', country: 'Montenegro', flag: '🇲🇪' },
    { code: '+383', country: 'Kosovo', flag: '🇽🇰' },
    { code: '+385', country: 'Croatia', flag: '🇭🇷' },
    { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
    { code: '+387', country: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: '+389', country: 'North Macedonia', flag: '🇲🇰' },
    { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
    { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
    { code: '+423', country: 'Liechtenstein', flag: '🇱🇮' },
    { code: '+500', country: 'Falkland Islands', flag: '🇫🇰' },
    { code: '+501', country: 'Belize', flag: '🇧🇿' },
    { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
    { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
    { code: '+504', country: 'Honduras', flag: '🇭🇳' },
    { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
    { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
    { code: '+507', country: 'Panama', flag: '🇵🇦' },
    { code: '+508', country: 'Saint Pierre and Miquelon', flag: '🇵🇲' },
    { code: '+509', country: 'Haiti', flag: '🇭🇹' },
    { code: '+590', country: 'Guadeloupe', flag: '🇬🇵' },
    { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
    { code: '+592', country: 'Guyana', flag: '🇬🇾' },
    { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
    { code: '+594', country: 'French Guiana', flag: '🇬🇫' },
    { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
    { code: '+596', country: 'Martinique', flag: '🇲🇶' },
    { code: '+597', country: 'Suriname', flag: '🇸🇷' },
    { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
    { code: '+599', country: 'Netherlands Antilles', flag: '🇧🇶' },
    { code: '+670', country: 'East Timor', flag: '🇹🇱' },
    { code: '+672', country: 'Australian External Territories', flag: '🇦🇶' },
    { code: '+673', country: 'Brunei', flag: '🇧🇳' },
    { code: '+674', country: 'Nauru', flag: '🇳🇷' },
    { code: '+675', country: 'Papua New Guinea', flag: '🇵🇬' },
    { code: '+676', country: 'Tonga', flag: '🇹🇴' },
    { code: '+677', country: 'Solomon Islands', flag: '🇸🇧' },
    { code: '+678', country: 'Vanuatu', flag: '🇻🇺' },
    { code: '+679', country: 'Fiji', flag: '🇫🇯' },
    { code: '+680', country: 'Palau', flag: '🇵🇼' },
    { code: '+681', country: 'Wallis and Futuna', flag: '🇼🇫' },
    { code: '+682', country: 'Cook Islands', flag: '🇨🇰' },
    { code: '+683', country: 'Niue', flag: '🇳🇺' },
    { code: '+684', country: 'American Samoa', flag: '🇦🇸' },
    { code: '+685', country: 'Samoa', flag: '🇼🇸' },
    { code: '+686', country: 'Kiribati', flag: '🇰🇮' },
    { code: '+687', country: 'New Caledonia', flag: '🇳🇨' },
    { code: '+688', country: 'Tuvalu', flag: '🇹🇻' },
    { code: '+689', country: 'French Polynesia', flag: '🇵🇫' },
    { code: '+690', country: 'Tokelau', flag: '🇹🇰' },
    { code: '+691', country: 'Micronesia', flag: '🇫🇲' },
    { code: '+692', country: 'Marshall Islands', flag: '🇲🇭' },
    { code: '+850', country: 'North Korea', flag: '🇰🇵' },
    { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
    { code: '+853', country: 'Macau', flag: '🇲🇴' },
    { code: '+855', country: 'Cambodia', flag: '🇰🇭' },
    { code: '+856', country: 'Laos', flag: '🇱🇦' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
    { code: '+960', country: 'Maldives', flag: '🇲🇻' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+963', country: 'Syria', flag: '🇸🇾' },
    { code: '+964', country: 'Iraq', flag: '🇮🇶' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+967', country: 'Yemen', flag: '🇾🇪' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+970', country: 'Palestine', flag: '🇵🇸' },
    { code: '+971', country: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+972', country: 'Israel', flag: '🇮🇱' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
    { code: '+976', country: 'Mongolia', flag: '🇲🇳' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
    { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+994', country: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+995', country: 'Georgia', flag: '🇬🇪' },
    { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' }
  ];

  // Filter countries based on search query
  const filteredCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  );

  // Get selected country details
  const selectedCountry = countryCodes.find(country => country.code === selectedCountryCode);

  // Handle country selection
  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
    setIsDropdownOpen(false);
    setSearchQuery('');
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setSearchQuery('');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setSearchQuery('');
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const joinWaitlist = async (phone: string) => {
    const baseUrl ='https://eazyp-api-70322254253.asia-south1.run.app';
    const response = await fetch(`${baseUrl}/api/waitlist/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  };

  const handleSubmit = async () => {
    if (!phoneNumber.trim()) {
      setError('Please enter a phone number');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber.replace(/\s/g, ''))) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const fullPhoneNumber = `${selectedCountryCode}${phoneNumber}`;
      const result = await joinWaitlist(fullPhoneNumber);
      
      if (result) {
        // Handle successful response
        setIsSuccess(true);
        setPhoneNumber('');
        if (result.waitlistCount) {
          setJoinedCount(result.waitlistCount);
        } else {
          setJoinedCount(prev => prev + 1);
        }
        // Check if user is already added from API response
        if (result.isAlreadyAdded) {
          setIsAlreadyAdded(true);
        } else {
          setIsAlreadyAdded(false);
          
        }
      } else {
        setError('Failed to join waitlist. Please try again.');
      }
    } catch (err) {
      console.error('Error joining waitlist:', err);
      
      // Check if it's a 409 Conflict error (already on waitlist) - fallback for old API behavior
      if (err instanceof Error && err.message.includes('409')) {
        setIsSuccess(true);
        setIsAlreadyAdded(true);
        setPhoneNumber('');
      } else if (err instanceof TypeError && err.message.includes('fetch')) {
        setError('Unable to connect to server. Please check your connection.');
      } else {
        setError('Failed to join waitlist. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
      setError('');
    }
  };

  return (
    <div 
      className={`absolute bottom-0 left-0 right-0 top-[196px] overflow-hidden ${className}`}
    >
     <style>{`
  /* Dynamic scaling based on viewport height */
  @media (min-width: 769px) {
    .waitlist-container {
      /* Scale down when viewport height is less than the form needs */
      width: min(1000px, 90vw);
      height: min(550px, 80vh);
      transform: scale(min(1, calc(100vh / 700)));
      transform-origin: center center;
    }
    
    /* Adjust content sizes proportionally */
    @media (max-height: 700px) {
      .waitlist-title {
        font-size: clamp(24px, 5vw, 38px) !important;
      }
      .waitlist-description {
        font-size: clamp(14px, 2.5vw, 20px) !important;
      }
      .waitlist-form-container {
        padding: clamp(20px, 4vh, 40px) !important;
        height: auto !important;
        min-height: unset !important;
      }
      .waitlist-social-text {
        font-size: clamp(14px, 2.5vw, 20px) !important;
      }
    }
  }

  .waitlist-social-icon {
    width: 28px !important;
    height: 28px !important;
  }
  .waitlist-social-icon svg {
    width: 16px !important;
    height: 16px !important;
  }
  
  @media (max-width: 768px) {
    .waitlist-container {
      width: calc(100% - 32px) !important;
      max-width: 390px !important;
      height: auto !important;
      min-height: auto !important;
      padding: 32px 24px !important;
      gap: 24px !important;
      margin: 16px !important;
      margin-left: 0 !important;
      position: fixed !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      
      backdrop-filter: blur(100px) !important;
      -webkit-backdrop-filter: blur(100px) !important;
  
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2) !important;
    }
    .waitlist-title {
      font-size: 24px !important;
      line-height: 1.3 !important;
    }
    .waitlist-title br {
      display: none !important;
    }
    .waitlist-title .mobile-space {
      display: inline !important;
    }
    .waitlist-description {
      font-size: 14px !important;
      line-height: 1.5 !important;
      padding: 0 !important;
    }
    .waitlist-form-container {
      width: 100% !important;
      padding: 20px 16px !important;
      gap: 16px !important;
      background: rgba(255, 255, 255, 0.65) !important;
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.15) !important;
    }
    .waitlist-avatar {
      width: 28px !important;
      height: 28px !important;
    }
    .waitlist-avatar-text {
      font-size: 9px !important;
    }
    .waitlist-input-container {
      width: 100% !important;
      background: rgba(255, 255, 255, 0.9) !important;
    }
    .waitlist-button {
      width: 100% !important;
      padding: 12px 16px !important;
    }
    .waitlist-inputs-wrapper {
      flex-direction: column !important;
      gap: 12px !important;
    }
    .country-dropdown {
      min-width: 180px !important;
      max-width: 220px !important;
      max-height: 120px !important;
    }
    .country-dropdown-button {
      min-width: 40px !important;
      max-width: 55px !important;
      padding: 1px 2px !important;
      margin-left: 4px !important;
    }
    .waitlist-success-title {
      font-size: 26px !important;
      line-height: 1.3 !important;
    }
    .waitlist-success-description {
      font-size: 14px !important;
    }
    .waitlist-success-avatar {
      width: 40px !important;
      height: 40px !important;
      margin-right: -12px !important;
    }
    .waitlist-success-avatar-text {
      font-size: 12px !important;
    }
    .waitlist-social-container {
      margin-top: 0px !important;
    }
    .waitlist-social-text {
      font-size: 16px !important;
    }
    .waitlist-social-icon {
      width: 28px !important;
      height: 28px !important;
    }
    .waitlist-social-icon svg {
      width: 14px !important;
      height: 14px !important;
    }
  }
`}</style>
      {/* Main Content Container */}
      <div 
        className="waitlist-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        style={{ 
          width: '1000px',
          height: '550px',
          padding: '40px 40px',
          gap: '30px',
          borderRadius: '24px',
          background: '#ffffff',
          boxShadow: '0 0 11px 0 rgba(0, 0, 0, 0.25)',
          flexShrink: 0
        }}
      >
        {!isSuccess ? (
          <>
            {/* Title Section */}
            <div className="flex flex-col items-center gap-3 text-center w-full">
              <div 
                className="waitlist-title text-black"
                style={{ 
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'var(--font-geist)',
                  fontSize: '38px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: 'normal',
                  paddingTop: '0px',
                }}
              >
                One Stop Solution for<span className="mobile-space"> </span><br/>
                <span style={{ color: '#6d597a' }}>Pregnancy Care</span>
              </div>
              <p 
                className="waitlist-description w-full"
                style={{ 
                  color: 'rgba(0, 0, 0, 0.60)',
                  textAlign: 'center',
                  fontFamily: 'var(--font-geist)',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  padding: '0px 20px',
                }}
              >
                Everything you need for a healthy, happy pregnancy journey - all in one place. Join thousands of expecting mothers waiting for expert-backed guidance, personalized care, and 24/7 support
              </p>
            </div>

            {/* Form Container */}
            <div 
              className="waitlist-form-container bg-white flex flex-col w-full"
              style={{
                display: 'flex',
                width: '600px',
                height: '230px',
                padding: '40px',
                marginBottom: '0px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
                borderRadius: '24px',
                background: '#FFF',
                boxShadow: '0 1px 13px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Avatar Group */}
              <div className="flex items-center" style={{ marginTop: '-20px' }}>
                <div 
                  className="waitlist-avatar border-2 border-white rounded-full w-[32px] h-[32px] relative -mr-2"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face&auto=format" 
                    alt="Woman 1"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face&auto=format';
                    }}
                  />
                </div>
                <div 
                  className="waitlist-avatar border-2 border-white rounded-full w-[32px] h-[32px] relative -mr-2"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face&auto=format" 
                    alt="Woman 2"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face&auto=format';
                    }}
                  />
                </div>
                <div 
                  className="waitlist-avatar border-2 border-white rounded-full w-[32px] h-[32px] relative -mr-2"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format" 
                    alt="Woman 3"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face&auto=format';
                    }}
                  />
                </div>
                <div 
                  className="waitlist-avatar bg-[#f8b8b6] border-2 border-white rounded-full w-[32px] h-[32px] flex items-center justify-center"
                >
                  <p 
                    className="waitlist-avatar-text font-medium text-[10px] text-white"
                    style={{ 
                      fontFamily: 'var(--font-geist)'
                    }}
                  >
                    48
                  </p>
                </div>
              </div>

              {/* Form Title */}
              <div className="flex flex-col gap-1 items-start text-black">
                <p 
                  className="font-semibold text-base"
                  style={{ fontFamily: 'var(--font-geist)' }}
                >
                  Join the waitlist
                </p>
                <p 
                  className="font-normal text-sm"
                  style={{ fontFamily: 'var(--font-geist)', color: 'rgba(0,0,0,0.7)' }}
                >
                  Drop your number to get notified!
                </p>
              </div>

              {/* Form Inputs */}
              <div className="waitlist-inputs-wrapper flex gap-2.5 items-start w-full">
                <div 
                  className="waitlist-input-container flex items-center flex-1"
                  style={{
                    display: 'flex',
                    width: '352.626px',
                    padding: 'var(--space-sm, 8px) var(--spacing-0, 0)',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    borderRadius: 'var(--12, 12px)',
                    border: '1px solid var(--Border-Primary-color-border-primary-default, #D1D5DB)',
                    background: 'var(--BG-background-defualt-light, #FFF)',
                    boxShadow: '0 1px 2px 0 rgba(18, 18, 23, 0.05)'
                  }}
                >
                  <div ref={dropdownRef} className="relative flex items-center pl-2 pr-0 py-0">
                    {/* Custom Dropdown Button */}
                    <div 
                      className="country-dropdown-button flex items-center gap-0.5 cursor-pointer hover:bg-gray-50 rounded px-0.5 py-0 transition-colors duration-200"
                      onClick={toggleDropdown}
                      style={{ 
                        fontFamily: 'var(--font-geist)',
                        color: '#030712',
                        lineHeight: '16px',
                        marginLeft: '6px',
                        minWidth: '45px',
                        maxWidth: '60px',
                      }}
                    >
                      <span className="text-xs">{selectedCountry?.flag}</span>
                      <span className="font-normal text-xs">{selectedCountryCode}</span>
                      <svg 
                        className={`w-2.5 h-2.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div 
                        className="country-dropdown absolute top-full left-0 mt-0.5 bg-white border border-gray-200 rounded shadow-lg z-50 max-h-32 overflow-hidden"
                        style={{ 
                          minWidth: '200px',
                          maxWidth: '260px',
                          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)'
                        }}
                      >
                        {/* Search Input */}
                        <div className="p-1 border-b border-gray-100">
                          <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-1 py-0.5 text-xs border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                            style={{ fontFamily: 'var(--font-geist)', height: '24px' }}
                            autoFocus
                          />
                        </div>

                        {/* Countries List */}
                        <div className="max-h-20 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <div
                                key={`${country.code}-${country.country}`}
                                className={`flex items-center gap-1 px-1.5 py-0.5 cursor-pointer hover:bg-blue-50 transition-colors duration-150 ${
                                  selectedCountryCode === country.code ? 'bg-blue-100' : ''
                                }`}
                                onClick={() => handleCountrySelect(country.code)}
                                style={{ minHeight: '20px' }}
                              >
                                <span className="text-xs">{country.flag}</span>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-xs text-gray-900 truncate" style={{ fontFamily: 'var(--font-geist)', lineHeight: '16px' }}>
                                    {country.country}
                                  </div>
                                </div>
                                <span className="text-xs font-mono text-gray-600">{country.code}</span>
                              </div>
                            ))
                          ) : (
                            <div className="px-1.5 py-0.5 text-xs text-gray-500 text-center" style={{ fontFamily: 'var(--font-geist)' }}>
                              No countries found
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start px-3 py-0 flex-1">
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      className="w-full outline-none border-none bg-transparent text-sm"
                      style={{ 
                        color: phoneNumber ? '#030712' : 'var(--Text-Secondary-color-text-secondary-disabled, #94A3B8)',
                        fontFamily: 'Lato, sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        paddingLeft: '20px',
                        lineHeight: '20px'
                      }}
                    />
                  </div>
                </div>
                
                <div 
                  className={`waitlist-button flex gap-1 items-center justify-center transition-all duration-200 ${
                    isLoading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:scale-105'
                  }`}
                  onClick={isLoading ? undefined : handleSubmit}
                  style={{ 
                    display: 'flex',
                    height: '48px',
                    padding: '12px 20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    borderRadius: '8.797px',
                    background: isLoading ? '#9CA3AF' : 'var(--Brand-color, #6D597A)',
                    boxShadow: isLoading ? 'none' : '0 2px 8px rgba(109, 89, 122, 0.3)'
                  }}
                >
                  <div className="flex gap-2 items-center justify-center px-0.5 py-0">
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <p 
                        className="font-medium whitespace-nowrap"
                        style={{ 
                          fontFamily: 'var(--font-geist)',
                          color: '#ffffff',
                          fontSize: '15.662px',
                          lineHeight: '22.374px',
                          fontWeight: '500'
                        }}
                      >
                        Get Notified
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {/* {error && (
                <div className="w-full">
                  <p 
                    className="text-red-500 text-sm text-center"
                    style={{ fontFamily: 'var(--font-geist)' }}
                  >
                    {error}
                  </p>
                </div>
              )} */}
            </div>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="flex flex-col items-center gap-5 text-center w-full" style={{ marginTop: '40px' }}>
              <div 
                className="waitlist-success-title text-black"
                style={{ 
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'var(--font-geist)',
                  fontSize: '36px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '1.2',
                }}
              >
                {isAlreadyAdded ? (
                  <>
                    You are already<br/>
                    on our <span style={{ color: '#6d597a' }}>waitlist!</span>
                  </>
                ) : (
                  <>
                    You have been added<br/>
                    to our <span style={{ color: '#6d597a' }}>waitlist!</span>
                  </>
                )}
              </div>
              
              <p 
                className="waitlist-success-description"
                style={{ 
                  color: 'rgba(0, 0, 0, 0.60)',
                  textAlign: 'center',
                  fontFamily: 'var(--font-geist)',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '1.5',
                }}
              >
                {isAlreadyAdded ? (
                  <>
                    Great to see you again! You'll be the first<br/>
                    to know when we are ready!
                  </>
                ) : (
                  <>
                    Thanks you for joining. you 'll be the first<br/>
                    to know when we are ready!
                  </>
                )}
              </p>

              {/* Avatar Group */}
              <div className="flex items-center justify-center" style={{ marginTop: '10px' }}>
                <div 
                  className="waitlist-success-avatar border-2 border-white rounded-full w-[48px] h-[48px] relative -mr-3"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&fit=crop&crop=face&auto=format" 
                    alt="Woman 1"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                </div>
                <div 
                  className="waitlist-success-avatar border-2 border-white rounded-full w-[48px] h-[48px] relative -mr-3"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face&auto=format" 
                    alt="Woman 2"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                </div>
                <div 
                  className="waitlist-success-avatar border-2 border-white rounded-full w-[48px] h-[48px] relative -mr-3"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face&auto=format" 
                    alt="Woman 3"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                </div>
                <div 
                  className="waitlist-success-avatar bg-[#f8b8b6] border-2 border-white rounded-full w-[48px] h-[48px] flex items-center justify-center"
                >
                  <p 
                    className="waitlist-success-avatar-text font-medium text-white"
                    style={{ 
                      fontFamily: 'var(--font-geist)',
                      fontSize: '14px'
                    }}
                  >
                    +{joinedCount - 3}
                  </p>
                </div>
              </div>

              <p 
                style={{ 
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'var(--font-geist)',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  marginTop: '5px'
                }}
              >
                You're not alone. {joinedCount}+ people joined
              </p>
            </div>
          </>
        )}

        {/* Social Media */}
        <div className="waitlist-social-container flex gap-3 items-center justify-center"
        >
          <p 
            className="waitlist-social-text font-normal text-black"
            style={{ 
              color: '#000',
              textAlign: 'center',
              fontFamily: 'var(--font-geist)',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal'
            }}
          >
            Follow us
          </p>
          <div className="flex gap-2 items-center">
            <div 
              className="waitlist-social-icon w-8 h-8 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61581520017859', '_blank')}
              style={{ background: '#1877F2' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            
            <div 
              className="waitlist-social-icon w-8 h-8 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
              onClick={() => window.open('https://www.instagram.com/eazypregnancy/', '_blank')}
              style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            
            <div 
              className="waitlist-social-icon w-8 h-8 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
              onClick={() => window.open('https://www.linkedin.com/company/eazypregnancy', '_blank')}
              style={{ background: '#0A66C2' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            
            <div 
              className="waitlist-social-icon w-8 h-8 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
              style={{ background: 'linear-gradient(to top, #20b038, #60d66a)' }}
              onClick={() => window.open('https://wa.me/919105885150', '_blank')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;