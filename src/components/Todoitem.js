import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    setStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    
    render() {
        // Deconstruct
        const { id, title } = this.props.todo;

        // Construct
        return (
            <div style={this.setStyle()} >
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)} >&times;</button>
                </p>
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'crimson',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Todoitem
