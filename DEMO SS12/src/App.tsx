// import Header from "./components/Header";
// import './style/app.css';
import ListItem from "./components/ListItem";
import { Component } from "react";

class App extends Component{
  
    render(){
      function handleClick(event: React.MouseEvent) {
      console.log(event);
    }
        return <>
        <h1 onClick={handleClick}>Demo Props</h1>
              <ul>
                <ListItem content = "Ptrang">
                  <h2>Nội dung bên trong ListItem</h2>
                </ListItem>
              </ul>
        </>
    }
}
export default App
