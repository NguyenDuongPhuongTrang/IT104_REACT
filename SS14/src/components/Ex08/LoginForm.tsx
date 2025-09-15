import React, { Component } from "react";

type State = {
    email: string;
    password: string;
    message: string;
};

export default class LoginForm extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value,
        } as unknown as Pick<State, keyof State>);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ message: "Email và Mật khẩu không được để trống" });
            return;
        }

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            this.setState({ message: "Đăng nhập thành công" });
        } else {
            this.setState({ message: "Đăng nhập thất bại" });
        }
    };

    render() {
        return (
            <div className="login-container">
                <h2>Đăng nhập tài khoản</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Đăng nhập
                    </button>
                </form>
                {this.state.message && (
                    <p className="message">{this.state.message}</p>
                )}
                <p className="note">Form đăng nhập tài khoản</p>
            </div>
        );
    }
}
