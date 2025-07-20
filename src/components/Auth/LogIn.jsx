import InputField from "../../components/Common/Input/InputField";
import Button from "../../components/Common/Button/Button";
const LogIn = (props) => {
  const { onToggle, email, setEmail, password, setPassword, onSubmit } = props;
  return (
    <div className="auth-form">
      <div className="title">Log In</div>
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
          title="Password"
          type="password"
          id="password"
          placeholder="your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button text="Login" className={"button-dark"} onClick={onSubmit} />
        <div className="or">
          Don't have an account? <span onClick={onToggle}>Sign Up</span>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
