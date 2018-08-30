// recieves messages since it is always running in the background.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.todo == "showPageAction") {
		highLightIconInCurrentTab();
	}
});

function highLightIconInCurrentTab() {
	chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
		chrome.pageAction.show(tabs[0].id);
	});
}