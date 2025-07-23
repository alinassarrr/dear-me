import InputField from "../../components/Common/Input/InputField";
import Button from "../../components/Common/Button/Button";
const SignUp = (props) => {
  const {
    onToggle,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    username,
    setUsername,
    onSubmit,
  } = props;
  return (
    <div className="auth-form">
      <div className="title">Sign Up</div>
      <form action="">
        <InputField
          title="Email"
          type="email"
          id="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputField
          title="User Name"
          type="text"
          id="username"
          placeholder="your user name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <InputField
          title="Password"
          type="password"
          id="password"
          placeholder="your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputField
          title="Confirm Password"
          type="password"
          id="confirm"
          placeholder="confirm your password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <Button text="Sign Up" className={"button-dark"} onClick={onSubmit} />
        <div className="or">
          Already have an account <span onClick={onToggle}>Log In</span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
