chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.update(tabs[0].id, { url: "cfile:///C:/Users/dev.hn/Downloads/testing/newtab.html" });
});