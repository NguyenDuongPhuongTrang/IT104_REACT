import  { Component } from 'react';
interface ClockState {
  time: Date; 
}
class Clock extends Component<{}, ClockState> {
    
private timerID: number | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
componentDidMount() {
  this.timerID = window.setInterval(() => {
    this.setState({ time: new Date() });
  }, 1000);
}


  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    const { time } = this.state;
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
      <div >
        Thời gian hiện tại: {hours} : {minutes} : {seconds}
      </div>
    );
  }
}

export default Clock;