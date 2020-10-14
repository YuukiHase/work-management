import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends React.Component {
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let filter = {
            name: name === 'filterName' ? value : '',
            status: name === 'filterStatus' ? value = + value : -1,
        };
        this.props.onFilter(filter);
        this.setState({
            [name]: value
        });
    }

    render() {
        let { tasks, filter, keyword, sortBy, sortValue } = this.props;

        // Filter on table
        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
                });
            }
            tasks = tasks.filter((task) => {
                if (filter.status === -1) {
                    return tasks;
                } else {
                    return task.status === (filter.status === 1 ? true : false)
                }
            });
        }

        // Search
        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            });
        }

        // Sort
        if (sortBy === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sortValue;
                else if (a.name < b.name) return -sortValue;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sortValue;
                else if (a.status < b.status) return sortValue;
                else return 0;
            });
        }

        // Create Item
        let elementTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                task={task}
                index={index}
            />
        })

        return (

            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">No.</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={filter.name}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                name="filterStatus"
                                className="form-control"
                                value={filter.status}
                                onChange={this.onChange}
                            >
                                <option value={-1}>All</option>
                                <option value={0}>Deactive</option>
                                <option value={1}>Active</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elementTasks}
                </tbody>
            </table>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filter,
        keyword: state.search.keyword,
        sortBy: state.sort.sortBy,
        sortValue: state.sort.sortValue
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (filter) => {
            dispatch(actions.filterTask(filter));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
