import { Component } from "react";

class Calculation extends Component{
    addition(a: number,b: number){
        return <>
            {a} + {b} = {a + b}
        </>;
    }
    subtraction(a: number, b: number){
        return <>
            {a} - {b} = {a - b}
        </>;
    }
    multiplication(a: number, b: number){
        return <>
            {a} * {b} = {a * b}
        </>;
    }
    division(a: number, b: number){
        return <>
            {a} / {b} = {a / b}
        </>;
    }
    render(){
        return <>
            <h2>Danh sách kết quả</h2>
            <ul>
                <li>{this.addition(10,10)}</li>
                <li>{this.subtraction(10,10)}</li>
                <li>{this.multiplication(10,10)}</li>
                <li>{this.division(10,10)}</li>
            </ul>
        </>
    }
}

export default Calculation