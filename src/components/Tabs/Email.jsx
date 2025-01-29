import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mhf2z39', 'template_tohe38n', form.current, 'user_na2bAwclyQehOJE8KCIhP')
      .then((result) => {
          if(result.text === 'OK'){
           form.current.reset();
              alert("Email sent successfully")
            
          }
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} >
       <div className="field half first">
              <label htmlFor="user_name">Name</label>
      <input type="text" name="user_name" />
      </div>
      <div className="field half">
              <label htmlFor="user_email">Email</label>
      
      <input type="email" name="user_email" />
      </div>
      <div className="field">
              <label htmlFor="message">Message</label>
      <textarea name="message" rows="4" />
      </div>
      <ul className="actions">
              <li>
      <input type="submit" value="Send" />
      </li>
      <li>      <input type="reset" value="Reset" /></li>
      </ul>
    </form>
  );
};