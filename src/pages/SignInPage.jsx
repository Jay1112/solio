import React from "react";
import NavbarLayout from "../layouts/NavbarLayout";
import SignInForm from '../components/Sign-In/SignInForm';

function SignInPage() {
  return (
    <NavbarLayout>
      <div className="h-full flex items-center justify-center">
        <div className="flex-1 p-4 max-w-[600px] animated animatedFadeInUp fadeInUp">
            <SignInForm />
        </div>
      </div>
    </NavbarLayout>
  );
}

export default SignInPage;
