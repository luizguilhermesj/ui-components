import React from 'react';

class Grid extends React.Component {
    render() {
        return (
            <div style={{border: "1px solid black"}}>
                { this.props.children }
            </div>
        );
    }
}

export default Grid;
