import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class OldValue extends PureComponent {
  render() {
    return <div>{this.props.value}</div>
  }
}

class Counter extends Component {
  state = {
    wrap: {
      count: 0,
      lit: true,
      oldValues: [],
    },
  }

  increment = () => {
    this.setState({
      wrap: {
        ...this.state.wrap,
        count: (this.state.wrap.count += 1),
        oldValues: [...this.state.wrap.oldValues, this.state.wrap.count],
      },
    })
  }

  decrement = () => {
    this.setState({
      wrap: {
        ...this.state.wrap,
        count: (this.state.wrap.count -= 1),
        oldValues: [...this.state.wrap.oldValues, this.state.wrap.count],
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
      <div>
        <div className={`counter ${lit ? '' : 'dark'}`}>
          <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span className="count">{count}</span>
            <button onClick={this.increment}>+</button>
          </div>
          <button onClick={this.toggle}>On / Off</button>
        </div>
        <ul>
          {this.state.wrap.oldValues.map((value, index) => (
            <li key={index}>
              <OldValue value={value} />
            </li>
          ))}
        </ul>
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
