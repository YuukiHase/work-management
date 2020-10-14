import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends React.Component {

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === 'status') {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        // Cancel & Close Form
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status,
            });
        }
    }

    render() {
        if (!this.props.isDisplayForm) return '';
        let { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { id !== '' ? 'Update Work' : 'Add Work' }
                        <span 
                            className="fa fa-times-circle text-right"
                            onClick={ this.onCloseForm }
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={ this.onSubmit }>
                        <div className="form-group">
                            <label>Name: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={ this.state.name }
                                onChange={ this.onChange }
                            />
                        </div>

                        <label>Status: </label>
                        <select
                            name="status"
                            className="form-control"
                            value={ this.state.status }
                            onChange={ this.onChange }
                        >
                            <option value={true}>Active</option>
                            <option value={false}>Deactive</option>
                        </select>
                        <br />

                        <div className="text-center">
                            <button type="submit" className="btn btn-warning mr-5">
                                <span className="fas fa-plus mr-5"></span>Save
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={ this.onClear }
                            >
                                <span className="fas fa-times mr-5"></span>Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        task: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
