//* libraries
import { renderHook, act } from '@testing-library/react';
//* hooks
import { useForm } from '../../hooks/useForm/useForm';

describe('Tests in useForm', () => {

    const initialForm = {
        username: 'Josue',
        email: "josue@email.com"
    };

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            username: initialForm.username,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('should change the form name', () => {
        const newValue = 'Jose';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'username', value: newValue } });
        });

        expect(result.current.username).toBe(newValue);
        expect(result.current.formState.username).toBe(newValue);
    });

    test('should reset form', () => {
        const newValue = 'Jose';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'username', value: newValue } });
            onResetForm();
        });

        expect(result.current.username).toBe(initialForm.username);
        expect(result.current.formState.username).toBe(initialForm.username);
    });
});