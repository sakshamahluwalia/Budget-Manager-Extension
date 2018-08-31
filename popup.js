// $("#amountSpent").val(2);
// $("#runningBalance").val(1);

$(function() {
	$('#Calculate').click(function() {
		chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {todo: "Calculate"});
		});
		chrome.storage.sync.get("amountSpent", function(result) {
			$("#amountSpent").val(result.amountSpent);
    	});
		chrome.storage.sync.get("amountGained", function(result) {
			$("#runningBalance").val(result.amountGained);
    	});
	});

});