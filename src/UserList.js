import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="card__cover">
        <h2 className="app__heading">
          <span className="app__heading-span">Client's Portfolio</span>
        </h2>
      </div>
      {users.map((user) => (
        <div key={user.id}>
          <div className="artboard">
            <div className="card">
              <div className="card__side card__side--back">
                <div className="card__cover">
                  <h4 className="card__heading">
                    <span className="card__heading-span">Contact Card</span>
                  </h4>
                </div>
                <div className="card__details">
                  <ul>
                    <li>Phone: {user.phone} </li>
                    <li>Company: {user.company.name} </li>
                    <li>Activity field: {user.company.bs}</li>
                    <li>Website: www.{user.website} </li>
                    <li>Address: {user.address.street} </li>
                    <li>Apartment: {user.address.suite} </li>
                    <li>
                      City: {user.address.zipcode}, {user.address.city}{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--front">
                <div className="card__theme">
                  <div className="card__theme-box">
                    <p className="card__title">{user.name}</p>
                    <p className="card__subject">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserList;
