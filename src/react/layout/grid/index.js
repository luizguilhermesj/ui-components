import React from 'react';

class Grid extends React.Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default Grid;
