import React, { Component } from "react";
import employees from "./employees.json";
import "./App.css";

class App extends Component {

  state = {
        employees,
        filteredEmployees: employees
      };

  sortByName() {
    const sortedEmployees = this.state.employees.slice().sort((a, b) => {
      if(a.name > b.name) {
        return 1;
      } else if(a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    debugger;
    this.setState({ filteredEmployees: sortedEmployees });
  }

  render() {
    return (
      <div className="container table-responsive">
              <table className="table">
                <thead>
                  <tr className="table-primary">
                    <th scope="col"></th>
                    <th scope="col" onClick={this.sortByName.bind(this)}>Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Catchphrase</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filteredEmployees.map(employee => (
                    <tr key={employee.id}>
                      <td><img className="tableImg" src={employee.image}/></td>
                      <td>{employee.name}</td>
                      <td>{employee.title}</td>
                      <td>{employee.salary}</td>
                      <td>{employee.catchphrase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
    );
  }
}

export default App;
