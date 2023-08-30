import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppCSS from './css/App.module.css';
import Navigation from 'components/Navigation';

const lazyImport = newComponent => {
  return lazy(() => import(`../pages/${newComponent}`));
};

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Suspense>
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </Suspense>
  );
};
