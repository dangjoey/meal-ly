import React, { useState } from 'react';

import Header from '../components/Header';
import IngredientsSelect from '../components/IngredientsSelect';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Header
        setModalVisible={() => {
          setModalVisible(true);
        }}
        setSearchValue={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <IngredientsSelect
        closeModal={() => {
          setModalVisible(false);
        }}
        isModalVisible={isModalVisible}
        searchValue={searchValue}  />
    </>
  )
}

export default HomePage;