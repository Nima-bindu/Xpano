let API_BASE_URL="https://gmail.googleapis.com"

document.addEventListener('DOMContentLoaded', function() {
    var scannerBtn = document.getElementById('scanner');
    scannerBtn.addEventListener('click', () => {
        verifyUrls();
    });
});
