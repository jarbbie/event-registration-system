import React, { useState, useEffect } from 'react';

function Attendees() {
  const [list, setList] = useState([]);

  const fetchAttendees = async () => {
    try {
      const response = await fetch("http://localhost:8000/data");
      const data = await response.json();
      setList(data);
    }
    catch (error) {
      console.error(error.message);
    }
  };

  useEffect( () => { fetchAttendees(); }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/data/${id}`, {
        method: "DELETE",
      });
      setList(list.filter(user => user.id !== id));
    }
    catch (error) {
      console.error(error.message);
    }
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