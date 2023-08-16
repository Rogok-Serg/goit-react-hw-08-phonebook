import { lazy } from 'react';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthentificated,
  selectToken,
} from 'redux/authentificated/authSelectors';
import { refreshUser } from 'redux/authentificated/operations';
import { useEffect } from 'react';
import UserMenu from './UserMenu/UserMenu';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const ContactsPage = lazy(() => import('page/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('page/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('page/RegisterPage/RegisterPage'));

export const App = () => {
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || authentificated) return;
    dispatch(refreshUser());
  }, [token, dispatch, authentificated]);

  // const handleLogout = () => {
  //   dispatch(logoutUser());
  // };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {authentificated ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
