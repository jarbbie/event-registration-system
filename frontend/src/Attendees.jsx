import React, { useState } from 'react';

function Attendees() {
  const [list, setList] = useState([
    { id: 1, firstname: "John", lastname: "Doe", gender: "Male", age: 25, weight: 70, height: 175 } // Example data
  ]);

  const handleDelete = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Attendee List</h2>
      <table border="1">
        <thead>
          <tr><th>Name</th><th>Gender</th><th>Age</th><th>Weight</th><th>Height</th><th>Action</th></tr>
        </thead>
        <tbody>
          {list.map(user => (
            <tr key={user.id}>
              <td>{user.firstname} {user.lastname}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.weight}kg</td>
              <td>{user.height}cm</td>
              <td><button onClick={() => handleDelete(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendees;