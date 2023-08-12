import { lazy } from 'react';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { NavLink, Route, Routes } from 'react-router-dom';

const ContactsPage = lazy(() => import('page/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('page/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('page/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
