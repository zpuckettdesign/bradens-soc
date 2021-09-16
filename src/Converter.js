import React from 'react'

export default function Converter() {
    return (
        <div className="converter">
            <select className="selector">
                <option value="vendor">Select Vendor...</option>
            </select>
            <input className="cost-input" type="number" placeholder="$ Item Cost " />
            <button className="submit" type="button">Submit</button>
        </div>
    )
}


