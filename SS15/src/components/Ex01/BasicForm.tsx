import { Component } from 'react'

type State = {
    email: string;
}

export default class BasicForm extends Component<{}, State> {
    constructor(props: {}){
        super(props);
        this.state = {
            email: ''
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({
            email: event.target.value
        });
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
        <>
            <h1>Form</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label><br />
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        </>
        )
    }
}
