import './Form.scss';

function Form(props) {
  const { children } = props;

  return (
    <section className='form'>
      {children}
    </section>
  );
}

export default Form;