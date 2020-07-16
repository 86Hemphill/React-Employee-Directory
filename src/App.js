import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/FriendCard";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              occupation={employee.occupation}
              location={employee.location}
            />
          ))};
      </Wrapper>
  )};
}

export default App;
