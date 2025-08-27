import  { Component } from 'react'

type loginStatus={
    isLogin: boolean
}
export default class Login extends Component<object,loginStatus> {
    constructor(props: object){
        super(props)
        this.state={
            isLogin: false
        }
    }
    togle = ()=>{
        this.setState((e)=>({
            isLogin: !e.isLogin
        }))
    }
  render() {
    const {isLogin} = this.state
    return (
      <div>
        {isLogin?<h3>Xin chao user</h3> : <h3>Vui long dang nhap de tiep tuc</h3>}
        <button onClick={this.togle}>{isLogin?"Dang xuat":"Dang nhap"}</button>
      </div>
    )
  }
}