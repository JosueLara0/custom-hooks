export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload];

        case 'Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload.id);

        case 'Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            });

        default:
            return initialState;
    }
};