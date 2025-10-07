import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default HomePage;
