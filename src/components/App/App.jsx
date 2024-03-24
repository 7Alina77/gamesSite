import { Route, Routes } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import '../../pages/index.css';
import './App.scss';
import MainPage from '../MainPage/MainPage';

function App() {
  const methods = useForm();

  return (
    <FormProvider {...methods}> 
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
    </FormProvider>
  );
}

export default App;
