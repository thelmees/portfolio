import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Alert from "../assets/alert.png";
import check from "../assets/check.png";

function Contact() {
  const [data, setData] = useState({ name: '', email: '', subject: '', message: '' });
  const [alert, setAlert] = useState({ message: "", visible: false, url: '', txt: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://portfolio-two-dun-41.vercel.app/send', data);
      setAlert({ message: response.data, visible: true, url: check, txt: true });
      console.log(response.data);
      setData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      setAlert({ message: "Error sending message", visible: true, url: Alert, txt: false });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setAlert({ visible: false, message: '', url: '' });
      }, 3000);
    }
  };

  return (
    <div id='Contact' className='bg-[#0F0F0F] pt-10 sm:pt-16 text-[#e4e4e4]'>
      <p className='text-[red] text-2xl sm:ml-36 mb-10 ml-8 font-extrabold'>Contact.</p>
      <div className='text-center'>      
        <h1 className='text-3xl sm:text-5xl font-bold'>Send me a message!</h1>
        <form 
          onSubmit={handleSubmit} 
          className='flex flex-col p-8 sm:p-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] m-auto gap-6 text-[#2a2a2a] font-mono'
        >
          <input 
            className='h-12 py-0 px-4 rounded outline-none text-gray-900' 
            type="text" 
            placeholder='Name' 
            value={data.name} 
            onChange={(e) => setData({ ...data, name: e.target.value })} 
            required 
          />
          <input 
            className='h-12 py-0 px-4 rounded outline-none text-gray-900' 
            type='email' 
            placeholder='Email' 
            value={data.email} 
            onChange={(e) => setData({ ...data, email: e.target.value })} 
            required 
          />
          <input 
            className='h-12 py-0 px-4 rounded outline-none text-gray-900' 
            type='text' 
            placeholder='Subject' 
            value={data.subject} 
            onChange={(e) => setData({ ...data, subject: e.target.value })} 
            required 
          />
          <textarea 
            className='p-4 resize-none outline-none rounded text-gray-900' 
            rows='5' 
            placeholder='Message' 
            value={data.message} 
            onChange={(e) => setData({ ...data, message: e.target.value })} 
            required 
          />
          <button 
            disabled={loading} 
            type='submit' 
            className='p-4 bg-black text-[#e4e4e4] rounded hover:bg-[#232323] transition duration-300'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {loading && (
  <div className="fixed inset-0 flex justify-center items-center">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className='relative z-10 space-x-2 flex justify-center items-center w-full max-w-xs md:max-w-sm lg:max-w-md h-[250px] p-6 bg-white rounded-lg shadow-lg'>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
    </div>
  </div>
)}
{alert.visible && (
  <div className="fixed inset-0 flex justify-center items-center p-4">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className='relative z-10 flex flex-col justify-center items-center w-full max-w-xs md:max-w-sm lg:max-w-md h-[250px] p-6 bg-white rounded-lg shadow-lg'>
      <p><img className='h-20 m-2.5' src={alert.url} alt='img' /></p>
      <p className={alert.txt ? 'text-[green] m-2.5' : 'text-[red] m-2.5'}>{alert.message}</p>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default Contact;