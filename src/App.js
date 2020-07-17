import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Adventure Bay City Employee Directory</Title>
        {this.state.employees.map(employee => (
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              occupation={employee.occupation}
              salary={employee.salary}
              catchphrase={employee.catchphrase}
            />
          ))};
      </Wrapper>
  )};
}

export default App;
