export interface TodoType {
    completed: boolean,
    text: string
}

interface StateProps {
    todo: TodoType,
    toggleTodoCompletion: (target: TodoType) => void,
    removeTodo: (target: TodoType) => void
}

export const Todo = (props: StateProps) => {

    const { todo, toggleTodoCompletion, removeTodo } = props

    return (
        <li className="todo">
        <div className="completed-section">
            <input
            className="completed-checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodoCompletion(todo)}
            />
        </div>
        <div className="text-section">
            <p className="text">{todo.text}</p>
        </div>
        <div className="button-section">
            <button className="delete" onClick={() => removeTodo(todo)}>
            🗑
            </button>
        </div>
        </li>
    )
}
