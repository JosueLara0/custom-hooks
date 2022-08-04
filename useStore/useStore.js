//* libraries
import { useDispatch, useSelector } from 'react-redux';
//* store
import { onCloseModal, onOpenModal } from './store-example';

export const useUiStore = () => {

    const dispatch = useDispatch();

    const { isModalOpen } = useSelector(state => state.example);

    const openModal = () => dispatch(onOpenModal());

    const closeModal = () => dispatch(onCloseModal());

    const toggleModal = () => {
        (isModalOpen)
            ? closeModal()
            : openModal();
    };

    return {
        //* Properties
        isModalOpen,

        //* Methods
        closeModal,
        openModal,
        toggleModal,
    };
};