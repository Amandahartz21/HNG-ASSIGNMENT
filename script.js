/**
 * Toggle custom checkbox button
 * Updates aria-checked and visual state
 */
function toggleCheckbox(btn) {
    const isChecked = btn.getAttribute('aria-checked') === 'true';
    const nextState = !isChecked;
    
    btn.setAttribute('aria-checked', nextState);
    
    const card = btn.closest('[data-testid="test-todo-card"]');
    const status = card.querySelector('[data-testid="test-todo-status"]');
    
    if (nextState) {
        card.classList.add('done');
        status.textContent = "Done";
    } else {
        card.classList.remove('done');
        status.textContent = "Pending";
    }
}

/**
 * Simple Edit using browser prompts
 */
function editTodo(button) {
    const card = button.closest('[data-testid="test-todo-card"]');
    const titleEl = card.querySelector('[data-testid="test-todo-title"]');
    const descEl = card.querySelector('[data-testid="test-todo-description"]');

    const newTitle = prompt("Edit Title:", titleEl.textContent);
    const newDesc = prompt("Edit Description:", descEl.textContent);

    if (newTitle !== null) titleEl.textContent = newTitle;
    if (newDesc !== null) descEl.textContent = newDesc;
}

/**
 * Simple Delete
 */
function deleteTodo(button) {
    const card = button.closest('[data-testid="test-todo-card"]');
    if (confirm("Permanently delete this task?")) {
        card.remove();
    }
}
