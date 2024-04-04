import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext, UserContextType } from "../../context/userContext";

const Page = () => {
  const router = useRouter();
  const { user } = useContext(UserContext) as UserContextType;
  console.log(user);
  return (
    <div className="w-5/6 p-6 mx-auto">
      <p>{router.query.id}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum quasi optio impedit quidem necessitatibus ipsum, nulla quas? Recusandae maiores hic quo non aspernatur, velit cumque quidem asperiores mollitia voluptatibus.</p>
    </div>
  );
}

export default Page;
