import { Component } from "react";

interface State{
    theme: string;
    language: string;
}

export default class Ex07 extends Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
            theme : "light",
            language: "english"
        }
    }
    render(){
        if (this.state.theme === "light") {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
        return (
            <>
            {this.state.theme === "light" && this.state.language === "english"? 
            <div>
                <h1>Nền: Sáng</h1>
                <h1>Ngôn ngữ: Tiếng anh</h1>
            </div>
            : 
            <div>
                <h1>Nền: Tối</h1>
                <h1>Ngôn ngữ: Tiếng việt</h1>
            </div>}
            </>
        )
    }
}