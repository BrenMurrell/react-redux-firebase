import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeToDo } from '../actions';

class ToDoListItem extends Component {
    handleClickComplete = completeTodoId => {
        const { completeToDo } = this.props;
        completeToDo(completeTodoId);
    };

    render() {
        const { todoId, todo } = this.props;
        return (
            <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
                <h4>
                    {todo.title}{" "}
                    <span
                        onClick={()=> this.handleClickComplete(todoId)}
                        className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-5 btn">
                        <i className="large material-icons">done</i>
                    </span>
                </h4>
            </div>
        );
    }
}

export default connect(null, {completeToDo})(ToDoListItem);