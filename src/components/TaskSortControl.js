import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends React.Component {

    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            sortBy, 
            sortValue
        });
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sort <span className="far fa-caret-square-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <button>
                                <span className="fa fa-sort-alpha-down pr-5">
                                    Name A-Z
                                </span>
                                {
                                    (this.props.sortBy === 'name' && this.props.sortValue === 1)
                                        ? <i className="fas fa-check ml-10"></i>
                                        : ''
                                }
                            </button>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <button>
                                <span className="fa fa-sort-alpha-down-alt pr-5">
                                    Name Z-A
                                </span>
                                {
                                    (this.props.sortBy === 'name' && this.props.sortValue === -1)
                                        ? <p className="fas fa-check ml-10"></p>
                                        : ''
                                }
                            </button>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <button>
                                Status is Actived
                                {
                                    (this.props.sortBy === 'status' && this.props.sortValue === 1)
                                        ? <p className="fas fa-check ml-10"></p>
                                        : ''
                                }
                            </button>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <button>
                                Status is Deactived
                                {
                                    (this.props.sortBy === 'status' && this.props.sortValue === -1)
                                        ? <i className="fas fa-check ml-10"></i>
                                        : ''
                                }
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sortBy: state.sort.sortBy,
        sortValue: state.sort.sortValue
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
