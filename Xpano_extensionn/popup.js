function getData(){
    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
        chrome.scripting.executeScript(
            {
        target: {tabId: tabs[0].id, allFrames: true},
        files: ['content_scripts/script.js'],
        },
        );   
    });
}


document.addEventListener('DOMContentLoaded', function() {

        document.querySelector("#getData").addEventListener("click", () => {
            console.log("here")
            getData()
        })
});

