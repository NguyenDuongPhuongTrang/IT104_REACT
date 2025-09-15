import { Component } from 'react'

interface State{
    second: number;
}

export default class Counter extends Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
            second: 0
        }
    }
    componentDidMount(): void {
        setInterval(() => {
            this.setState({second: this.state.second + 1})
            if (this.state.second === 10) {
                this.setState({second: 0})
            }
        }, 1000);
    }
    render() {
    return (
      <div>Count: {this.state.second}</div>
    )
  }
}
