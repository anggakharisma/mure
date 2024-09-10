import { ButtonPrimary } from "../Button/Button";
import Input from "../Input/Input";
import Modal from "./Modal";
type AuthenticateionModalProps = {
  showModal: boolean
  setShowModal: any
  respMessage: any
  activeTab: any
  setActiveTab: any
  handleInputChange: any,
  onSubmitRegister: any,
  onSubmitLogin: any

}
export default function AuthenticateionModal({ showModal, setShowModal, respMessage, activeTab, setActiveTab, handleInputChange, onSubmitLogin, onSubmitRegister }: AuthenticateionModalProps) {
  return (<Modal isVisible={showModal}>
    <div>
      <div className="flex flex-col relative min-w-[160px] bg-white w-full mx-auto rounded-md pb-8 transition-all">
        {respMessage && <div className="absolute rounded-md text-white font-bold top-10 left-1/2 -translate-x-1/2 bg-emerald-400 px-4 py-2 z-40">
          {respMessage}
        </div>}
        <p onClick={() => setShowModal(false)} className="hover:cursor-pointer absolute -right-16 top-0 p-2 text-4xl text-white">X</p>

        <div className="relative flex gap-16 pt-4 px-8 justify-around items-center align-middle border-b-[2px]">
          {
            //  !TODO: This sucks change this, if we have more than two
            //  items this will not work
            //  or make tabs compoonent(?)
          }
          <div className={`absolute left-0 ${activeTab == 0 ? 'translate-x-16' : 'translate-x-64 ml-4'} bottom-0 w-24 h-1 bg-primary transition-all`}></div>

          <h4 onClick={() => {
            setActiveTab(0);
            // registerRef.current?.reset();
          }} className={`font-bold text-xl pb-4 text-primary hover:cursor-pointer`}>Register</h4>
          <h4 onClick={() => {
            setActiveTab(1);

            // registerRef.current?.reset();
          }} className={`font-bold text-xl pb-4 text-primary hover:cursor-pointer`}>Sign In</h4>
        </div>
        <div className="py-8">
          <h4 className="font-bold text-center text-4xl text-sub-black">Join Us</h4>
          <h4 className="text-md text-center text-sub-black">Start sharing your own song</h4>
        </div>
        <div className="w-full px-8">
          {activeTab == 0 ?
            <form name="register-form" className="flex flex-col" onSubmit={onSubmitRegister}>
              <div className="flex flex-col gap-y-6 mb-8">
                <Input onChange={handleInputChange} name="name" required placeholder="Name" />
                <Input onChange={handleInputChange} name="email" type="email" required placeholder="Email" />
                <Input onChange={handleInputChange} name="password" type="password" required placeholder="Password" />
              </div>
              <div className="flex flex-col gap-y-4 mb-4">
                <ButtonPrimary type="submit">
                  Register
                </ButtonPrimary>
                <ButtonPrimary type="button">
                  Register with G
                </ButtonPrimary>
              </div>
            </form>
            :
            <form name="login-form" className="flex flex-col" onSubmit={onSubmitLogin}>
              <div className="flex flex-col gap-y-6 mb-8">
                <Input onChange={handleInputChange} name="email" placeholder="Email" />
                <Input onChange={handleInputChange} type="password" name="password" placeholder="Password" />
              </div>
              <div className="flex flex-col gap-y-4 mb-4">
                <ButtonPrimary onClick={() => {
                  console.log(process.env.NEXT_PUBLIC_API_URL);
                }} type="submit">
                  Sign In
                </ButtonPrimary>
                <ButtonPrimary type="button">
                  Sign In with G
                </ButtonPrimary>
              </div>
            </form>
          }
        </div>
      </div>
    </div>
  </Modal>

  )
}
