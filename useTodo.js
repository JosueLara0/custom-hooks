//* libraries
import { useReducer, useEffect } from "react";
//* helpers
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: "Take power stone",
    //   done: false,
    // }
];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};


//--------------------------------------------------------------------
export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = { type: "Add Todo", payload: todo };
        dispatch(action);
    };

    const handleDeleteTodo = (todo) => {
        const action = { type: "Remove Todo", payload: todo };
        dispatch(action);
    };

    const handleToggleTodo = (todo) => {
        const action = { type: "Toggle Todo", payload: todo };
        dispatch(action);
    };

    const todosPending = todos.filter((todo) => !todo.done).length;

    return {
        todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, todosCount: todos.length, todosPending
    };
};
