import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = () => {
  const {
      register: login,
      handleSubmit,
    } = useForm();


    const onSubmit = (data) => {
    const UserData = {
      email: data.email,
      password: data.password,
    };

    axios
      .post("http://localhost:3000/user/signin", UserData)
      .then((response) => {
        if (response.data){
          alert("Login successful!");
        }
        console.log(response.data);
        localStorage.setItem("messanger", JSON.stringify(response.data));
        window.location.href = "/";
      })
      .catch((error) => {
        if (error.response?.status === 409) {
          alert("User already exists!");
        } else if (error.response?.status === 400) {
          alert("Passwords do not match!");
        } else {
          alert("Something went wrong, please try again later.");
        }
        console.error("There was an error creating the user!", error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-black border-2 border-white text-white p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-white">
          <div>
            <label className="block text-sm text-white font-semibold mb-1">Email</label>
            <input
              type="email"
              {...login("email", { required: true })}
              required
              placeholder='john@example.com'
              className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black bg-white text-black transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-white font-semibold mb-1">Password</label>
            <input
              type="password"
              {...login("password", { required: true })}
              required
              placeholder='********'
              className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black bg-white text-black transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full border-2 border-white bg-black text-white font-semibold py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Login
          </button>
          <p className="text-center text-sm text-white/60 mt-4">
            Don’t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}; 

export default Login;
