import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
// import books from '../data/books.json'

// class SearchForm extends Component {
//     state = {
//         search: {
//             keyword: '',
//         }
//     }

// handleInput = (e, keyValue) => {
//     this.searchState({
//         search: {
//             ...this.state.search, [keyValue]: keyValue == e.target.value
//         }
//     })
// }
// handleSearch = async (e) => {
//     e.preventDefault()
//     try {
//         let response = await fetch("", {
//         Method: 'GET',
//         body: JSON.stringify(this.state.search),
//         })
//         headers: {'content-type': 'application/json'}
//     } catch (error) {
//         console.log(err)
//     }
// }
//  render(){
//  
    function Input () { 
        return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      //  value={this.state.search}
    //    onChange={(e) => {
     //     e.preventDefault();
    //      console.log(e.target.value);
      //  }}
      />
      <Button variant="outline-secondary" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
}

export default Input;
