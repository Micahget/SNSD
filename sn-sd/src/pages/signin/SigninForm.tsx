import React, { useState } from 'react';
// First we will import the API_ENDPOINT constant from the `config` folder
import { API_ENDPOINT } from '../../config/constants'
import { useNavigate } from 'react-router-dom';

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Then we will define the handle submit function
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }

      console.log('Sign-in successful');
      
      // After successful signin we have to redirect the user to the secured page. We will do that later.

      // Extract the response body as JSON data
      const data = await response.json();

      // after successful sign-in we will store the token in the local storage
      localStorage.setItem("authToken", data.auth_token); // localStorage is a browser API
      localStorage.setItem('userData', JSON.stringify(data.user)  ); // localStorage is a browser API
      console.log(data.auth_token);
      // navigate('/dashboard') 
      navigate("/dashboard/articles") // after successful sign-in we will redirect the user to the secured page


    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };

  // Then we will use the handleSubmit function with our form
  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign In</button>
    </form>
  );
};

export default SigninForm;