import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const lazyImport = newComponent => {
  return lazy(() => import(`../pages/${newComponent}`));
};

const HomePage = lazyImport('Home');
const RegisterPage = lazyImport('Register');
const LoginPage = lazyImport('Login');
const ContactsPage = lazyImport('Contacts');

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/register" element={RegisterPage} />
        <Route path="/login" element={LoginPage} />
        <Route path="/contacts" element={ContactsPage} />
      </Routes>
    </Suspense>
  );
};
