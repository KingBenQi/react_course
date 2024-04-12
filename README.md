# react_course


### Explain for useState() Hook
https://juejin.cn/post/6844903999083118606
1. 调用useState() Hook 来启用函数组件中的状态。
2. useState(initialValue)的第一个参数initialValue是状态的初始值。
3. [state, setState] = useState(initialValue)返回一个包含2个元素的数组:状态值和状态更新函数。
4. 使用新值调用状态更新器函数setState(newState)更新状态。或者，可以使用一个回调setState(prev => next)来调用状态更新器，该回调将返回基于先前状态的新状态。
5. 调用状态更新器后，React 确保重新渲染组件，以使新状态变为当前状态。
