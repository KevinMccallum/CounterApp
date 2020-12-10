import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Counter extends Component {
  state = {
    wrap: {
      count: 0,
      lit: true,
    },
  }

  increment = () => {
    this.setState({
      wrap: {
        ...this.state.wrap,
        count: (this.state.wrap.count += 1),
      },
    })
  }

  decrement = () => {
    this.setState({
      wrap: {
        ...this.state.wrap,
        count: (this.state.wrap.count -= 1),
      },
    })
  }

  toggle = () => {
    this.setState((prev) => ({
      wrap: {
        ...prev.wrap,
        lit: !prev.wrap.lit,
      },
    }))
  }

  render() {
    const { count, lit } = this.state.wrap
    return (
      <div className={`counter ${lit ? '' : 'dark'}`}>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button onClick={this.toggle}>On / Off</button>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
)
