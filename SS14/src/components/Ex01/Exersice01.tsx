import { Component } from "react";

interface State{
    userName: string;
}

export default class Exersice01 extends Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
            userName: "Phương Trang"
        }
    }
    render(){
        return (
            <>
            <h1>Tên: {this.state.userName}</h1>
            </>
        )
    }
}