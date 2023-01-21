import React from 'react';
import { useContext } from 'react';
import Name from '../context/NameContext';


const CompC = () => {
   const name = useContext(Name);

  return (
    <div>Hello {name} </div>
  )
}

export default CompC