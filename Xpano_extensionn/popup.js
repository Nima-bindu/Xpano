let API_BASE_URL="http://127.0.0.1:5000"

document.addEventListener('DOMContentLoaded', function() {
    var scannerBtn = document.getElementById('scanner');
    scannerBtn.addEventListener('click', () => {
        verifyUrls();
    });
});

const verifyUrls = () => {
    chrome.tabs.query( {currentWindow: true, active: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id, allFrames: true},
            files: ['script.js'],
        });

    })
}
