import './style/btth.css'
import TodoItem from "./components/TodoItem";
import { Component } from 'react';

interface Todo{
  id: number;
  content: string;
  isDone: boolean;
}

interface StateType{
  todo: Todo[];
}

class App extends Component<{}, StateType>{
  constructor(props: {}){
    super(props)
    this.state = {
      todo: [
        {id: 1, content: "Công việc 1", isDone: true},
        {id: 2, content: "Công việc 2", isDone: true},
        {id: 3, content: "Công việc 3", isDone: true}
      ]
    }
  }
  render(){
    return (
      <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>TodoList App</title>
      <link rel="stylesheet" href="./style.css" />
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>📝 TodoList</h1>
          <p>Quản lý công việc hiệu quả</p>
        </div>
        {/* Input Section */}
        <div className="input-section">
          <div className="input-group">
            <input
              type="text"
              className="task-input"
              placeholder="Nhập công việc cần làm..."
              maxLength={100}
            />
            <button className="add-btn">➕ Thêm</button>
          </div>
          <div className="error-message">
            {/* Thông báo lỗi sẽ hiển thị ở đây */}
          </div>
        </div>
        {/* Empty State */}
        {
        this.state.todo.length === 0 
        ? 
          ( <div className="empty-state">
          <div className="empty-state-icon">📋</div>
          <div className="empty-state-text">Chưa có công việc nào</div>
          <div className="empty-state-subtext">
            Hãy thêm công việc đầu tiên của bạn!
          </div>
          </div> )
        : 
          ( <div className="todo-list">
            <TodoItem content='Công việc 1' isDone = {false}></TodoItem>
          </div> )
        }
        {/* Footer */}
        <div className="footer">
          <div className="task-counter">
            Đã hoàn thành: <span className="counter-number">2</span> /
            <span className="counter-number">6</span> công việc
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default App
