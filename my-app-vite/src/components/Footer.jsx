const Footer = () => {
    const today = new Date();
    const program = ['Online courses', 'Mini bootcamp', 'Bootcamp'];
  
    return (
      <footer className="mb-12 mt-5 bg-white text-slate-800 px-20">
        <div className="flex flex-col sm:flex-col justify-between sm:flex-row">
          <div className="text-left sm:text-center mb-4 sm:mb-0">
            <h1 className="text-left font-bold">TAGLINE edspert disini</h1>
            <h2 className="text-left">
              Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
            </h2>
          </div>
          <div>
            {program.map((item) => (
              <button key={item} className="text-right mb-2 sm:mb-0 sm:mr-6">
                <a className="text-black" href="#">
                  {item}
                </a>
              </button>
            ))}
          </div>
        </div>
        <p className="text-center mt-6">Edspert, copyright &copy; {today.getFullYear()}</p>
      </footer>
    );
  };
  
  export default Footer;
  