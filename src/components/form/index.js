import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
import { useRef } from "react"
export default function Form({signUp,onFormSubmit}) {
const firstNameRef = useRef()
const lastNameRef = useRef()
const emailRef = useRef()
const passwordRef = useRef()
const imageRef = useRef()

 const submitHandler = (event) => {
 event.preventDefault();
 const firstName = firstNameRef.current.value;
 const lastName = lastNameRef.current.value;
 const email = emailRef.current.value;
 const password = passwordRef.current.value;
 const image = imageRef.current.value;
if(signUp){
  onFormSubmit(firstName,lastName,email,password,image);
}
else{
 onFormSubmit(firstName,lastName,email,password)
}
 
}

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
            style={{width:190,height:80}}
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           { signUp? "Sign Up for new account" :"Sign in to your account"}
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={submitHandler}>
          {signUp ? <div>
            <div>
                <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    autoComplete="fname"
                    required
                    ref={firstNameRef}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    autoComplete="lname"
                    required
                    ref={lastNameRef}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> 
              </div> :""}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    ref={emailRef}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    ref={passwordRef}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            {signUp ?  <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="usrImg" className="block text-sm font-medium leading-6 text-gray-900">
                    Your Image URL
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="usrImg"
                    name="usrImg"
                    type="url"
                    autoComplete="usrImg"
                    required
                    ref={imageRef}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> : ""}
  
              <div>
            {signUp ?  <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
                : <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>}
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              {signUp ? <Link href="/signIn" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
               sign In
              </Link>
              :<Link href="/signUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
               sign Up
              </Link>}
            </p>
          </div>
        </div>
      </>
    )
  }
  