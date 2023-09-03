import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

const lazyImport = newComponent => {
  return lazy(() => import(`../pages/${newComponent}`));
};

const Register = lazyImport('Register');
const Login = lazyImport('Login');
const Contacts = lazyImport('Contacts');

export const App = () => {
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
