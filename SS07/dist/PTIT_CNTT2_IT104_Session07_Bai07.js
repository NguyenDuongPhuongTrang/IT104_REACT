"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    accountNumber;
    balance;
    history;
    status = "active";
    constructor(accountNumber, balance, history = [], status = "active") {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    deposit(money) {
        this.balance += money;
        this.history.push(`Đã nạp ${money}. Số dư tài khoản: ${this.balance}`);
        console.log(`Đã nạp ${money}`);
    }
    withdraw(money) {
        if (this.balance == 0) {
            console.log("Số dư hiện tại là 0. Rút thất bại");
        }
        else {
            this.balance -= money;
            this.history.push(`Đã rút ${money}. Số dư tài khoản: ${this.balance}`);
            console.log(`Đã rút ${money}`);
        }
    }
    showHistory() {
        if (this.history.length == 0) {
            console.log('Lịch sử giao dịch trống');
        }
        else {
            console.log('Lịch sử giao dịch:');
            this.history.forEach((his, i) => {
                console.log(`${i + 1}. ${his}`);
            });
        }
    }
}
class SavingAccount extends Account {
    interestRate;
    constructor(accountNumber, balance, history = [], status = "active", interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    deposit(money) {
        super.deposit(money);
    }
    withdraw() {
        if (this.balance == 0) {
            console.log("Số dư hiện tại là 0. Rút thất bại");
        }
        else {
            let amount = this.balance;
            this.balance = 0;
            this.history.push(`Đã rút ${amount}. Số dư tài khoản: ${this.balance}`);
            console.log("Đã rút toàn bộ số tiền trong tài khoản");
        }
    }
    showHistory() {
        super.showHistory();
    }
}
let acc = new Account(1, 100);
let acc2 = new Account(2, 0);
let acc3 = new SavingAccount(4, 200, [], "active", 10);
acc.deposit(10);
acc.withdraw(20);
acc.showHistory();
acc2.withdraw(10);
acc2.deposit(100);
acc2.showHistory();
acc3.deposit(20);
acc3.withdraw();
acc3.showHistory();
