//* libraries
import { configureStore } from '@reduxjs/toolkit';
import { act, renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
//* slices
import { exampleSlice } from '../../hooks/useStore/exampleSlice';
//* hooks
import { useStore } from '../../hooks/useStore/useStore';


const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            example: exampleSlice.reducer
        },
        preloadedState: {
            example: { ...initialState }
        }
    });
};


describe('Tests in useStore', () => {

    test('should return default values', () => {

        const mockStore = getMockStore({ isModalOpen: false });

        const { result } = renderHook(() => useStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        expect(result.current).toEqual({
            isModalOpen: false,
            closeModal: expect.any(Function),
            openModal: expect.any(Function),
            toggleModal: expect.any(Function),
        });
    });


    test('openModal should place true in isModalOpen', () => {

        const mockStore = getMockStore({ isModalOpen: false });
        const { result } = renderHook(() => useStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        const { openModal } = result.current;

        act(() => {
            openModal();
        });

        expect(result.current.isModalOpen).toBeTruthy();
    });


    test('closeModal should place false in isModalOpen', () => {

        const mockStore = getMockStore({ isModalOpen: true });
        const { result } = renderHook(() => useStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        act(() => {
            result.current.closeModal();
        });

        expect(result.current.isModalOpen).toBeFalsy();

    });


    test('toggleModal should change correctly the state', () => {

        const mockStore = getMockStore({ isModalOpen: true });
        const { result } = renderHook(() => useStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        act(() => {
            result.current.toggleModal();
        });

        expect(result.current.isModalOpen).toBeFalsy();

        act(() => {
            result.current.toggleModal();
        });

        expect(result.current.isModalOpen).toBeTruthy();
    });
});