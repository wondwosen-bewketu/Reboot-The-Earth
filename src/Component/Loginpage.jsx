import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import facebookLogo from "../assets/Facebook.png";
import googleLogo from "../assets/Google.png";
import Logo from "../assets/branding.png";
export default function LoginPage() {
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
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <TEInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
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
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-sm flex justify-end">
                <a href="#" className="font-semibold text-[#187b1b]">
                  Forgot password?
                </a>
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
              <TERipple rippleColor="light" className="w-full">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#187b1b] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#187b1b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#187b1b]"
                >
                  Sign in
                </button>
              </TERipple>
            </div>
          </form>

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
                  className="inline-flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <img
                    className="h-5 mr-2"
                    src={googleLogo}
                    alt="Google Logo"
                    srcset=""
                  />
                  <p>Google</p>
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <img
                    className="h-5"
                    src={facebookLogo}
                    alt="Facebook Logo"
                    srcset=""
                  />
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
