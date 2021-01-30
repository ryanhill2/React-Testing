import React from "react";
import Button from "@material-ui/core/Button";


class Assets extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "",
      price: 0,
      other: [],
      APIstuff: []
    }
    this.changeMyName = this.changeMyName.bind(this);
    this.changeMyPrice = this.changeMyPrice.bind(this);
    this.myFun = this.myFun.bind(this);
    this.something = this.something.bind(this);
  }

  changeMyName(){
    this.setState({
      name: "Ryan"
    })
  }

  changeMyPrice(){
    this.setState({
      price: this.state.price+1
    })
  }

  myFun(data){
    this.setState({
      other: data
    })
  }

  componentDidMount() {
    fetch('http://localhost:8080/races')
      .then(response => response.json())
      .then((json) => {
        this.setState({
          APIstuff: json,
        });
      });
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => this.myFun(json))
  // }

  something(){
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
    };
    fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }
      render() {
    console.log(this.state.other.title)
        const data = {name1: "Kris", name2: "Kris"}
        let {APIstuff} = this.state
  return(
    <div>
      <h1>Assets</h1>
      <Button>Add Assets</Button>
      <h1>{this.state.name}</h1>
      <h1>{this.state.price}</h1>

      <Button onClick={this.changeMyName}>My name</Button>
      <Button onClick={this.changeMyPrice}>My price</Button>
      <Button onClick={this.something}>Something</Button>
      <h1>{this.state.other.title}</h1>
      <h1>{this.state.APIstuff.length}</h1>
      <h1>{APIstuff.length}</h1>
      {console.log(APIstuff)}
      {APIstuff.map((a, i) => (
        <div key={i}>
          <h1>{a.driverCode ? "HI" : "Bye"}</h1>
        </div>
          ))}

    </div>

    )
  }
}
export default Assets