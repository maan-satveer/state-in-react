import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        name: "Satveer",
        job: "Developer",
      },
      {
        name: "Simran",
        job: "Tester",
      },
      {
        name: "Suman",
        job: "Human Resources",
      },
      {
        name: "Manpreet",
        job: "Accountant",
      },
    ],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        ></table>
      </div>
    );
  }
}
export default App;
