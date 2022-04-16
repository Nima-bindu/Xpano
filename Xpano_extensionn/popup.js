let API_BASE_URL="http://127.0.0.1:5000"

document.addEventListener('DOMContentLoaded', function() {
    var scannerBtn = document.getElementById('scanner');
    scannerBtn.addEventListener('click', () => {
        verifyUrls();
    });
});
