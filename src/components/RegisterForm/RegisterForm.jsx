import React, { useEffect, useRef, useState } from 'react';
import './RegisterForm.scss';
import { useForm } from 'react-hook-form';

function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
    }
  });
  const password = useRef({});
  password.current = watch('password', '');

  useEffect(() => {
    const subscription = watch((data) => {
      console.log(data);

      return () => {
        subscription.unsubscribe();
      }
    })
  }, [watch]);

  const onSubmit = (data) => {
    console.log(data); // Здесь вы можете отправить данные на сервер или выполнить другие действия с ними
  };

  return(
    <>
      <h2 className='form-title'>REGISTER</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='name'></label>
          <input className='form-input name-input' 
            placeholder='Name'
            type='text'
            id='name' 
            {...register('name', { required: true })}
          />
          <p className='error-message'>{errors.name ? "Поле 'Имя' обязательно для заполнения" : ''}</p>
        </div>
        <div className='form-group'>
          <label htmlFor='email'></label>
          <input className='form-input email-input' 
            placeholder='email@domain.com'
            type='email'
            id='email' 
            {...register('email', { required: true })}
          />
          <p className='error-message'>{errors.email ? "Поле 'Email' обязательно для заполнения": ''}</p>
        </div>
        <div className='form-group'>
          <label htmlFor='password'></label>
          <input className='form-input name-password'
            placeholder='Password'
            type = 'password'
            id='password'
            {...register('password', { required: true, minLength: 6 })} 
          />
          <p className='error-message'>
            {(errors.password && errors.password.type === 'required') && "Поле 'Пароль' обязательно для заполнения"}
            {(errors.password && errors.password.type === 'minLength') && "Минимальная длина пароля - 6 символов"}
          </p>
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'></label>
          <input className='form-input name-password-confirm'
            placeholder='Confirm password'
            type = 'password'
            id='confirmPassword'
            {...register('confirmPassword', { required: true, validate: value => value === password.current || 'Пароли не совпадают' })} 
          />
          <p className='error-message'>
            {errors.confirmPassword && errors.confirmPassword.message}
            {(errors.confirmPassword && errors.confirmPassword.type === 'required') && "Подтверждение пароля обязательно"}
          </p>
        </div>
        <button className='button' type='submit'>Register</button>
      </form>
    </>
  )
}

export default RegisterForm;