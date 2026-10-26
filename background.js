const TARGET = chrome.runtime.getURL("index.html");

const adalahNTP = u =>
  u && (u.startsWith("chrome://newtab") ||
        u === "chrome://new-tab-page/" ||
        u === "chrome://new-tab-page/");

// Tab baru dibuat → langsung belokkan ke halaman kita
chrome.tabs.onCreated.addListener(tab => {
  const u = tab.pendingUrl || tab.url;
  if (adalahNTP(u)) chrome.tabs.update(tab.id, { url: TARGET });
});

// Jaga-jaga: kalau URL berubah jadi NTP setelah tab dibuat
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url && adalahNTP(changeInfo.url)) {
    chrome.tabs.update(tabId, { url: TARGET });
  }
});