import React from 'react'
import NameContext from './NameContext';

const NameProvider = (props) => {
  return (
    <NameContext.Provider value={"Rajesh"}>
        {props.children}
    </NameContext.Provider>
  )
}

export default NameProvider;