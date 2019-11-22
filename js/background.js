chrome.browserAction.setBadgeText({text: '10'});
chrome.browserAction.setBadgeBackgroundColor({color: 'black'}),

  chrome.browserAction.onmouseout = highlightHandler;

function highlightHandler (e) {
  // get the highlighted text
  var text = document.getSelection();
  // check if anything is actually highlighted
  if (text !== '') {
    // we've got a highlight, now do your stuff here
    doStuff(text);
  }
}

function doStuff (text) {
  alert(text);
}

chrome.tabs.onCreated.addListener(function () {
  // alert('onCreated');
});

chrome.tabs.onHighlighted.addListener(function () {
  // alert('onHighligh');
});
