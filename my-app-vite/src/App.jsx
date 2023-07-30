// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './style.css'
import Footer from './components/Footer';
import Section from "./components/Section";
import Header from "./components/Header.jsx";
import Hero from './components/Hero';

function App() {

    return (
        <body className='bg-slate-200'>
            <Header />
            <Hero />
            <Section />
            <Footer />
        </body>
    )
}

export default App

