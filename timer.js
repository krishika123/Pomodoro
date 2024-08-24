// timer.js
function initializeTimer() {
    console.log('Initializing timer');
    let time = 1500; // Default 25 minutes in seconds
    let timerInterval;
    const timerDisplay = document.getElementById('timer');

    function updateTimerDisplay() {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            if (time > 0) {
                time--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                alert("Time's up!");
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        time = 1500; // Reset to 25 minutes
        updateTimerDisplay();
    }

    function openSettings() {
        document.getElementById('settingsModal').style.display = 'block';
    }

    function closeSettings() {
        document.getElementById('settingsModal').style.display = 'none';
    }

    function saveSettings() {
        const pomodoroLength = parseInt(document.getElementById('pomodoroLength').value) || 25;
        const shortBreakLength = parseInt(document.getElementById('shortBreakLength').value) || 5;
        const longBreakLength = parseInt(document.getElementById('longBreakLength').value) || 15;

        time = pomodoroLength * 60; // Update the time to the new Pomodoro length
        updateTimerDisplay();

        closeSettings();
    }

    document.getElementById('startBtn')?.addEventListener('click', startTimer);
    document.getElementById('pauseBtn')?.addEventListener('click', pauseTimer);
    document.getElementById('resetBtn')?.addEventListener('click', resetTimer);
    document.getElementById('saveSettings')?.addEventListener('click', saveSettings);
    document.getElementById('closeSettings')?.addEventListener('click', closeSettings);

    updateTimerDisplay(); // Initialize timer display
}

// Make sure to load the script when necessary
document.addEventListener('DOMContentLoaded', () => {
    // Ensure initializeTimer is available
});
