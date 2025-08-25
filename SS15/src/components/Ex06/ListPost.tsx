import { Component } from "react";

interface Book{
    id: number;
    content: string;
    title: string;
    author: string;
}

interface State{
    book: Book[];
}

export default class ListPost extends Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
            book : [
                {
                    id: 1,
                    title: "Tại sao nên học ReactJS",
                    content: "Học ReactJS để đi làm",
                    author: "David"
                },
                {
                    id: 2,
                    title: "Props trong ReactJS",
                    content: "Props giúp truyền dữ liệu từ component con xuống component cha",
                    author: "Linda"
                },
                {
                    id: 3,
                    title: "State trong ReactJS là gì?",
                    content: "State giúp lưu trữ trạng thái dữ liệu bên trong một component",
                    author: "David"
                }
            ]
        }
    }
    render(){
        return(
            <>
            <h1>Danh sách bài viết</h1>
            <div>
                {this.state.book.map((b) => (
                    <div>
                        <div>Id: {b.id}</div>
                        <div>Title: {b.title}</div>
                        <div>Content: {b.content}</div>
                        <div>Author: {b.author}</div>
                        <hr />
                    </div>
                ))}
            </div>
            </>
        )
    }
}