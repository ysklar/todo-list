const todoIinput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDelete);

function addTodo(event) {
	event.preventDefault();

	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	const newTodo = document.createElement('li');
	newTodo.innerText = todoIinput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	const buttonsWrapper = document.createElement('div');
	buttonsWrapper.classList.add('buttons-wrapper');
	todoDiv.appendChild(buttonsWrapper);

	const completedButton = document.createElement('button');
	completedButton.innerText = 'Complete';
	completedButton.classList.add('complete-button');
	buttonsWrapper.appendChild(completedButton);

	const trashButton = document.createElement('button');
	trashButton.innerText = 'Delete';
	trashButton.classList.add('trash-button');
	buttonsWrapper.appendChild(trashButton);

	if (newTodo.innerText !== '') {
		todoList.appendChild(todoDiv);
	} else {
		const emptyTodo = document.createElement('div');
		emptyTodo.classList.add('empty-todo-item');
		emptyTodo.innerHTML = '<p>You did not enter what to do</p>';
		todoList.prepend(emptyTodo);

		setTimeout(() => {
			emptyTodo.remove();
		}, 1000);
	}

	todoIinput.value = '';
}

function checkDelete(event) {
	if (event.target.classList.contains('trash-button')) {
		const todo = event.target.closest('.todo');
		todo.classList.add('deleted');
		todo.addEventListener('transitionend', () => {
			todo.remove();
		});
	}

	if (event.target.classList.contains('complete-button')) {
		const todo = event.target.closest('.todo');
		todo.classList.toggle('completed');
		event.target.classList.toggle('completed');

		if (event.target.classList.contains('completed')) {
			event.target.innerText = 'Completed';
		} else {
			event.target.innerText = 'Complete';
		}
	}
}