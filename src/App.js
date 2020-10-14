import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends React.Component {

    onToggleForm = () => {
        if (this.props.isDisplayForm && this.props.itemEditing.id !== '') {
            // Edit to Add
        } else {
            this.props.onToggleForm();
        }
        // Clear form everytime Add
        this.props.onEditTask({
            id: '',
            name: '',
            status: false
        })
    }

    render() {
        let { isDisplayForm } = this.props;

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Work Management</h1><hr />
                </div>
                <div className="row">

                    <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {/* Form */}
                        <TaskForm />
                    </div>

                    <div className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onToggleForm}
                        >
                            <span className="fas fa-plus mr-5"></span>Add Work
                        </button>
                        {/* Search - Sort */}
                        <TaskControl />
                        {/* List */}
                        <TaskList />
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing,
        filter: state.filter
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
