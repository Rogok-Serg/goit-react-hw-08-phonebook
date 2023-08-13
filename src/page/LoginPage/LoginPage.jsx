const LoginPage = () => {
  const handleSabmitLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.userEmail.value;
    const password = form.userPassword.value;
    const allUserDataLogin = {
      email,
      password,
    };
    console.log('allUserDataLogin: ', allUserDataLogin);
    form.reset();
  };

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
