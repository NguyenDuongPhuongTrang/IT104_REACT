import { Component } from 'react'
type stateTye = {
  isDarkMode: boolean
};
export default class ThemeSwitcher extends Component<object,stateTye> {
    constructor(props: object){
        super(props)
        this.state={
            isDarkMode: false
        }
    }
    handleChange = ()=>{
        this.setState((e)=>({
            isDarkMode: !e.isDarkMode
        }))
    }
  render() {
    const {isDarkMode} = this.state
    return (
      <>
        <div className={isDarkMode?"light":"dark"}>
          <h3>
            {isDarkMode ? (
              <h3 className="dark">☀️ Chế độ Tối đang bật</h3>
            ) : (
              <h3 className="light">🌛 Chế độ sáng đang bật</h3>
            )}
          </h3>
        </div>
        <button type="button" onClick={this.handleChange}>
            Chuyển Theme
          </button>
      </>
    );
  }
}