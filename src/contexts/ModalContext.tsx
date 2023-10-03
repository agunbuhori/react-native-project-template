import React, {FC, ReactNode, createContext, useState} from 'react';
import type {PropsWithChildren} from 'react';
import sizes from '@/utils/theme/sizes';
import {View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

type ModalContextProps = {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
};

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps,
);

const ModalProvider: FC<PropsWithChildren> = ({children}) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<ReactNode>();

  const showModal = (content: ReactNode) => {
    setContent(content);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <ModalContext.Provider value={{showModal, hideModal}}>
      {children}
      <View>
        <ReactNativeModal
          isVisible={visible}
          animationIn="fadeIn"
          animationOut="fadeOut"
          onBackdropPress={() => setVisible(false)}>
          <View style={{padding: sizes.padding, backgroundColor: 'white'}}>
            {content}
          </View>
        </ReactNativeModal>
      </View>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
