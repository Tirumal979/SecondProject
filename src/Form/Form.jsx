import React, { useState } from 'react';


const Form = () => {
  const [data, setData] = useState({
    Username: "",
    Email: "",
    Password: ""
  });

  const change = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(data);

    setData({ Username:" ", Email:" ", Password:""})
  };


  return (
    <div className='forms'>
      <form onSubmit={submit} className='form'>
        <label>Username</label>
        <input type='text' name='Username' value={data.Username} onChange={change} />

        <label>Email</label>
        <input type='email' name='Email' value={data.Email} onChange={change} />

        <label>Password</label>
        <input type='password' name='Password' value={data.Password} onChange={change} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
