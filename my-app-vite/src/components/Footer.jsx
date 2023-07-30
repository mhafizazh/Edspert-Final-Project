const Footer = () => {
    // Arrow function in JSX
    const today = new Date()
    const marg = "text left"
    return (
        <footer className='mb-12 mt-5 bg-white text-slate-800 px-20 text-center'>
            <h1 className="text-left">TAGLINE edspert disini</h1>
            <h2 className="text-left ">Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</h2>
            <p>Edspert, copyright &copy; {today.getFullYear()}.</p>
        </footer>
    );
};

export default Footer