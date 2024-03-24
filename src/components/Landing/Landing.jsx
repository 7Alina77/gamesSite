import Form from '../Form/Form';
import RegisterForm from '../RegisterForm/RegisterForm';
import './Landing.scss';


function Landing() {
  return (
    <section className='landing'>
      <div className='content'>
        <h1 className='landing-title'>Ready to start the game?</h1>
        <Form>
          <RegisterForm />
        </Form>
      </div>
    </section>
  );
}

export default Landing;
