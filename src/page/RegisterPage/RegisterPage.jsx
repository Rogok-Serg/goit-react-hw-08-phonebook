import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerUser } from 'redux/authentificated/operations';
import { selectAuthentificated } from 'redux/authentificated/authSelectors';

const RegisterPage = () => {
  const authentificated = useSelector(selectAuthentificated);

  const dispatch = useDispatch();

  const handleSubmitRegister = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.userName.value;
    const email = form.userEmail.value;
    const password = form.userPassword.value;

    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );
    form.reset();
  };
  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Register Your Account</h1>
      <form onSubmit={handleSubmitRegister}>
        <p>Name:</p>
        <label>
          <input name="userName" type="text" required minLength={5} />
        </label>
        <p>Email:</p>
        <label>
          <input name="userEmail" type="email" required />
        </label>
        <label>
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <br />
        <button type="submit">Sing Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
