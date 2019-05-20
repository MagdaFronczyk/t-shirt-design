import React from 'react';

const BrushOptions = ({ value, onChange }) => {
    return (
        <select name="" id="" value={value} onChange={onChange}>
            <option value="#E0BBE4" selected>Thistle</option>
            <option value="#957DAD">Lavender Purple</option>
            <option value="#D291BC">Pastel Violet</option>
        </select>
    )
}

export default BrushOptions;