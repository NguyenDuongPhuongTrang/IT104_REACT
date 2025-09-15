import { Component } from "react";

interface State{
    name: string;
}

export default class ChangeState extends Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
            name: "Rikkei Academy"
        }
    }

    handleClick = () =>{
        this.setState ((prevState) =>(
            {name: prevState.name === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy"}
        )) ;
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