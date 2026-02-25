// State Management
let currentScreen = 'landing';

// Screen Mapping
const screens = {
  'landing': 'landing-screen',
  'success': 'success-screen',
  'gift1': 'gift1-screen',
  'gift2': 'gift2-screen',
  'gift3': 'gift3-screen'
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
  showScreen('landing');
});

/**
 * Initialize all event listeners
 */
function initializeEventListeners() {
  // Landing Screen
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  
  yesBtn.addEventListener('click', function() {
    showScreen('success');
  });

  noBtn.addEventListener('mouseover', function(e) {
    moveButtonRandomly(e.target);
  });

  // Success Screen - Gift Buttons
  const giftButtons = document.querySelectorAll('.gift-button');
  giftButtons.forEach(button => {
    button.addEventListener('click', function() {
      const giftNum = this.getAttribute('data-gift');
      openModal(`modal-gift${giftNum}`);
    });
  });

  // Back Buttons
  const backButtons = document.querySelectorAll('.back-button');
  backButtons.forEach(button => {
    button.addEventListener('click', function() {
      showScreen('success');
    });
  });

  // Restart Button
  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', function() {
      showScreen('landing');
    });
  }

  // Close modals when clicking outside
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal(this.id);
      }
    });
  });
}

/**
 * Show a specific screen and hide others
 * @param {string} screenName - The name of the screen to show
 */
function showScreen(screenName) {
  // Hide all screens
  Object.values(screens).forEach(screenId => {
    const screen = document.getElementById(screenId);
    if (screen) {
      screen.classList.remove('active');
    }
  });

  // Show the selected screen
  const screenId = screens[screenName];
  if (screenId) {
    const screen = document.getElementById(screenId);
    if (screen) {
      screen.classList.add('active');
      currentScreen = screenName;
      
      // Generate heart particles for success screen
      if (screenName === 'success') {
        generateHeartParticles();
      }
    }
  }
}

/**
 * Open a modal
 * @param {string} modalId - The ID of the modal to open
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close a modal
 * @param {string} modalId - The ID of the modal to close
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  }
}

/**
 * Move the "No" button to a random position
 * @param {HTMLElement} button - The button element to move
 */
function moveButtonRandomly(button) {
  const randomX = (Math.random() - 0.5) * 300;
  const randomY = (Math.random() - 0.5) * 200;

  // Animate the button to the new position
  button.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
  button.style.transform = `translate(${randomX}px, ${randomY}px)`;

  // Reset after animation
  setTimeout(() => {
    button.style.transition = 'transform 0.3s ease';
  }, 600);
}

// Optional: Clear the transform on mouse leave for smooth reset
document.addEventListener('mousemove', function(e) {
  const noBtn = document.getElementById('no-btn');
  if (noBtn && currentScreen === 'landing') {
    const rect = noBtn.getBoundingClientRect();
    const distance = Math.sqrt(
      Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
      Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
    );

    // If mouse moves far enough away, reset button position
    if (distance > 200) {
      noBtn.style.transform = 'translate(0, 0)';
    }
  }
});

/**
 * Generate heart particles for success screen
 */
function generateHeartParticles() {
  const successScreen = document.getElementById('success-screen');
  
  // Clear existing particles
  const existingParticles = successScreen.querySelectorAll('.heart-particle');
  existingParticles.forEach(particle => particle.remove());
  
  // Create 30 falling hearts
  const particleCount = 30;
  const hearts = ['♥', '❤'];
  const colors = ['white', 'pink'];
  const swayAnimations = ['sway1', 'sway2', 'sway3'];
  
  for (let i = 0; i < particleCount; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle ' + colors[Math.floor(Math.random() * colors.length)];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Random horizontal position
    const leftPosition = Math.random() * 100;
    heart.style.left = leftPosition + '%';
    heart.style.top = (Math.random() * -100) + 'px';
    
    // Random duration and delay
    const duration = 6 + Math.random() * 4; // 6-10 seconds
    const delay = Math.random() * 2; // 0-2 seconds delay
    const swayAnimation = swayAnimations[Math.floor(Math.random() * swayAnimations.length)];
    
    heart.style.animation = `fallAndSway ${duration}s linear ${delay}s infinite, ${swayAnimation} ${2 + Math.random()}s ease-in-out ${delay}s infinite`;
    heart.style.opacity = (0.3 + Math.random() * 0.4).toString();
    
    successScreen.appendChild(heart);
  }
  
  // Continuously add new particles every 1 second
  let particleInterval = successScreen.getAttribute('data-particle-interval');
  if (particleInterval) {
    clearInterval(parseInt(particleInterval));
  }
  
  particleInterval = setInterval(() => {
    // Check if success screen is still active
    if (!successScreen.classList.contains('active')) {
      clearInterval(parseInt(particleInterval));
      successScreen.removeAttribute('data-particle-interval');
      return;
    }
    
    const currentParticles = successScreen.querySelectorAll('.heart-particle').length;
    if (currentParticles < particleCount + 5) {
      const heart = document.createElement('div');
      heart.className = 'heart-particle ' + colors[Math.floor(Math.random() * colors.length)];
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      
      const leftPosition = Math.random() * 100;
      heart.style.left = leftPosition + '%';
      heart.style.top = (Math.random() * -50) + 'px';
      
      const duration = 6 + Math.random() * 4;
      const swayAnimation = swayAnimations[Math.floor(Math.random() * swayAnimations.length)];
      
      heart.style.animation = `fallAndSway ${duration}s linear 0s, ${swayAnimation} ${2 + Math.random()}s ease-in-out 0s infinite`;
      heart.style.opacity = (0.3 + Math.random() * 0.4).toString();
      
      successScreen.appendChild(heart);
    }
  }, 1000);
  
  successScreen.setAttribute('data-particle-interval', particleInterval);
}
