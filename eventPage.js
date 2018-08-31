// recieves messages since it is always running in the background.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.todo == "showPageAction") {
		highLightIconInCurrentTab();
	} else if (request.todo == "amountGained") {
		// setVariable("amountGained", parseInt(request.amount));
		chrome.storage.sync.set({"amountGained": parseInt(request.amount)}, 
		function() {
			console.log("Done");
		});
	} else if (request.todo == "amountSpent") {
		// setVariable("amountSpent", parseInt(request.amount));
		chrome.storage.sync.set({"amountSpent": parseInt(request.amount)}, 
		function() {
			console.log("Done");
		});
	}
});

function highLightIconInCurrentTab() {
	chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
		chrome.pageAction.show(tabs[0].id);
	});
}

function setVariable(key, val) {
	chrome.storage.sync.set({key: val}, function() {
		alert(key + " is set to " + val);
	});
}
// this file will contain the logic to update the variable which will be used in
// popup.html