chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "talkToTally") {
        // Tally Prime (localhost:9000) को सीधे XML पोस्ट करना
        fetch("http://localhost:9000", {
            method: "POST",
            headers: { "Content-Type": "text/xml" },
            body: message.xmlData
        })
        .then(response => response.text())
        .then(data => sendResponse({ success: true, data: data }))
        .catch(error => sendResponse({ success: false, error: error.message }));
        
        return true; // Asynchronous response के लिए जरूरी है
    }
});
