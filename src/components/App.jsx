import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppCSS from './css/App.module.css';
import Navigation from 'components/Navigation';
import { useSelector } from 'react-redux';

const lazyImport = newComponent => {
  return lazy(() => import(`../pages/${newComponent}`));
};

const Register = lazyImport('Register');
const Login = lazyImport('Login');
const Contacts = lazyImport('Contacts');

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Suspense>
      <Routes>
        <Route path="/register" element={Register} />
        <Route path="/login" element={Login} />
        <Route path="/contacts" element={Contacts} />
      </Routes>
    </Suspense>
  );
};
