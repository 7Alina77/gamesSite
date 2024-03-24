import React from 'react';
import './RegisterForm.scss';
import { useForm } from "react-hook-form";

function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data); // Здесь вы можете отправить данные на сервер или выполнить другие действия с ними
  };

  return(
    <>
      <h2 className='title'>REGISTER</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className='name-input' type="text" id="name" {...register('name', { required: true })} />
            {errors.name && <span className="error-message">Поле "Имя" обязательно для заполнения</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input className='name-password' type="password" id="password" {...register('password', { required: true, minLength: 6 })} />
            {errors.password && errors.password.type === 'required' && <span className="error-message">Поле "Пароль" обязательно для заполнения</span>}
            {errors.password && errors.password.type === 'minLength' && <span className="error-message">Минимальная длина пароля - 6 символов</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input className='name-password-confirm' type="password" id="confirmPassword" {...register('confirmPassword', { required: true, validate: value => value === password.current || "Пароли не совпадают" })} />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
          </div>
          <button className='button' type="submit">Register</button>
      </form>
    </>
  )
}

export default RegisterForm;