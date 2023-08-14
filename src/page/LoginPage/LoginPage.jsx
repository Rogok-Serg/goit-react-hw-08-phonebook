import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from 'redux/authentificated/operations';
import { selectAuthentificated } from 'redux/authentificated/authSelectors';

const LoginPage = () => {
  const authentificated = useSelector(selectAuthentificated);

  const dispatch = useDispatch();
  const handleSabmitLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.userEmail.value;
    const password = form.userPassword.value;
    dispatch(loginUser({ email, password }));
    form.reset();
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Login Into Your Account</h1>
      <form onSubmit={handleSabmitLogin}>
        <label>
          <p>Email:</p>
          <input name="userEmail" type="email" required />
        </label>
        <label>
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <br />
        <button type="submit">Sing in</button>
      </form>
    </div>
  );
};

export default LoginPage;
