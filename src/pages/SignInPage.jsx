import React from "react";
import NavbarLayout from "../layouts/NavbarLayout";
import LazyImage from "../components/ui/LazyImage";
import SignInImage from "../assets/sign-in/sign-in.svg";
import SignInForm from '../components/Sign-In/SignInForm';

function SignInPage() {
  return (
    <NavbarLayout>
      <div className="h-full flex items-center justify-center">
        <div className="flex-1 p-4 max-w-[600px]">
            <SignInForm />
        </div>
      </div>
    </NavbarLayout>
  );
}

export default SignInPage;
