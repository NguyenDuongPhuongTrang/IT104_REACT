import { Component } from "react";

interface State{
    name: string;
}

export default class ChangeState extends Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
            name: "Học code để đi làm"
        }
    }

    handleClick = () =>{
        this.setState ({name: "Học code sẽ thành công. Cố lên!!"})
    }

    shouldComponentUpdate() {
        return false;
    }

    render(){
        return (
            <>
                <h2>Company: {this.state.name}</h2>
                <button onClick={this.handleClick}>Change state</button>
            </>
        )
    }
}