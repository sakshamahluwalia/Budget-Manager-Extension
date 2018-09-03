// responsible for updating the view
$(function() {

	chrome.storage.sync.get(["amountSpent", "amountGained"], function(result) {
		if (result.amountSpent) {
			$("#amountSpent").val(parseInt(result.amountSpent));
		}
		if (result.amountGained) {
			$("#amountGained").val(parseInt(result.amountGained));
		}
	});

	$('#Calculate').click(function() {
		chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {todo: "Calculate"});
		});

		chrome.storage.sync.get(["amountSpent", "amountGained"], function(result) {
			var amountSpent = result.amountSpent;
			var amountGained = result.amountGained;
			var value = amountSpent - Math.floor(amountSpent);
			$("#amountSpent").val(parseInt(amountSpent));
			$("#amountGained").val(parseInt(amountGained.toFixed(0)));
			$("#amountSpentDecimal").text(value.toFixed(3).substring(1));
			var value = amountGained - Math.floor(amountGained);
			$("#amountGainedDecimal").val(value.toFixed(3).substring(1));
    	});
	});

});