import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        })
    }

    onKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.onSearch();
        }
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {
        let { keyword } = this.state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                <div className="input-group">
                    <input
                        name="keyword"
                        type="text"
                        className="form-control"
                        placeholder="Enter key words..."
                        value={keyword}
                        onChange={this.onChange}
                        onKeyDown={this.onKeyDown}
                    />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-primary"
                            onClick={this.onSearch}
                        >
                            <span className="fa fa-search mr-5"></span>Search
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keywork) => {
            dispatch(actions.searchTask(keywork));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
