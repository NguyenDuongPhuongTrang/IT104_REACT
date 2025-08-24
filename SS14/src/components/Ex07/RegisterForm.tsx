import React, { Component } from "react";

type State = {
    name: string;
    email: string;
    password: string;
    address: string;
    message: string;
};

export default class RegisterForm extends Component<{}, State> {
    private nameInputEl: HTMLInputElement | null = null;

    constructor(props: {}) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            address: "",
            message: "",
        };
    }

    setNameInputRef = (el: HTMLInputElement | null) => {
        this.nameInputEl = el;
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.value,
        } as Pick<State, keyof State>);
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, email, password, address } = this.state;

        if (!name || !email || !password) {
            this.setState({
                message: "Tên sinh viên, Email và Mật khẩu không được để trống",
            });
            return;
        }

        const data = localStorage.getItem("users");
        const users: Array<{ name: string; email: string; password: string; address: string }> =
            data ? JSON.parse(data) : [];

        const emailExists = users.some((u) => u.email === email);
        if (emailExists) {
            this.setState({ message: "Email không được phép trùng" });
            return;
        }

        users.push({ name, email, password, address });
        localStorage.setItem("users", JSON.stringify(users));

        this.setState(
            {
                name: "",
                email: "",
                password: "",
                address: "",
                message: "Đăng ký tài khoản thành công!",
            },
            () => {
                this.nameInputEl?.focus();
            }
        );
    };

    render() {
        const { name, email, password, address, message } = this.state;

        return (
            <div className="register-form">
                <h2>Đăng ký tài khoản</h2>

                {message && (
                    <p className={message.includes("thành công") ? "success" : "error"}>
                        {message}
                    </p>
                )}

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Tên sinh viên</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            ref={this.setNameInputRef}
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Địa chỉ</label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        );
    }
}
