import { Component } from "react";

interface State{
    id: number;
    name: string;
    date: string;
    add: string;
}

export default class Exercises01 extends Component<{}, State>{
    constructor(props: {}){
        super(props)
        this.state = {
            id: 1,
            name: "Nguyễn Dương Phương Trang",
            date: "06/10/2006",
            add: "Văn Quán, Hà Đông"
        }
    }
    render(){
        return(
            <>
            <div><h3>Thông tin cá nhân</h3></div>
            <div>Id: {this.state.id}</div> <br />
            <div>Tên: {this.state.name}</div> <br />
            <div>Ngày sinh: {this.state.date}</div> <br />
            <div>Địa chỉ: {this.state.add}</div>
            </>
        )
    }
}