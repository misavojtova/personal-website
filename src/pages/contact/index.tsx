// Render Prop
import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';
type User = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const form = useRef();
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={(values: User) => {
        const errors: Partial<User> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // have to fix that i wont display the error,
        //and the isSubmiting is too often true when its not supose to be
        // maybe try catch instead
        console.log('values', values);
        console.log('submiting');

        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(
            result => {
              alert('Your email was submited succesfuly 🎉');
            },
            error => {
              alert(
                'Sorry, this is unexpected, hovewer you can contact me here: michaelavojtov@gmail.com'
              );
            }
          )
          .catch(err =>
            alert(
              'Sorry, this is unexpected, hovewer you can contact me here: michaelavojtov@gmail.com'
            )
          )
          .finally(() => setSubmitting(false));
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => {
        console.log(isSubmitting);
        return (
          <Form
            ref={form}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: 400 }}
          >
            <label htmlFor='name'>Name:</label>
            <Field type='text' name='name' />
            <ErrorMessage className='text-red' name='name' component='div' />

            <label htmlFor='email'>Email:</label>
            <Field type='email' name='email' />
            <ErrorMessage className='text-red' name='email' component='div' />

            <label htmlFor='message'>Message:</label>
            <Field type='text' style={{ height: '150px' }} name='message' />
            <ErrorMessage name='message' component='div' />

            <button type='submit' disabled={isSubmitting}>
              SUBMIT
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Contact;
