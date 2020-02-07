import React,  { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';


class Books extends Component {
  state = {
    books: []
  }
  componentWillMount(){
    axios.get('http://jsonplaceholder.typicode.com/users').then((response) => {
      this.setState({
        books: response.data
      })
    });
  }
render() {
  let books = this.state.books.map((book) => {
      return(
      <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.phone}</td>
              <td>{book.email}</td>
              <td>
                <Button color="success" size="sm" className="mr-2">Edit</Button>
                <Button color="danger" size="sm">Delete</Button>
              </td>
              </tr>
    )
  });
  return (
    <div className="container">
      
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {books}
            </tbody>
      </Table>
          </div>
  );
}
}
export default Books;
