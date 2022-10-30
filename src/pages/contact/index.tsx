// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => (
  <div>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={values => {
        const errors = {
          email: '',
        };
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => {
        console.log(values);
        return (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label htmlFor='name'>Name:</label>
              <Field type='text' name='name' />
              <ErrorMessage className='text-red' name='name' component='div' />
            </div>

            <div>
              <label htmlFor='email'>Email:</label>
              <Field type='email' name='email' />
              <ErrorMessage className='text-red' name='email' component='div' />
            </div>

            <div>
              <label htmlFor='message'>Message:</label>
              <Field type='text' name='message' />
              <ErrorMessage name='message' component='div' />
            </div>
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default Contact;
