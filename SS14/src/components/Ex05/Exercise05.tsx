import { Component } from "react";

type StateType = {
  id: string;
  name: string;
  price: number;
  number: number;
};

export default class Exercise05 extends Component<{}, StateType>{
    constructor(props: {}){
        super(props);
        this.state = {
            id: '',
            name: '',
            price: 0,
            number: 0,
        }
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
        ...this.state,
        [name]: name === 'price' || name === 'number' ? Number(value) : value,
        });
    };

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <h3>Thêm sản phẩm mới</h3>
                    <label htmlFor="id">Mã sản phẩm</label><br />
                    <input type="text" name="id" id="id" value={this.state.id} onChange={this.handleChange} /> <br />
                    <label htmlFor="name">Tên sản phẩm</label> <br />
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} /> <br />
                    <label htmlFor="price">Giá</label><br />
                    <input type="text" name="price" id="price" value={this.state.price} onChange={this.handleChange}/><br />
                    <label htmlFor="number">Số lượng</label><br />
                    <input type="number" name="number" id="number"value={this.state.number} onChange={this.handleChange} /><br />
                    <div className="btn">
                        <button>Đăng ký</button>     
                    </div>
                </div>
            </form>
            </>
        )
    }
}