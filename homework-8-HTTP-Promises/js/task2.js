function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(42), 1000);
  })
}

let cash = {}

function getCash(param) {
	if(cash[param]) {
		console.log("Promise has been already resolved at least once.");
		if (Date.now()-cash["time"]<20000) {
			console.log("Result has been saved recently.")
			return cash[param];
		}
		else {
			console.log("Result has been saved long ago. Need to update.")
			cash["time"] = Date.now();
			return cash[param] = getData().then( result => {
				return result;
			})
		}
	}
	else {
		console.log("Call promise at first time.");
		cash["time"] = Date.now();
		return cash[param] = getData().then( result => {
			return result;
		})
	}
}


setInterval(function() {
  console.log(getCash("data"));
  console.log(cash);
}, 10000);
