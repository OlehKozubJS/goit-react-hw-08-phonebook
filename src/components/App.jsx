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
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing User</b>
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

/*
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />

*/
