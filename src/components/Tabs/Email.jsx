import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();

  const Service_id= 'service_x47t8fa';
  const template_id = 'template_06m9t7h';
  const public_key = 'eihQW9KDa2N3IAKEh';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(Service_id, template_id, form.current, {publicKey: public_key})
      .then((result) => {
        if (result.text === 'OK') {
          console.log(form.current,'hello')
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
        <li>
          <input type="reset" value="Reset" />
        </li>
      </ul>
    </form>
  );
};