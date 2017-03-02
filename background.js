var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({
      path: "on.png",
      tabId:tab.id
    });
    chrome.browserAction.setBadgeText({
      text: "on",
      tabId: tab.id
    });
    chrome.tabs.executeScript(null, {
  		code:"document.body.parentNode.style.webkitFilter='grayscale(1)';"
  	});
  }
  else{
    chrome.browserAction.setIcon({
      path: "off.png",
      tabId:tab.id
    });
    chrome.browserAction.setBadgeText({
      text: "off",
      tabId: tab.id
    });
    chrome.tabs.executeScript(null, {
  		code:"document.body.parentNode.style.webkitFilter='';"
  	});
  }
});
