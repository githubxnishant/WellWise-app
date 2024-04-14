function redirectToHome() {
    window.location.href = "index.html";
};

function redirectToCommunity() {
    window.location.href = "community.html";
};

function redirectToEvents() {
    window.location.href = "events.html";
};

function redirectToDietTracker() {
    window.location.href = "diet.html";
};

function redirectToBytes() {
    window.location.href = "bytes.html";
};

function redirectToExperts() {
    window.location.href = "experts.html";
};

function signup() {
    window.location.href = "login.html";
};

document.getElementById('fadeButton').addEventListener('mouseover', function() {
    this.classList.add('active');
});

document.getElementById('fadeButton').addEventListener('mouseout', function() {
    this.classList.remove('active');
});

document.getElementById("bmi").addEventListener("click", function() {
    var promptValue = prompt("Enter Weight (in kg):");
    if (promptValue !== null) {
        prompt("Enter Height (in cms)");
    }
});

