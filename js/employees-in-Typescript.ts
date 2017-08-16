// import {Employee} from './employee'

function ready () {

	var tbodyCtrl = document.getElementById('employees');

let employees: Employee[] = [];
let phuc = new Employee ("1","Phuc",new Date(),"phuc@max.com","CEO",true,1000000);
employees.push(phuc);
let eric = new Employee ("2","Eric",new Date(),"eric@max.com","CIO",true,750000);
employees.push(eric)
let elisha = new Employee ("3","Elisha",new Date(),"elisha@max.com","COO",true,740000);
employees.push(elisha);
let long = new Employee ("4","Long",new Date(),"long@max.com","CFO",true,730000);
employees.push(long)
let kim = new Employee ("5","Kim",new Date(),"kim@max.com","CTO",true,720000);
employees.push(kim)
console.log(employees);

	for (let idx = 0; idx<employees.length; idx++) {
		let employee = employees[idx];
		let trD = "<tr>";
		trD += "<td>" + employee.id + "</td>";
		trD += "<td>" + employee.name + "</td>";
		trD += "<td>" + employee.dateOfHire.toDateString() + "</td>";
		trD += "<td>" + employee.email + "</td>";
		trD += "<td>" + employee.job + "</td>";
		trD += "<td>" + employee.active + "</td>";
		trD += "<td>" + employee.salary+ "</td>";

		tbodyCtrl.innerHTML += trD;



	}
};




class Employee {
	
// properties go here
id: string;
name:string;
dateOfHire: Date;
email: string;
job: string;
active: boolean;
salary: number; 
//constructor goes here
constructor(id:string,name:string,dateOfHire:Date,
			email:string,job:string,active:boolean,
			salary:number){
	this.id = id;
	this.name = name;
	this.dateOfHire = dateOfHire;
	this.email = email;
	this.job = job;
	this.active = active;
	this.salary = salary;
}
//functions go here
}