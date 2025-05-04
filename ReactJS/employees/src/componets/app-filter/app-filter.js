import React from 'react';
import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'All employees', colored: false },
        { name: 'like', label: 'Employees for promotion', colored: false },
        { name: 'moreThan1000', label: 'Salary >$1000', colored: true }
    ];

    const buttons = buttonsData.map(({ name, label, colored }) => {
        const isActive = props.filter === name;
        const btnClass = isActive ? 'btn btn-light' : 'btn btn-outline-light';

        return (
            <button
                key={name}
                className={btnClass}
                type="button"
                data-filter={name}
                onClick={() => props.onFilterSelect(name)}
                style={colored ? {color: 'red'} : null}
            >
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;
