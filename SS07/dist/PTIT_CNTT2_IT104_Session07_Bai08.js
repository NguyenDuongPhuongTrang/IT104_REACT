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
        else if (money <= this.balance) {
            this.balance -= money;
            this.history.push(`Đã rút ${money}. Số dư tài khoản: ${this.balance}`);
            console.log(`Đã rút ${money}`);
        }
        else {
            console.log("Số dư tài khoản không đủ");
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
class CheckingAccount extends Account {
    overdraftLimit;
    debt;
    constructor(accountNumber, balance, history = [], status = "active", overdraftLimit, debt = 0) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
        this.debt = debt;
    }
    deposit(money) {
        super.deposit(money);
    }
    withdraw(money) {
        if (money > this.balance) {
            let lackMoney = money - this.balance;
            this.balance = 0;
            if (lackMoney <= this.overdraftLimit) {
                this.overdraftLimit -= lackMoney;
                this.debt += lackMoney;
                this.history.push(`Rút: ${money}. Tạm ứng: ${lackMoney}. Dư nợ: ${this.debt}. Số dư tài khoản: ${this.balance} `);
                console.log(`Đã tạm ứng ${lackMoney}. Số tiền tạm ứng còn lại: ${this.overdraftLimit}`);
            }
            else {
                console.log(`Số tiền muốn rút vượt quá số tiền có thể tạm ứng.`);
            }
        }
        else {
            this.balance -= money;
            this.history.push(`Đã rút ${money}. Số dư tài khoản: ${this.balance}`);
            console.log(`Đã rút ${money}`);
        }
    }
    showHistory() {
        super.showHistory();
    }
}
let acc = new CheckingAccount(1, 200, [], "active", 100);
acc.deposit(50);
acc.showHistory();
acc.withdraw(100);
acc.showHistory();
acc.withdraw(200);
acc.showHistory();
acc.withdraw(50);
acc.showHistory();
acc.withdraw(100);
