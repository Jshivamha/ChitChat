import React from "react";
import { useForm } from "react-hook-form";
import api from "../utils/axios";
import { useAuth } from "../Context/AuthProvider";

const SignUp = () => {
  const { authUser, setauthUser } = useAuth(); 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const UserData = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    await api
      .post("/user/signup", UserData)
      .then((response) => {
        console.log(response.data);
        console.log(UserData);
        localStorage.setItem("messanger", JSON.stringify(response.data));
        console.log(response.data);
        setauthUser(response.data);

        window.location.href = "/login";
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
  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-black border-2 border-white text-white p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Sign Up
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 text-white"
        >
          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="w-full px-4 py-2 rounded-lg border bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.fullName && (
              <span className="text-red-400 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 rounded-lg border bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <span className="text-red-400 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 rounded-lg border bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && (
              <span className="text-red-400 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-4 py-2 rounded-lg border bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.confirmPassword && (
              <span className="text-red-400 text-xs">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full border-2 border-white bg-black text-white font-semibold py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-white/60 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
