import React from 'react';

import './Pagination.css';

class Pagination extends React.Component {
    render() {
        return (
            <div className="pagination-section ui small pagination menu">
            <a href="/" className="active item">1</a>
            <a href="/" className="disabled item">...</a>
            <a href="/" className="active item">10</a>
            <a href="/" className="active item">11</a>
            <a href="/" className="active item">12</a>
            </div>
        );
    }
}

export default Pagination;