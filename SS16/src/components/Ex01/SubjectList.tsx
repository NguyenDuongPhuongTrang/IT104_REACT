import { Component } from 'react'
export default class SubjectList extends Component {
    subject: string[]=["Toán", "Văn", "Anh", "Hoá", "Sinh"];
  render() {
    return (
      <div>
        <h2>Danh sach mon hoc</h2>
        {this.subject.map((subject, index)=>(
            <div key={index}>
                {subject}
            </div>
        ))}
      </div>
    )
  }
}