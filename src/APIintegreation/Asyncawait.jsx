import React, { useEffect, useState} from 'react'

const Asyncawait = () => {
  const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message)
      }
    };
    fetchdata();
  }, []);

  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching data.</h1>;
  }

  const mouseIn = (id) => {
    setLoading(id)
  }

  const mouseOut = () => {
    setLoading(null)
  }
    
  return (
      <div className="container">
      <ul className="user-list">
        {data.map((user) => (
          <li
            key={user.id}
            className="user-item"
            onMouseEnter={() => mouseIn(user.id)}
            onMouseLeave={mouseOut}
          >
            {loading === user.id ? (
              <ul>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>
                  Address: {user.address.street}, {user.address.city}, {user.address.zipcode}
                </li>
                <li>Phone: {user.phone}</li>
              </ul>
            ) : (
              <h3>ID: {user.id}</h3>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Asyncawait