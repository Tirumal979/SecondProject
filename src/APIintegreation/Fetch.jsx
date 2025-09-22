import React, { useState , useEffect} from 'react'

const Fetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {setData(data);setLoading(false);
      })
     .catch((err) => {
        console.error('Fetch error:', err);
        setError(true);setLoading(false);
      });
  }, []); 
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching data.</h1>;
  }

  return (
     <div className='user'>
      {data.map((user) => (
        <div key={user.id} className='user-card'>
          <ul>
            <li>Id: {user.id}</li>
            <li>Name: {user.name}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Address: {user.address.street} {user.address.city} {user.address.zipcode}</li>
            <li>Phone: {user.phone}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Fetch