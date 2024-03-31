import SignUp from "../../components/SignUp/SignUp";
import NavBarLayout from "../../layouts/NavBarLayout/NavBarLayout";

function SignUpPage() {
  return (
    <NavBarLayout>
      <div className="product-background bg-position-top flex w-full items-center justify-center px-2 py-4 md:px-8 md:py-4">
        <SignUp />
      </div>
    </NavBarLayout>
  );
}

export default SignUpPage;
