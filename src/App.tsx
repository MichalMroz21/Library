import React from 'react';
import './App.css';
import { Navbar } from './Layouts/Navbar'
import { Footer } from './Layouts/Footer';
import { HomePage } from './Layouts/HomePage';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
