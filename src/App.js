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
    this.setState({ filteredEmployees: sortedEmployees });
  }

  sortBySalary() {
    const sortedEmployees = this.state.employees.slice().sort((a, b) => {
      if (a.salary > b.salary) {
        return 1;
      } else if(a.salary < b.salary) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ filteredEmployees: sortedEmployees });
  }

  render() {
    return (
      <div className="container table-responsive">
              <table className="table">
                <thead>
                  <tr className="table-primary">
                    <th scope="col"></th>
                    <th scope="col" className="sort" onClick={this.sortByName.bind(this)}>Name</th>
                    <th scope="col">Title</th>
                    <th scope="col" className="sort" onClick={this.sortBySalary.bind(this)}>Salary</th>
                    <th scope="col">Catchphrase</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filteredEmployees.map(employee => (
                    <tr key={employee.id}>
                      <td className="align-middle"><img className="tableImg" src={employee.image}/></td>
                      <td className="align-middle">{employee.name}</td>
                      <td className="align-middle">{employee.title}</td>
                      <td className="align-middle">{employee.salary}</td>
                      <td className="align-middle">{employee.catchphrase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
    );
  }
}

export default App;
