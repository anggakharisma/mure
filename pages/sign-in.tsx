import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

const SignInPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "loading" && !session) void signIn("google");
    if (status !== "loading" && session) window.close();
  }, [session, status]);

  return null;
};

export default SignInPage;
