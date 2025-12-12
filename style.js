// Function to launch confetti from different origins
function launchConfetti(originX, color) {
    // This function relies on the external canvas-confetti library loaded in index.html
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

// --- Runs when the user "blows" the candle (taps preloader) ---
function blowCandle() {
    // 1. Run the confetti animation
    runImpressiveConfetti();

    // 2. Hide the pre-loader and show the main content
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }, 200);
}

// --- Toggles the visibility of the card content ---
function toggleReveal(cardElement) {
    // Select the content div and the hint paragraph within the clicked card
    const revealContent = cardElement.querySelector('.reveal-content');
    const hintParagraph = cardElement.querySelector('p:not(.reveal-content p)');

    // Toggle the 'hidden' class to show/hide the content
    revealContent.classList.toggle('hidden');

    // Update the text to guide the user
    if (revealContent.classList.contains('hidden')) {
        hintParagraph.textContent = "Tap to reveal! (Click me)";
        hintParagraph.style.opacity = '1';
    } else {
        hintParagraph.textContent = "Click to hide.";
        hintParagraph.style.opacity = '0.5';
    }
}