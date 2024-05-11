import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for the checkbox
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    setNotification('Happy shopping!'); // Set the notification message
    setEmail(''); // Reset email field
    setPassword(''); // Reset password field
    setRememberMe(false); // Reset the checkbox
    setShowNotification(true); // Show the notification

    // Reset the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
      setNotification('');
    }, 1500);
    
    // You can add additional logic here, such as sending the form data to a server
  };

  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <div className='bg-white px-10 py-5 rounded-3xl border-2 border-gray-200 shadow-lg'>
          <h1 className='text-lg font-semibold'>Great to see you!</h1>
          <p className='font-medium text-lg text-gray-600 mt-4'>Enter your details</p>
          <form onSubmit={handleSubmit}>
            <div className='mt-2'>
              <div>
                <label className='text-lg font-medium'>Email</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                  placeholder='Enter your email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required // Email field is required
                />
              </div>
              <div>
                <label className='text-lg font-medium'>Password</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                  placeholder='Enter your password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required // Password field is required
                />
              </div>
              <div className='mt-4 flex justify-between items-center'>
                <div>
                  <input
                    type='checkbox'
                    id='remember'
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className='ml-2 font-medium text-base' htmlFor='remember'>
                    Remember me!
                  </label>
                </div>
              </div>
              <div className='mt-4'>
                <button type="submit" className='py-2 rounded-xl bg-rose-400 text-white text-lg font-bold'>Sign in</button>
              </div>
            </div>
          </form>
          <div className='mt-4 flex justify-center items-center'>
            <p className='font-medium text-base'>New Customer?</p>
            <button className='text-pink-800 text-base font-medium ml-2'>Register</button>
          </div>
          {showNotification && (
            <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{notification}</span>
            </div>
          )}
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
