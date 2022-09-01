import React, {useState} from 'react';

import './App.scss';
import {Review, Modal, BgVid} from "./components";

function App() {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = function(displayModal){
    setShowModal(displayModal);
  }

  return (
    <>
    {showModal && <Modal modalHandler={modalHandler} />}
    <BgVid />
    <Review modalHandler={modalHandler} />
    </>
  );
}

export default App;
