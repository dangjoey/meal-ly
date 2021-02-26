import React, { useState } from 'react';

import CameraModal from '../components/CameraModal';
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
      <CameraModal
        closeModal={() => {
          setModalVisible(false);
        }}
        isModalVisible={isModalVisible}
      />
      <IngredientsSelect searchValue={searchValue}  />
    </>
  )
}

export default HomePage;