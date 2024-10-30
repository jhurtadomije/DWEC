








function checkColor(selectedColor) {
    if (selectedColor === correctColor) {
        displayMessage("Correct! You won!");
    } else {
        lives -= 1;
        setLives();
        displayMessage("Wrong! Try again.");
        if (lives === 0) {
            displayMessage("Game Over! The correct color was " + correctColor);
        }
    }
}

// Initialize game on page load
window.onload = startGame;
