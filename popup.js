/*
 * On Firefox developer edition 51.0a2 the callback function for chrome.runtime.sendMessage
 * is not always called, especially when FF does not have the focus before clicking the
 * extension icon. It is not reproducable in 49.0.1
 */
console.log('Popup');

// Adding this doesn't make a difference so does not seem to be the same as
// https://bugzilla.mozilla.org/show_bug.cgi?id=1228044
// chrome.runtime.onMessage.addListener(() => {});

// Adding a timeout does fix the issue
// setTimeout(() => {
  chrome.runtime.sendMessage('test', (data) => {
    console.log('Popup sendMessage callback');
    document.getElementById('number').innerText = data;
  });
// }, 0);
