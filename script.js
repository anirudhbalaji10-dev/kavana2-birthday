// Function to launch confetti from different origins
function launchConfetti(originX, color) {
    confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6, x: originX },
        colors: color,
        disableForReducedMotion: true
    });
}

// Function to run the full, impressive animation sequence
function runImpressiveConfetti() {
    launchConfetti(0.5, ['#FF69B4', '#FFD700', '#FFFFFF']);
    
    setTimeout(() => {
        launchConfetti(0.1, ['#ADD8E6', '#C0C0C0', '#FFFFFF']);
    }, 400);
    
    setTimeout(() => {
        launchConfetti(0.9, ['#FF0000', '#FF1493', '#F5F5DC']);
    }, 800);
}

// --- CORE FUNCTION: Executes the transition upon click on the pre-loader ---
function blowCandle() {
    // 1. Start the visual celebration
    runImpressiveConfetti();

    // 2. Hide the pre-loader and show the main content after a slight delay
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }, 200);
}

// --- Toggles the visibility of the card content (for photos and message) ---
function toggleReveal(cardElement) {
    const revealContent = cardElement.querySelector('.reveal-content');
    const hintParagraph = cardElement.querySelector('p:not(.reveal-content p)');

    revealContent.classList.toggle('hidden');

    // Update the hint text
    if (revealContent.classList.contains('hidden')) {
        hintParagraph.textContent = "Tap to reveal! (Click me)";
        hintParagraph.style.opacity = '1';
    } else {
        hintParagraph.textContent = "Click to hide.";
        hintParagraph.style.opacity = '0.5';
    }
}
