let perfWatch = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    perfWatch[sender.tab.id] = message.essential || null;
});
