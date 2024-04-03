import React from 'react';
import './LoginForm.scss';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Здесь вы можете отправить данные на сервер или выполнить другие действия с ними
  };

  return(
    <>
      <h2 className='form-title'>LOG IN</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            type='password'
            id='password'
            {...register('password', { required: true, minLength: 6 })} 
            />
          <p className='error-message'>
            {(errors.password && errors.password.type === 'required') && "Поле 'Пароль' обязательно для заполнения"}
            {(errors.password && errors.password.type === 'minLength') && "Минимальная длина пароля - 6 символов"}
          </p>
        </div>
        <button className='button' type='submit'>Log in</button>
      </form>
    </>
  )
}

export default LoginForm;