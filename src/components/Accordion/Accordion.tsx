import React, { useState } from 'react';
import abrir from '../../assets/icons/abrir.png'
import './Accordion.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`arrow ${isOpen ? 'open' : ''}`}><img  className="abrir-accordion" src={abrir} alt="Abre acordeon"/></span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;