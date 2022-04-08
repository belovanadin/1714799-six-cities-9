import Header from '../components/header/header';
import SignInScreen from './sign-in-screen';

function SignIn(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header />
      <SignInScreen />
    </div>
  );
}

export default SignIn;
