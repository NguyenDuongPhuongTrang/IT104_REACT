import Header from "./components/Header";
import './style/app.css';

function App() {
    let color = "red";
    let number = [1,2,3,4]
  return (
    <>
      <h1 className='blue-text'>demo</h1>
      <Header></Header>
      <h2 style = {{color: color}}>sơn bùi ngu {color}</h2>
      {number.map((num) => (
        <p key={num}>{num}</p>
      ))}
    </>
  )
}

export default App
