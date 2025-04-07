window.addEventListener('load', () => {
    // Fading out the loading screen
    setTimeout(() => {
      const loadingScreen = document.getElementById("loading-screen");
      if (loadingScreen) {
        loadingScreen.style.opacity = "0";
        setTimeout(() => { loadingScreen.style.display = "none"; }, 500);
      }
    }, 1500);
  
    // Fading out the terminal screen
    setTimeout(() => {
      const terminalScreen = document.getElementById("terminal-screen");
      if (terminalScreen) {
        terminalScreen.style.opacity = "0";
        setTimeout(() => {
          terminalScreen.style.display = "none";
          document.body.style.overflowY = "auto"; // Allow scrolling after fading
        }, 500);
      }
    }, 3000);
  
    // Typewriter Effect Function
    const text = "Welcome to Baljit Panda's Website";
    const typewriterText = document.getElementById("typewriter");
  
    const typingDuration = 5000; // 5 seconds for the whole text
    const typingSpeed = typingDuration / text.length; // Calculate time between each character
  
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        typewriterText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);  // Adjust typing speed based on the calculated time
      }
    }
  
    typeWriter();  // Call the function to start the typewriter effect
  });
  