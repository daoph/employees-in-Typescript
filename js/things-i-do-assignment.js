var theThings = [];
function ready() {
    var tbodyCtrl = document.getElementById('thingTable');
    var sleep = new Thing(1, "Allowing the body to recover and rest", 60, 0);
    theThings.push(sleep);
    var fishing = new Thing(2, "Catching fish", 2, 15);
    theThings.push(fishing);
    var eatOut = new Thing(3, "Going somewhere to eat", 8, 25);
    theThings.push(eatOut);
    var workOut = new Thing(4, "Maintain health", 15, 3);
    theThings.push(workOut);
    var onlineShop = new Thing(5, "Buying random stuff", 3, 100);
    theThings.push(onlineShop);
    console.log(theThings);
    for (var idx = 0; idx < theThings.length; idx++) {
        var thing = theThings[idx];
        var trData = "<tr>";
        var tdB = "<td>";
        var tdE = "</td>";
        trData += tdB + thing.order + tdE;
        trData += tdB + thing.desc + tdE;
        trData += tdB + thing.freq + tdE;
        trData += tdB + thing.spend + tdE;
        trData += "</tr>";
        console.log(trData);
        tbodyCtrl.innerHTML += trData;
    }
}
;
var Thing = (function () {
    function Thing(order, desc, freq, spend) {
        this.order = order;
        this.desc = desc;
        this.freq = freq;
        this.spend = spend;
    }
    return Thing;
}());
;
function addThing() {
    var tbodyCtrl = document.getElementById('thingTable');
    console.log("begin addThing");
    var orderVal = document.getElementById('orderCtrl');
    var descVal = document.getElementById('descCtrl');
    var freqVal = document.getElementById('freqCtrl');
    var spendVal = document.getElementById('spendCtrl');
    console.log(orderVal.value);
    console.log(descVal.value);
    console.log(freqVal.value);
    console.log(spendVal.value);
    //constructing new object
    var newThing = new Thing(Number(orderVal.value), descVal.value, Number(freqVal.value), Number(spendVal.value));
    theThings.push(newThing);
    //creating table
    tbodyCtrl.innerHTML = "";
    for (var idx = 0; idx < theThings.length; idx++) {
        var thing = theThings[idx];
        var trData = "<tr>";
        var tdB = "<td>";
        var tdE = "</td>";
        trData += tdB + thing.order + tdE;
        trData += tdB + thing.desc + tdE;
        trData += tdB + thing.freq + tdE;
        trData += tdB + thing.spend + tdE;
        trData += "</tr>";
        console.log(trData);
        tbodyCtrl.innerHTML += trData;
    }
}
