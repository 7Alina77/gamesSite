import React from 'react';
import './RegisterForm.scss';
import { useForm } from 'react-hook-form';

function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = React.useRef({});
  password.current = watch('password', '');
  console.log(errors);

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
          {errors.name && <p className='error-message'>Поле 'Имя' обязательно для заполнения</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='email'></label>
          <input className='form-input email-input' 
            placeholder='Email'
            type='email'
            id='email' 
            {...register('email', { required: true })}
          />
          {errors.name && <p className='error-message'>Поле 'Email' обязательно</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='password'></label>
          <input className='form-input name-password'
            placeholder='Password'
            type='password'
            id='password'
            {...register('password', { required: true, minLength: 6 })} 
            />
          {errors.password && errors.password.type === 'required' && <p className='error-message'>Поле 'Пароль' обязательно</p>}
          {errors.password && errors.password.type === 'minLength' && <p className='error-message'>Минимальная длина пароля - 6 символов</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'></label>
          <input className='form-input name-password-confirm'
            placeholder='Confirm password'
            type='password'
            id='confirmPassword'
            {...register('confirmPassword', { required: true, validate: value => value === password.current || 'Пароли не совпадают' })} 
            />
          {errors.confirmPassword && <p className='error-message'>{errors.confirmPassword.message}</p>}
        </div>
        <button className='button' type='submit'>Register</button>
      </form>
    </>
  )
}

export default RegisterForm;