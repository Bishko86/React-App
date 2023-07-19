import { ModalContext } from 'core/contexts';
import { ModalProviderProps } from 'core/interfaces';
import { useContext } from 'react';

import './ModalDialog.scss';
import { ReactSVG } from 'react-svg';

export const ModalDialog: React.FC<ModalProviderProps> = ({ children, title }) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);
  const url = `/icons/close-icon.svg`;

  return isModalOpen
    ? (
      <div className="modal">
        <div className="modal__view">
          <div className="modal__header">
            {title && <h3 className="modal__title">{title}</h3>}
            <span onClick={closeModal}>
              <ReactSVG className="modal__close" src={url} />
            </span>
          </div>
          <div className="modal__content">
            {children}
          </div>
        </div>
      </div>
    )
    : null;
}
