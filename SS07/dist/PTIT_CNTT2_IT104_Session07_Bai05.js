"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login(pass) {
        if (pass === this.password) {
            this.isLogin = true;
        }
        else {
            console.log(`Sai mật khẩu`);
        }
    }
    logout() {
        if (this.isLogin) {
            console.log(`Đăng xuất thành công`);
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    status = "active";
    constructor(id, userName, password, isLogin, role, status = "active") {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login(pass) {
        if (this.status == "active") {
            super.login(pass);
            if (this.isLogin) {
                console.log("Đăng nhập thành công");
            }
        }
        else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
let acc1 = new userAcc(1, "trang", "0610", false, "user", "active");
let acc2 = new userAcc(2, "ptr", "0610", false, "user", "banned");
acc1.login("0610");
acc2.login("11");
acc1.logout();
acc2.login("0610");
