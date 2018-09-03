// This file will only be used to srape teh info. and send it forward to 
// eventPage.js to store the variables.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.todo = "Calculate") {
		var amountSpent = getValuesFromColumn(3);
		var amountGained = getValuesFromColumn(4);
		sendMessage("amountGained", parseFloat(amountGained));
		sendMessage("amountSpent", parseFloat(amountSpent));
	}
})


function getValuesFromColumn(columnNumber)  {
	// add logic to parse table and add amounts
	//Iterate all td's in 4th column
	var amount = 0;
	$('tbody tr td:nth-child(' + columnNumber + ')').each( function(){
	   //add item to array
	   if ($(this).text().includes("$")) {
	   		// console.log( $(this)[0].innerText.valueOf() + " and amount is: " + amount );
	   		amount = parseFloat(amount) + parseFloat($(this)[0].innerText.substring(1).replace(",", ""));
	   }
	});
	return amount;
}

sendMessage("showPageAction");

//sending a mssg to eventpage from content
function sendMessage(title, data) {
	chrome.runtime.sendMessage({todo: title, amount: data});
}