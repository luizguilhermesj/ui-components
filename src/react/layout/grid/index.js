import React from 'react';

export class Grid extends React.Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}
