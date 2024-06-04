import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/branding.png";
import facebookLogo from "../assets/Facebook.png";
import googleLogo from "../assets/Google.png";
import { TEInput, TERipple } from "tw-elements-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log("Username:", username); // Debugging statement
    if (username === "admin") {
      console.log("Navigating to /admin"); // Debugging statement
      navigate("/admin");
    } else if (username === "govt") {
      console.log("Navigating to /govt"); // Debugging statement
      navigate("/govt");
    } else if (username === "farmer") {
      console.log("Navigating to /farmer"); // Debugging statement
      navigate("/farmer");
    } else {
      alert("Invalid username!");
    }

    // Reset input fields
    setUsername("");
    setPassword("");
  };

  const handleUsernameChange = (e) => {
    console.log("e: ", e.target.value);
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto w-auto h-20" src={Logo} alt="Your Company" />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <TEInput
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>

              <div className="mt-2">
                <TEInput
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-sm flex justify-end">
                <Link
                  to="/forgot-password"
                  className="font-semibold text-[#187b1b]"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-[#187b1b] focus:ring-[#187b1b]"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div>
              <TERipple rippleColor="light" className="w-full"></TERipple>
              <button
                type="button"
                onClick={handleSignIn}
                className="flex w-full justify-center rounded-md bg-[#187b1b] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#187b1b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#187b1b]"
              >
                Sign in
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm
                  ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <img
                    className="h-5 mr-2"
                    src={googleLogo}
                    alt="Google Logo"
                  />
                  <p>Google</p>
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <img className="h-5" src={facebookLogo} alt="Facebook Logo" />
                  <img className="h-5" src={facebookLogo} alt="Facebook Logo" />
                  <p>Facebook</p>
                </button>
              </TERipple>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
