export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),[first])
        .filter(x => x && x !== true || x === 0)
        .join('')
}

export function createStore(reducer) {
    let state = reducer()

    const roots = new Map()

    function render() {
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        connect(selector = state => state) {
            return component => (props, ...args) =>
                component(Object.assign({}, props, selector(state), ...args))
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}

// root, component là cái gì
// 3 hàm cuối đọc khá khó hiểu viết bình thường thì ntn


// attach viết đầy đủ
// attach: function(component, root) {
//     roots.set(root, component)
//     render()
// },

// // connect viết đầy đủ
// connect: function(selector) {
//     if (selector === undefined) {
//         selector = function (state) {
//             return state
//         }
//     }

//     return function (component) {
//         return function (props, ...args) {
//             return component(
//                 Object.assign({}, props, selector(state), ...args)
//             )
//         }
//     }
// },

// // dispatch viết đầy đủ
// dispatch: function(action, ...args) {
//     state = reducer(state, action, args)
//     render()
// }