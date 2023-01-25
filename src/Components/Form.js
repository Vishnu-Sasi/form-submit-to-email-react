import React from 'react'
import { useForm} from '@formspree/react';
import './Form.css'
function Form() {
    const [state, handleSubmit] = useForm("xayzqwag");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
      <form onSubmit={handleSubmit} className="form-div">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <textarea
        id="message"
        name="message"
      />
      
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}

export default Form