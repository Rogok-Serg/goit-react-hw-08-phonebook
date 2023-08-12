const RegisterPage = () => {
  const handleSubmitRegister = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.userName.value;
    const email = form.userEmail.value;
    const password = form.userPassword.value;
    console.log('password: ', password);
    console.log('email: ', email);
    console.log('name: ', name);
  };

  return (
    <div>
      <h1>Register Your Account</h1>
      <form onSubmit={handleSubmitRegister}>
        <p>Name:</p>
        <label>
          <input name="userName" type="text" required minLength={4} />
        </label>
        <p>Email:</p>
        <label>
          <input name="userEmail" type="email" required />
        </label>
        <label>
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={5} />
        </label>
        <br />
        <button type="submit">Sing in</button>
      </form>
    </div>
  );
};

export default RegisterPage;
