import html from '../core.js'

function TodoItem({ todo, index }) {
  return html`
    <li class="">
      <div class="${todo.completed && 'completed'}">
        <input 
          class="toggle"
          type="checkbox"
          ${todo.completed && 'checked'}
          onchange="dispatch('toggle', ${index})"
        >
        <label>${todo.title}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${todo.title}">
    </li>
  `
}

export default TodoItem