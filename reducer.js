import storage from './util/storage.js'

const init = {
  todos: storage.get()
}

// Cách viết add 01
// export default function reducer(state = init, action, args) {
//   switch (action) {
//     case 'add':
//       const [title] = args
//       return {
//         ...state,
//         todos: [...state.todos, {
//           title,
//           completed: false
//         }]
//       }
//     default:
//       return state
//   }
// }

// Cách viết add 02
const actions = {
  add({ todos }, title) {
    if (title) {
      todos.push({ title, completed: false })
      storage.set(todos)
    }
  },
  toggle({ todos }, index) {
    const todo = todos[index]
    todo.completed = !todo.completed
    storage.set(todos)
  },
  toggleAll({ todos }) {
    todos.forEach(todo =>
      todo.completed = completed)
    storage.set(todos)
  }
}

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args)
  return state
}

// Không gạch chéo khi chọn: code cho đoạn này ở hàm toggle,toggleAll, cõ lễ lỗi ở css
