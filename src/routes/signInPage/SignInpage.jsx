import "./SignInpage.css";
import { SignIn } from "@clerk/clerk-react";

const SignInpage = () => {
  return (
    <div className="signInpage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SignInpage;
