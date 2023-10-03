import {useContext} from 'react';
import {ModalContext} from '@/contexts/ModalContext';

const useModal = () => {
  return useContext(ModalContext);
};

export default useModal;
