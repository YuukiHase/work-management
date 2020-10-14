import React from 'react';
import TaskSearchControl from './TaskSearchControl'
import TaskSortControl from './TaskSortControl'

class Control extends React.Component {
    render() {
        return (
            <div className="row mt-15">
                {/* Search */}
                <TaskSearchControl />
                {/* Sort */}
                <TaskSortControl />
            </div>
        );
    }
}

export default Control;
