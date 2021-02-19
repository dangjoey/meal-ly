import React, { useState } from 'react';

import IngredientsSelect from '../components/IngredientsSelect';
import Header from '../components/Header';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Header
        setSearchValue={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <IngredientsSelect searchValue={searchValue}/>
    </>
  )
}

export default HomePage;