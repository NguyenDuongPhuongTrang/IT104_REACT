import { Component } from "react";

interface Users{
    id: number;
    name: string;
    age: number;
}

interface State{
    user: Users[];
}

export default class Exercises01 extends Component<{}, State>{
    constructor(props: {}){
        super(props)
        this.state = {
            user: [
                { id: 1, name: "Trang", age: 18},
                { id: 2, name: "Kiên", age: 20 },
                { id: 3, name: "Sơn", age: 17 }
            ]
        }
    }
    render(){
        return(
            <>
            <table border={1} style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.user.map((u) =>(
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </>
        )
    }
}