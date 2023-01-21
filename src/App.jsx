import React from 'react'

import NameProvider from './context/NameProvider';
import CompC from './components/CompC';

const App = () => {
  return (
      <NameProvider>
        <CompC />
      </NameProvider>
  )
}

export default App;

