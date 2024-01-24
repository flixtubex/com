function copyPageLink() {
    var copyText = window.location.href;
    navigator.clipboard.writeText(copyText).then(function() {
        alert('Video share link copied to clipboard!');
    }).catch(function(err) {
        console.error('Unable to copy page link', err);
    });
}

 // Function to show the auto-playing image after 10 seconds
 function showImage() {
    document.getElementById('image-container').style.display = 'block';
}

// Function to close the auto-playing image after 12 seconds
function closeImage() {
    document.getElementById('image-container').style.display = 'none';
}

// Set timeouts for showing and closing the image
setTimeout(showImage, 0); // Show after 10 seconds
setTimeout(closeImage, 22000); // Close after 12 seconds


 // Function to update and display the reversed countdown
 function updateCountdown(seconds) {
    document.getElementById('countdown-container').innerText = seconds;
}

// Function to start the countdown
function startCountdown() {
    let seconds = 18;

    // Update the countdown every second
    const countdownInterval = setInterval(function () {
        updateCountdown(seconds);
        seconds--;

        // Stop the countdown after 12 seconds
        if (seconds < 0) {
            clearInterval(countdownInterval);
        }
    }, 900);
}

// Start the countdown after the page loads
window.onload = function () {
    startCountdown();
};




function toggleOptions() {
    var content = document.getElementById('optionsContent');
    content.style.display = 'block';
  }
    function  hidetoggleOptions() {
    var content = document.getElementById('optionsContent');
    content.style.display = 'none';
  }
