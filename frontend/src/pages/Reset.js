import  Axios  from 'axios';
import React, { useState } from 'react';
import MessageBox from '../component/MessageBox';

const Reset = () => {
    const [email,setEmail]= useState("");
    const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

    const submitHandler= async(e)=>{
        e.preventDefault();
		try {
			const url = `/api/password-reset`;
			const { data } = await Axios.post(url, { email });
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
    }
  return <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1> Veryfy mail</h1>
        </div>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {msg && <MessageBox variant="success">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
       
        <div>
          <label />
          <button className="primary" type="submit">
            send mail
          </button>
        </div>
       
      </form>
  </div>;
};

export default Reset;
