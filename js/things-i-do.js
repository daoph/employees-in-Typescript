function ready() {
    var tbodyCtrl = document.getElementById('thingTable');
    var theThings = [];
    var sleep = new Things(1, "Allowing the body to recover and rest", 60, 0);
    theThings.push(sleep);
    var fishing = new Things(2, "Catching fish", 2, 15);
    theThings.push(fishing);
    var eatOut = new Things(3, "Going somewhere to eat", 8, 25);
    theThings.push(eatOut);
    var workOut = new Things(4, "Maintain health", 15, 3);
    theThings.push(workOut);
    var onlineShop = new Things(5, "Buying random stuff", 3, 100);
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
var Things = (function () {
    function Things(order, desc, freq, spend) {
        this.trData = "<tr>";
        this.order = order;
        this.desc = desc;
        this.freq = freq;
        this.spend = spend;
    }
    return Things;
}());
;
