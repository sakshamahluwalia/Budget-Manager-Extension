// responsible for updating the view
$(function() {

	chrome.storage.sync.get(["amountSpent", "amountGained"], function(result) {
		if (result.amountSpent) {
			$("#amountSpent").val(result.amountSpent);
		}
		if (result.amountGained) {
			$("#amountGained").val(result.amountGained);
		}
	});

	$('#Calculate').click(function() {
		chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {todo: "Calculate"});
		});

		chrome.storage.sync.get(["amountSpent", "amountGained"], function(result) {
			$("#amountSpent").val(result.amountSpent);
			$("#amountGained").val(result.amountGained);
    	});
	});

});