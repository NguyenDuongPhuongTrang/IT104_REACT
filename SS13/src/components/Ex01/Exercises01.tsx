import { Component } from "react";

interface State{
    name: string;
}

export default class Exercises01 extends Component<{}, State>{
    constructor(props: {}){
        super(props)
        this.state = {
            name: "Nguyễn Dương Phương Trang"
        }
    }
    render(){
        return(
            <div><b>Họ và tên: {this.state.name}</b></div>
        )
    }
}