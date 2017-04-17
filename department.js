var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Console Name:" + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name) {
        if (name === void 0) { name = "Accounting"; }
        return _super.call(this, name) || this;
    }
    AccountingDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("This is a Account Depatment meeting...");
    };
    return AccountingDepartment;
}(Department));
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(name) {
        if (name === void 0) { name = "Information Technology"; }
        return _super.call(this, name) || this;
    }
    ITDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    ITDepartment.prototype.printMeeting = function () {
        console.log("This is a IT Depatment meeting...");
    };
    return ITDepartment;
}(Department));
var BiologyDepartment = (function (_super) {
    __extends(BiologyDepartment, _super);
    function BiologyDepartment(name) {
        if (name === void 0) { name = "Biology"; }
        return _super.call(this, name) || this;
    }
    BiologyDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    BiologyDepartment.prototype.printMeeting = function () {
        console.log("This is a Biology Depatment meeting...");
    };
    return BiologyDepartment;
}(Department));
var acc = new AccountingDepartment();
acc.printName();
acc.printMeeting();
var it = new ITDepartment();
it.printName();
it.printMeeting();
var bio = new BiologyDepartment();
bio.printName();
bio.printMeeting();
