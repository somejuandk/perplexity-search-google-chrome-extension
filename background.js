// Create the context menu item when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchPerplexity",
    title: "Search with Perplexity",
    contexts: ["selection"]
  });
});

// Handle the context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchPerplexity" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText);
    const url = `https://www.perplexity.ai/search?q=${query}`;
    chrome.tabs.create({ url });
  }
});
