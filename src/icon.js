if (window.matchMedia('(prefers-color-scheme: dark)')) {
    chrome.runtime.sendMessage({type: "change-icon", theme: "dark"});
} else {
    chrome.runtime.sendMessage({type: "change-icon", theme: "light"});
}
