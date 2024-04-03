import { useLocation } from 'react-router-dom';
import Form from '../Form/Form';
import RegisterForm from '../RegisterForm/RegisterForm';
import './Landing.scss';
import LoginForm from '../LoginForm/LoginForm';


function Landing() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <section className='landing'>
      <div className='content'>
        <div className='landing-texts'>
          <h1 className='landing-title'>Ready to start the game?</h1>
          <p className='landing-subtitle'>Online games offer a vast array of experiences, from intense competition in e-sports to cooperative adventures with friends. With advancements in technology, online gaming has evolved to be incredibly immersive, often blurring the lines between reality and virtuality. Despite occasional controversies, online gaming continues to captivate millions, providing an escape and a sense of belonging for players of all ages.</p>
        </div>
        <Form>
          {path === '/' 
            ? <RegisterForm />
            : <LoginForm />
          }
        </Form>
      </div>
    </section>
  );
}

export default Landing;
