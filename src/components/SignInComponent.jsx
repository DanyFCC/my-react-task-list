import { useEffect, useState } from "react";
import { app } from "../firebaseconfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUser } from "../providers/UserProvider";

function SignInComponent() {
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useUser();
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        setUser({
          name: userCredentials.user.displayName,
          profileImage: userCredentials.user.photoURL,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    console.log(`Welcome user ${user.name} ${user.profileImage}`);
  }, [user]);

  return (
    <>
      <div>
        <button className="button" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </>
  );
}

export default SignInComponent;
