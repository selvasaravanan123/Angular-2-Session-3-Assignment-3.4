abstract class Department
{
	public name:string;
	constructor(name)
	{	
		this.name = name;
	}
	printName():void
	{
		console.log("Department Name:" + this.name);
	}
	abstract printMeeting(): void;
}
class AccountingDepartment extends Department
{
	constructor(name:string="Accounting")
	{
		super(name);
	}
	printName():void
	{
		super.printName();
	}
	printMeeting():void
	{
		console.log("This is a Account Depatment meeting...");
	}
}
class ITDepartment extends Department {
	constructor(name: string = "Information Technology") {
		super(name);
	}
	printName(): void {
		super.printName();
	}
	printMeeting(): void {
		console.log("This is a IT Depatment meeting...");
	}
}
class BiologyDepartment extends Department {
	constructor(name: string = "Biology") {
		super(name);
	}
	printName(): void {
		super.printName();
	}
	printMeeting(): void {
		console.log("This is a Biology Depatment meeting...");
	}
}
let acc = new AccountingDepartment();
acc.printName();
acc.printMeeting();

let it = new ITDepartment();
it.printName();
it.printMeeting();

let bio = new BiologyDepartment();
bio.printName();
bio.printMeeting();