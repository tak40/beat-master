// Function to play the kick sound
function playKick() {
    // Get the audio element by its ID
    const kick = document.getElementById("kickSound");
    
    // Reset the current time of the audio to ensure it plays from the start
    kick.currentTime = 0;
    
    // Play the audio
    kick.play();
}

// ... (existing playKick function) ...

function playSnare() {
    // Get the audio element for the ride sound by its ID
    const snare = document.getElementById("snareSound");

    // Reset the current time of the audio to ensure it plays from the start
    snare.currentTime = 0;

    // Play the audio
    snare.play();
}

function playHihat() {
    // Get the audio element for the ride sound by its ID
    const hihat = document.getElementById("hihatSound");
    
    // Reset the current time of the audio to ensure it plays from the start
    hihat.currentTime = 0;

    // Play the audio
    hihat.play();
}


// Add an event listener to the whole document for the "keydown" event
document.addEventListener("keydown", function(event) {
    // Check if the key pressed is "a"
    if (event.key === "a" || event.key === "A") {
        playKick();
    } else if (event.key === "s" || event.key === "S") {
        playSnare();
    } else if (event.key === "d" || event.key === "D") {
        playHihat();
    }
});
