import SignIn from "../../components/SignIn/SignIn";
import NavBarLayout from "../../layouts/NavBarLayout/NavBarLayout";

function SignInPage() {
  return (
    <NavBarLayout>
      <div className="product-background flex w-full items-center justify-center px-2 py-4 md:px-8 md:py-4">
        <SignIn />
      </div>
    </NavBarLayout>
  );
}

export default SignInPage;
