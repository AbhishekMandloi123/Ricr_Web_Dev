import React from 'react'
const Contact = () => {
  const [FullName, setFullName] = React.useState(""); 
  const [Email, setEmail] = React.useState("");
  const [Message, setMessage] = React.useState("");
  const [isloading, setIsLoading] = React.useState(false);


  const handleClear = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };


    

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
      
        const data = {
          FullName,
          Email,        
          Message,
        };
        console.log(data);
      
      
      
    } 
    catch (error) 
    {
      console.log(error , Message);
      
    }
    finally {
      setIsLoading(false);
    }

    handleClear();


  };

  return (
    <div className='text-center  mt-4 bg-fuchsia-400'>
      <h1 className='text-4xl'>Contact Us</h1>
      <div className='container mx-auto' > 
        <form className='flex flex-col space-y-4 p-4'onReset={handleClear} onSubmit={handleSubmit} >
          <div>
          <label htmlFor="FullName"  >Full Name  </label>
          <input type="text" className='border border-black bg-white' id='fullname' value={FullName} onChange={(e) => setFullName(e.target.value)} placeholder='Enter your name' required />
        </div>
        <div>
          <label htmlFor="Email">Email  </label>
          <input type="email" className='border border-black bg-white' id='email' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required /> 
        </div>
        <div>
          <label htmlFor="Message">Message  </label>
          <textarea name="Message" className='border border-black bg-white' value={Message} onChange={(e) => setMessage(e.target.value)} required></textarea>  
        </div>
        <div>
          <button type='reset'  className='bg-red-500 text-white px-4 py-2 rounded '>Clear Form</button>
          <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>
            {isloading ? "Loading..." : "Submit"}

            </button> 
        </div>
        </form>

      </div>
    </div>
  )
}

export default Contact;
