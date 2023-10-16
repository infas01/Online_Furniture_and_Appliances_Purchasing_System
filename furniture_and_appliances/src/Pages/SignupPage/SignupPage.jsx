import React from 'react';
import MainNavBar from '../../components/NavBars/MainNavBar';
import { Button } from '@material-tailwind/react';
import Footer from '../../components/Footer/Footer';

function SignupPage() {
  return (
    <div className='ml-5 mr-5 mt-40'>
      <MainNavBar />
      <section className="bg-white">
        <div className="flex justify-center min-h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/5 mb-5 rounded-xl" 
               style={{ backgroundImage: "url('https://www.universalfurniture.com/images/pages/home/2022/U030501_RM.jpg?v=fcYu7oTsSUAyVfxWs5MbR2L0Jpeg0JzIiZ4Eaa_BqPw')" }}>
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500">
                    Let's get you all set up so you can explore our catalog, verify your account 
                    and start styling your home with quality furniture and appliances.
              </p>

              <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label class="block mb-2 text-sm text-gray-600">First Name</label>
                        <input type="text" placeholder="Mohamed" 
                               class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600">Last name</label>
                        <input type="text" placeholder="Infas" 
                               class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600">Phone number</label>
                        <input type="text" placeholder="XXX-XXXX-XXX" 
                               class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600">Email address</label>
                        <input type="email" placeholder="mohamedinfas@example.com" 
                               class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600">Password</label>
                        <input type="password" placeholder="Enter your password" 
                               class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600">Confirm password</label>
                        <input type="password" placeholder="Enter your password" 
                               class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>    
              </form>

              <Button className="flex items-center justify-center w-full mt-10 text-md tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default SignupPage;
