const Footer = () => {
  return (
    <div className="w-5/6 mx-auto flex flex-col md:flex-row">
      <h1 className="my-auto text-3xl font-[900] tracking-tighter text-primary">
        MURE
      </h1>
      <div className="relative w-full ml-0 md:ml-8 h-full p-8 rounded-lg  my-12 bg-primary before:w-full before:h-full before:-top-4 before:-right-4 before:bg-accent before:absolute before:-z-10 before:rounded-lg after:w-full after:h-full after:-top-8 after:-right-8 after:bg-secondary after:absolute after:-z-20 after:rounded-lg">
        <div className="flex gap-8">
          <div>
            <h2 className="text-white font-bold text-lg mb-2">SITE</h2>
            <p className="text-white">Jobs</p>
            <p className="text-white">Artist</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">HELP</h2>
            <p className="text-white">Developers</p>
            <p className="text-white">Privacy Policy</p>
            <p className="text-white">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
