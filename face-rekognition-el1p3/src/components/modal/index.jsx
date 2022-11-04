import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import './style.scss';

const Amodal = (props) => {
    const { title, btn, typeBtn, children } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type={typeBtn} onClick={showModal}>
        {btn}
      </Button>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
         {children}
      </Modal>
    </>
  );
};

export default Amodal;