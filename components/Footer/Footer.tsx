const Footer = () => {
  return (
    <div className="w-5/6 mx-auto flex flex-col md:flex-row">
      <h1 className="my-auto text-3xl font-[900] tracking-tighter text-primary">
        MURE
      </h1>
      <div className="relative w-full ml-0 md:ml-8 h-full p-8 rounded-lg  my-12 bg-primary before:w-full before:h-full before:-top-4 before:-right-4 before:bg-accent before:absolute before:-z-10 before:rounded-lg after:w-full after:h-full after:-top-8 after:-right-8 after:bg-secondary after:absolute after:-z-20 after:rounded-lg">
        <div className="flex gap-16">
          <div>
            <h2 className="text-white font-bold text-lg mb-2">SITE</h2>
            <div className="grid grid-rows-1 gap-1">
              <p className="text-white text-sm">Jobs</p>
              <p className="text-white text-sm">Artist</p>
            </div>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">HELP</h2>
            <div className="grid grid-rows-1 gap-1">
              <p className="text-white text-sm">Developers</p>
              <p className="text-white text-sm">Privacy Policy</p>
              <p className="text-white text-sm">Cookie Policy</p>
              <p className="text-white text-sm">Terms &amp; Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
