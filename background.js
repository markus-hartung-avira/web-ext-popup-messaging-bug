console.log('Background');
chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  console.log('Background onMessage', data);
  sendResponse('blub');
});
