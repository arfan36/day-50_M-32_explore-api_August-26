function loadTodos() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => res.json())
        .then(data => displayTodos(data));
}
function displayTodos(todos) {
    // get the container
    const todoContainer = document.getElementById('todo-container');
    for (const todo of todos) {
        // create the child element
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3>Title: ${todo.title}</h3>
            <p>Id: ${todo.id}</p>
            <p>Is Completed: ${todo.completed === true ? 'completed' : 'not completed'}</p>
        `;
        // appendChild
        todoContainer.appendChild(todoDiv);
    }
}
loadTodos();