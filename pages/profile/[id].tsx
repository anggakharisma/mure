import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext, UserContextType } from "../../context/userContext";

const Page = () => {
  const router = useRouter();
  const { user } = useContext(UserContext) as UserContextType;
  console.log(user);
  return <p>{router.query.id}</p>;
}

export default Page;
