document.addEventListener('DOMContentLoaded', function() {
      // Create stars background
      createStars();
      
      // Form elements
      const form = document.getElementById('astroForm');
      const clearBtn = document.getElementById('clearBtn');
      const submitBtn = document.getElementById('submitBtn');
      const btnText = document.getElementById('btnText');
      const loadingIndicator = document.getElementById('loadingIndicator');
      
      // Result elements
      const emptyState = document.getElementById('emptyState');
      const resultState = document.getElementById('resultState');
      const badge = document.getElementById('badge');
      const zname = document.getElementById('zname');
      const zmeta = document.getElementById('zmeta');
      const traits = document.getElementById('traits');
      const lucky = document.getElementById('lucky');
      const lucky2 = document.getElementById('lucky2');
      const copyBtn = document.getElementById('copyBtn');
      const printBtn = document.getElementById('printBtn');
      const notification = document.getElementById('notification');
      const horoscopeSection = document.getElementById('horoscopeSection');
      const horoscopeText = document.getElementById('horoscopeText');
      const compatibilitySection = document.getElementById('compatibilitySection');
      const compatibilityList = document.getElementById('compatibilityList');
      
      // Zodiac data
      const zodiacData = {
        aries: {
          symbol: '♈',
          dates: 'March 21 - April 19',
          element: 'fire',
          rulingPlanet: 'Mars',
          traits: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic', 'Honest', 'Passionate'],
          luckyColor: 'Red',
          luckyNumber: '9',
          compatibility: ['Leo', 'Sagittarius', 'Gemini'],
          horoscope: "Today is a day for action, Aries. Your energy is high, so channel it into productive endeavors. Don't be afraid to take the lead in group situations."
        },
        taurus: {
          symbol: '♉',
          dates: 'April 20 - May 20',
          element: 'earth',
          rulingPlanet: 'Venus',
          traits: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible', 'Stable'],
          luckyColor: 'Green',
          luckyNumber: '6',
          compatibility: ['Virgo', 'Capricorn', 'Cancer'],
          horoscope: "Focus on stability today, Taurus. It's a good time to organize your finances or work on long-term projects. Your practical nature will serve you well."
        },
        gemini: {
          symbol: '♊',
          dates: 'May 21 - June 20',
          element: 'air',
          rulingPlanet: 'Mercury',
          traits: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Outgoing', 'Intelligent'],
          luckyColor: 'Yellow',
          luckyNumber: '5',
          compatibility: ['Libra', 'Aquarius', 'Aries'],
          horoscope: "Your communication skills are highlighted today, Gemini. It's a great time for networking, learning, or expressing your ideas. Stay curious and open-minded."
        },
        cancer: {
          symbol: '♋',
          dates: 'June 21 - July 22',
          element: 'water',
          rulingPlanet: 'Moon',
          traits: ['Tenacious', 'Highly imaginative', 'Loyal', 'Emotional', 'Sympathetic', 'Persuasive'],
          luckyColor: 'White',
          luckyNumber: '2',
          compatibility: ['Scorpio', 'Pisces', 'Taurus'],
          horoscope: "Emotions may run high today, Cancer. Trust your intuition in decision-making. It's a good time for self-care and connecting with loved ones."
        },
        leo: {
          symbol: '♌',
          dates: 'July 23 - August 22',
          element: 'fire',
          rulingPlanet: 'Sun',
          traits: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful', 'Humorous'],
          luckyColor: 'Gold',
          luckyNumber: '1',
          compatibility: ['Aries', 'Sagittarius', 'Gemini'],
          horoscope: "Your natural leadership shines today, Leo. Don't shy away from the spotlight. Your enthusiasm is contagious and can inspire others to action."
        },
        virgo: {
          symbol: '♍',
          dates: 'August 23 - September 22',
          element: 'earth',
          rulingPlanet: 'Mercury',
          traits: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical'],
          luckyColor: 'Green',
          luckyNumber: '5',
          compatibility: ['Taurus', 'Capricorn', 'Cancer'],
          horoscope: "Attention to detail is your strength today, Virgo. Use your analytical skills to solve problems. It's also a good day for health-related activities."
        },
        libra: {
          symbol: '♎',
          dates: 'September 23 - October 22',
          element: 'air',
          rulingPlanet: 'Venus',
          traits: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded', 'Social'],
          luckyColor: 'Pink',
          luckyNumber: '6',
          compatibility: ['Gemini', 'Aquarius', 'Leo'],
          horoscope: "Balance and harmony are important today, Libra. Your diplomatic skills will help resolve conflicts. It's a good time for partnerships and collaborations."
        },
        scorpio: {
          symbol: '♏',
          dates: 'October 23 - November 21',
          element: 'water',
          rulingPlanet: 'Pluto',
          traits: ['Brave', 'Passionate', 'Stubborn', 'A true friend'],
          luckyColor: 'Red',
          luckyNumber: '9',
          compatibility: ['Cancer', 'Pisces', 'Virgo'],
          horoscope: "Your intensity is a strength today, Scorpio. Dive deep into projects that require focus. Your determination will help you overcome obstacles."
        },
        sagittarius: {
          symbol: '♐',
          dates: 'November 22 - December 21',
          element: 'fire',
          rulingPlanet: 'Jupiter',
          traits: ['Generous', 'Idealistic', 'Great sense of humor'],
          luckyColor: 'Purple',
          luckyNumber: '3',
          compatibility: ['Aries', 'Leo', 'Aquarius'],
          horoscope: "Adventure calls today, Sagittarius. Seek out new experiences or learning opportunities. Your optimism will attract positive situations."
        },
        capricorn: {
          symbol: '♑',
          dates: 'December 22 - January 19',
          element: 'earth',
          rulingPlanet: 'Saturn',
          traits: ['Responsible', 'Disciplined', 'Self-control', 'Good managers'],
          luckyColor: 'Brown',
          luckyNumber: '8',
          compatibility: ['Taurus', 'Virgo', 'Pisces'],
          horoscope: "Your ambition is highlighted today, Capricorn. Focus on long-term goals and practical steps to achieve them. Your disciplined approach will pay off."
        },
        aquarius: {
          symbol: '♒',
          dates: 'January 20 - February 18',
          element: 'air',
          rulingPlanet: 'Uranus',
          traits: ['Progressive', 'Original', 'Independent', 'Humanitarian'],
          luckyColor: 'Blue',
          luckyNumber: '4',
          compatibility: ['Gemini', 'Libra', 'Sagittarius'],
          horoscope: "Innovation is your theme today, Aquarius. Don't be afraid to think outside the box. Your unique perspective can solve problems in creative ways."
        },
        pisces: {
          symbol: '♓',
          dates: 'February 19 - March 20',
          element: 'water',
          rulingPlanet: 'Neptune',
          traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise', 'Musical'],
          luckyColor: 'Sea Green',
          luckyNumber: '7',
          compatibility: ['Cancer', 'Scorpio', 'Capricorn'],
          horoscope: "Your intuition is strong today, Pisces. Pay attention to dreams and subtle signs. Creative pursuits and helping others will bring fulfillment."
        }
      };
      
      // Form submission
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        btnText.style.display = 'none';
        loadingIndicator.style.display = 'block';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
          calculateZodiac();
          
          // Hide loading state
          btnText.style.display = 'block';
          loadingIndicator.style.display = 'none';
          submitBtn.disabled = false;
        }, 800);
      });
      
      // Clear form
      clearBtn.addEventListener('click', function() {
        form.reset();
        emptyState.style.display = 'block';
        resultState.style.display = 'none';
        horoscopeSection.style.display = 'none';
        compatibilitySection.style.display = 'none';
      });
      
      // Copy summary
      copyBtn.addEventListener('click', function() {
        const name = document.getElementById('fname').value || 'User';
        const sign = zname.textContent;
        const element = zmeta.textContent.split(' • ')[0];
        
        const summary = `${name}'s Zodiac Sign:
        Sign: ${sign}
        Element: ${element}
        ${zmeta.textContent}
        Lucky Color: ${lucky.textContent.split(' • ')[1]}
        Lucky Number: ${lucky2.textContent.split(' • ')[1]}
        
        Generated by StellarYou Astrology Portal`;
        
        navigator.clipboard.writeText(summary).then(() => {
          showNotification('Summary copied to clipboard!');
        });
      });
      
      // Print result
      printBtn.addEventListener('click', function() {
        window.print();
      });
      
      // Calculate zodiac sign
      function calculateZodiac() {
        const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value);
        
        let zodiacSign = '';
        
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
          zodiacSign = 'aries';
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
          zodiacSign = 'taurus';
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
          zodiacSign = 'gemini';
        } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
          zodiacSign = 'cancer';
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
          zodiacSign = 'leo';
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
          zodiacSign = 'virgo';
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
          zodiacSign = 'libra';
        } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
          zodiacSign = 'scorpio';
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
          zodiacSign = 'sagittarius';
        } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
          zodiacSign = 'capricorn';
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
          zodiacSign = 'aquarius';
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
          zodiacSign = 'pisces';
        }
        
        if (zodiacSign) {
          displayZodiacResult(zodiacSign);
        }
      }
      
      // Display zodiac result
      function displayZodiacResult(sign) {
        const data = zodiacData[sign];
        
        // Update main display
        badge.textContent = data.symbol;
        zname.textContent = sign.charAt(0).toUpperCase() + sign.slice(1);
        zmeta.innerHTML = `${data.element.charAt(0).toUpperCase() + data.element.slice(1)} • Ruling planet: ${data.rulingPlanet}`;
        
        // Add element indicator
        const elementIndicator = document.createElement('span');
        elementIndicator.className = `element-indicator element-${data.element}`;
        elementIndicator.textContent = data.element.toUpperCase();
        zname.appendChild(elementIndicator);
        
        // Update traits
        traits.innerHTML = '';
        data.traits.forEach(trait => {
          const chip = document.createElement('div');
          chip.className = 'chip';
          chip.textContent = trait;
          traits.appendChild(chip);
        });
        
        // Update lucky info
        lucky.textContent = `Lucky color • ${data.luckyColor}`;
        lucky2.textContent = `Lucky number • ${data.luckyNumber}`;
        
        // Update horoscope
        horoscopeText.textContent = data.horoscope;
        horoscopeSection.style.display = 'block';
        
        // Update compatibility
        compatibilityList.innerHTML = '';
        data.compatibility.forEach((match, index) => {
          const item = document.createElement('div');
          item.className = 'compatibility-item';
          
          // Add compatibility level styling
          if (index === 0) {
            item.classList.add('compatibility-high');
          } else if (index === 1) {
            item.classList.add('compatibility-medium');
          } else {
            item.classList.add('compatibility-low');
          }
          
          item.textContent = match;
          compatibilityList.appendChild(item);
        });
        compatibilitySection.style.display = 'block';
        
        // Show result
        emptyState.style.display = 'none';
        resultState.style.display = 'flex';
      }
      
      // Show notification
      function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
          notification.classList.remove('show');
        }, 3000);
      }
      
      // Create stars background
      function createStars() {
        const starsContainer = document.getElementById('starsContainer');
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          
          // Random position and size
          const size = Math.random() * 3;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          
          // Random opacity
          star.style.opacity = Math.random() * 0.5 + 0.1;
          
          starsContainer.appendChild(star);
        }
      }
    });