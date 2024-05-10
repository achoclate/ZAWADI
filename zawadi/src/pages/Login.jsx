import React from 'react';

const Login = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 shadow-lg'> {/* Adjusted shadow */}
          <h1 className='text-5xl font-semibold'>Welcome back!</h1>
          <p className='font-medium text-lg text-gray-600 mt-4'>Enter your details</p>
          <div className='mt-6'>
            <div>
              <label className='text-lg font-medium'>Email</label>
              <input
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Enter your email'
              />
            </div>
            <div>
              <label className='text-lg font-medium'>Password</label>
              <input
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Enter your password'
                type='password'
              />
            </div>
            <div className='mt-8 flex justify-between items-center'>
              <div>
                <input
                  type='checkbox'
                  id='remember'
                />
                <label className='ml-2 font-medium text-base' htmlFor='remember'>Remember me!</label>
              </div>
            </div>
            <div className='mt-8'>
              <button className='py-3 rounded-xl bg-rose-200 text-white text-lg font-bold'>Sign in</button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
              <p className='font-medium text-base'>New Customer?</p>
              <button className='text-pink-800 text-base font-medium ml-2'>Register</button>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
        <div className='w-60 h-60 bg-gradient-to-tr from-blue-200 to-pink-300 rounded-full animate-bounce' />
        <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg' />
      </div>
    </div>
  );
};

export default Login;
