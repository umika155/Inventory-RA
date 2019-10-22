import React from 'react'

const CategorySummary = ({category}) => {
    return (
        <div className="card z-depth-0 category-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{category.name}</span>
                <p>Added by Ummi Salaama</p>
                <p className="grey-text">20th October, 2am</p>
            </div>
        </div>
    )
}

export default CategorySummary