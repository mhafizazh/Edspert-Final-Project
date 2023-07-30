import { useState } from 'react';

function Section() {
    const menuItem = ['program', 'bidang ilmu', 'tentang edspert'];

    const Menu = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      }
    };
    return (
      <header className='bg-[#152A46] text-white px-8 py-4 sm:px-32 sm:py-7 flex flex-wrap justify-between items-center'>
        <h1 className='text-2xl sm:text-4xl font-be-vietnam'>LOGO</h1>
        <nav className='mt-4 sm:mt-0'>
          <ul className='p-0 m-0 flex flex-wrap sm:flex-row justify-center list-none'>
            {menuItem.map((item) => (
              <li className='mb-2 sm:mb-0 sm:mr-6' key={item}>
                <a className='text-white' href='#'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className='mt-4 sm:mt-0'>Masuk/Daftar</button>
      </header>
    );
  }
  
  export default Section;
  