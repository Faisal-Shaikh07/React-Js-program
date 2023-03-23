class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    getpay() {
        return (`Amount to be paid: ${this.amount}.`);
    }
}

// let payment1 = new Payment(2500);

// console.log(payment1.getpay());

//UPI Payment:-
class UPI_Payment extends Payment {
    constructor(amount, UPI_Id) {
        super(amount);
        this.UPI_Id = UPI_Id;
    }
    getpay(){
        return(`Payment of amount ${this.amount} is paid through UPI Id ${this.UPI_Id}.`);
    }
}

let UPI1 = new UPI_Payment(2500,8484852328);
console.log(UPI1.getpay());

// Netbanking Payment:-
class Netbanking_Payment extends Payment{
    constructor(amount, Bank_Name,Login_Id){
        super(amount);
        this.Bank_Name = Bank_Name;
        this.Login_Id = Login_Id;
    }
    getpay(){
        return(`Payment of amount ${this.amount} is paid through NetBanking via ${this.Bank_Name} having Login ID:- ${this.Login_Id} `);
    }
}

let Netbank = new Netbanking_Payment(2500, 'Bank of Maharashtra', 12345);
console.log(Netbank.getpay());

// Cash:-

class Cash extends Payment{
    constructor(amount, notes){
        super(amount);
        this.notes = notes;
    }
    getpay(){
        return(`Payment of amount ${this.amount} is paid through cash by giving ${this.notes} notes of Rs.500`);
    }
}

let cash = new Cash(2500, 5);
console.log(cash.getpay());