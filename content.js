// HTML पेज से आने वाले Custom Events को सुनना
window.addEventListener("SendToTallyEvent", function(event) {
    const xmlPayload = event.detail.xml;
    
    // Background script को डेटा भेजना
    chrome.runtime.sendMessage({ action: "talkToTally", xmlData: xmlPayload }, function(response) {
        // वापस HTML पेज को रिस्पॉन्स भेजना
        const replyEvent = new CustomEvent("TallyResponseEvent", { detail: response });
        window.dispatchEvent(replyEvent);
    });
});
