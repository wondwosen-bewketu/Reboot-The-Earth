import React from "react";
import { TEInput, TERipple } from "tw-elements-react";

export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
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
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                  <span className="sr-only">Sign in with Google</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <path d="M24 9.5c3.1 0 5.6 1.1 7.4 3.2L38 7C34.1 3 29.4 1 24 1 14.6 1 7.2 6.4 4 14.1l7.3 5.7c1.7-5.1 6.4-8.3 12.7-8.3z" />
                    <path d="M9.3 28.4c-.5-1.4-.8-2.8-.8-4.4s.3-3 0.8-4.4L2 14c-1.1 2.8-1.8 5.8-1.8 9s.7 6.2 1.9 9l7.4-5.6z" />
                    <path d="M24 46c4.3 0 8-1.4 10.6-3.8l-6.5-5.3c-1.5 1.1-3.5 1.8-5.6 1.8-5 0-9.2-3.3-10.6-7.8L2.1 36C5.3 43.6 13.7 49 24 49z" />
                    <path d="M46 24c0-1.4-.1-2.8-.4-4.2H24v8h12.8c-.6 2.9-2.3 5.2-4.8 6.8l6.4 5c3.6-3.4 5.6-8.4 5.6-15z" />
                  </svg>
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <path d="M24 2C12 2 2 12 2 24c0 9.7 6.3 17.9 15 20.7 1.1.2 1.5-.5 1.5-1.1 0-.6-.1-2.2-.1-4.3-6.1 1.2-7.8-2.8-7.8-2.8-1-2.5-2.5-3.1-2.5-3.1-2-1.4.2-1.4.2-1.4 2.2.2 3.3 2.3 3.3 2.3 1.9 3.2 5.1 2.3 6.4 1.7.2-1.4.7-2.3 1.3-2.9-4.9-.6-10.1-2.4-10.1-10.7 0-2.4.9-4.3 2.3-5.8-.2-.6-1-2.9.2-6 0 0 1.9-.6 6.1 2.3 1.8-.5 3.7-.7 5.6-.7 1.9 0 3.8.2 5.6.7 4.2-2.8 6.1-2.3 6.1-2.3 1.2 3 1 5.4.2 6 1.4 1.5 2.3 3.4 2.3 5.8 0 8.3-5.2 10.1-10.1 10.7.7.6 1.4 1.9 1.4 3.8 0 2.7-.1 4.9-.1 5.5 0 .6.4 1.3 1.5 1.1 8.7-2.9 15-11.1 15-20.7 0-12-10-22-22-22z" />
                  </svg>
                </button>
              </TERipple>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
