import { Component } from "react";

interface Book{
    id: number;
    content: string;
    title: string;
    author: string;
}

interface Props{
    book: Book;
}

export default class DetailPost extends Component<Props, {}>{
    render(){
        const { id, content, title, author } = this.props.book;
        return (
            <div>
                <p>Id: {id}</p>
                <p>Title: {title}</p>
                <p>Content: {content}</p>
                <p>Author: {author}</p>
            </div>
        )
    }
}