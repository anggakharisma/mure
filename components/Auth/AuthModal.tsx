import { useState } from "react";

const AuthModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="hidden fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 w-full h-screen z-50">
      <div className="w-3/4 m-auto flex justify-center items-center align-middle h-full">
        <div className="bg-white p-8 w-1/2 rounded-lg">
          <h3 className="text-2xl text-gray-700 text-center mb-8">SIGN IN</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="w-full border border-solid border-gray-300 p-2 mb-6"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-full border border-solid border-gray-300 p-2 mb-6"
              type="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white font-normal py-2 p-4 rounded-full transition-all hover:bg-dark-primary disabled:bg-gray-300"
            >
              Sign in
            </button>
            <button
              type="submit"
              className="w-full bg-white font-normal py-2 p-4 rounded-full transition-all border mt-4 disabled:bg-gray-300"
            >
              Sign with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AuthModal;
