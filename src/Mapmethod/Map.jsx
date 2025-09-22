import React from "react";
import './Map.css'

function Map() {
  const Data = [
    { ID: 1, Name: "sunny", Class: "A" },
    { ID: 2, Name: "johnny" },
    { ID: 3, Name: "danny", Class: "A" },
    { ID: 4, Name: "bunny" },
  ];
  return (
    <div >
        <table className="table">
        <thead className="table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            </tr>
          </thead>
          <tbody>
          {Data.map((x,i) => (
            <tr key={i}>
              <td>{x.ID}</td>
              <td>{x.Name}</td>
              <td>{x.Class|| 'No class'}</td>
            </tr>
          ))}
          </tbody>
      </table>
   </div>
      );
}

export default Map