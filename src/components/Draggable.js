import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Draggable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      pos: this.props.pos || this.props.initialPos,
      dragging: false,
      rel: null // position relative to the cursor
    }
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(props, state) {
    if (this.state.dragging && !state.dragging) {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    } else if (!this.state.dragging && state.dragging) {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }
  }

  onMouseDown(e) {
    // only left mouse button
    if (e.button !== 0) return
    var pos = ReactDOM.findDOMNode(this).getBoundingClientRect()
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.left + 250,
        y: e.pageY - pos.top
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }

  handleClick() {
    this.props.onClick()
    this.setState({
      active: !this.state.active
    })
  }

  onMouseUp(e) {
    this.setState({dragging: false})
    e.stopPropagation()
    e.preventDefault()
    this.props.onMouseUp(this.state.pos)
  }

  onMouseMove(e) {
    if (!this.state.dragging) return
    this.setState({
      pos: {
        x: e.pageX - this.state.rel.x,
        y: e.pageY - this.state.rel.y
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }

  render() {
    const { active, pos } = this.state
    const props = {
      onMouseDown: this.onMouseDown,
      style: {
        position: 'absolute',
        left: pos.x + 'px',
        top: pos.y + 'px'
      }
    }
    return (
      <div onClick={this.handleClick} className={active ? 'item selected' : 'item'} {...props}>
        {this.props.children}
      </div>
    )
  }
}

Draggable.defaultProps = {
  initialPos: {x: 0, y: 0}
}

export default Draggable