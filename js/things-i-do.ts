function ready() {

var tbodyCtrl = document.getElementById('thingTable')

let theThings: Things[] = [];
let sleep = new Things(1,"Allowing the body to recover and rest",60,0);
	theThings.push(sleep);
let fishing = new Things(2,"Catching fish",2,15);
	theThings.push(fishing);
let eatOut = new Things(3,"Going somewhere to eat",8,25);
	theThings.push(eatOut);
let workOut = new Things(4,"Maintain health",15,3);
	theThings.push(workOut);
let onlineShop = new Things(5,"Buying random stuff",3,100);
	theThings.push(onlineShop);
 console.log(theThings)

	for(let idx=0; idx < theThings.length; idx++){
		let thing = theThings[idx];
		let trData = "<tr>";
		let tdB = "<td>"
		let tdE = "</td>"
		trData += tdB + thing.order + tdE;
		trData += tdB + thing.desc + tdE;
		trData += tdB + thing.freq + tdE;
		trData += tdB + thing.spend + tdE;
		trData += "</tr>"

console.log(trData)
		
		tbodyCtrl.innerHTML += trData

	}





};




class Things {
order: number;
desc: string;
freq: number;
spend: number;

	constructor(order:number,desc:string,freq:number,spend:number){
			this.order = order;
			this.desc = desc;
			this.freq = freq;
			this.spend = spend;
	}
trData = "<tr>"
};