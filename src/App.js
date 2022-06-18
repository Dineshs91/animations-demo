import './App.css';
import "normalize.css";
import * as React from "react";
import { motion } from "framer-motion";
import { UserIcon } from '@heroicons/react/outline';

function App() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="app">
      <header className="app-header">
        <title>Animations Demo with Framer Motion</title>
      </header>
      <section className='main'>
        <h3 className='form-title'><UserIcon className='user-icon' /> User Details</h3>
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.input className='item input-name' variants={item} type='text' placeholder='First Name'></motion.input>
          <motion.input className='item input-name' variants={item} type='text' placeholder='Last Name'></motion.input>
          <section className='form-control'>
            <motion.button className='iteme' variants={item}>
              Submit
            </motion.button>
          </section>
        </motion.ul>
      </section>
    </section>
  );
}

export default App;
