import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from "@emailjs/browser";

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.7rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_xtad3ri',
        'template_90aozwq',
        {
          from_name: form.name,
          to_name: "Rahul Singh Gurjar",
          from_email: form.email,
          to_email: "rahulsinghgurjar10000@gmail.com",
          message: form.message,
        },
        'g3oS9kqIg_9S9lDxx'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <FormStyle>
        <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>{loading ? "Sending..." : "Send"}</button>
        </form>
      </FormStyle>
    </>
  );
}