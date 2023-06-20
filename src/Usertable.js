import React, { useEffect, useState } from 'react';
import "./Usertable.css";

function Usertable() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='table-main'>
      <h1>User Table</h1>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map(person => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.firstName}</td>
                <td>{person.email}</td>
                <td>{person.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Usertable;
