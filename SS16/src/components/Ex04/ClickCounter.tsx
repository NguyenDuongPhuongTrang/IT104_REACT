import React, { Component } from 'react'

type stateTye={
  count:number
}
export default class ClickCounter extends Component<object, stateTye> {
  constructor(props:object){
    super(props)
    this.state = {
      count: 0
    };
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    this.setState((prveState)=>({
      count: prveState.count+1
    }));
  }
  render() {
    return (
      <>
        <form>
          <p>count: {this.state.count}</p>
          <button onClick={this.handleClick}>clickMe</button>
        </form>
      </>
    )
  }
}