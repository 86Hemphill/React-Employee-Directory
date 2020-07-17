import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Salary:</strong> {props.salary}
          </li>
          <li>
            <strong>Catchphrase:</strong> {props.catchphrase}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
