import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends React.Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdate = () => {
        // Edit to Edit or Add to Edit
        this.props.onEditTask(this.props.task);
        this.props.onOpenForm();
    }

    render() {
        let { task, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status === true ? 'label label-success pt us-none' : 'label label-danger pt us-none'}
                        onDoubleClick={this.onUpdateStatus}
                    >
                        {task.status === true ? 'Active' : 'Deactive'}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning mr-5"
                        onClick={ this.onUpdate }
                    >
                        <span className="fas fa-pencil-alt mr-5"></span>Edit
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={ this.onDelete }
                    >
                        <span className="fa fa-trash mr-5"></span>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDelete: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
