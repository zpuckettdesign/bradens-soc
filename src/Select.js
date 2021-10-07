import React, { useState } from "react";

export default function BasicSelect({ options, name }) {
  const [markup, setMarkup] = useState("");
  const [cost, setCost] = useState("");
  const [total, setTotal] = useState("");

  const handleChangeVendors = (e) => {
    setMarkup(e.target.value);
    console.log(markup);
  };

  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };

  const handleSubmit = (e) => {
    setTotal(
      Math.round((Number(markup) * Number(cost) + Number.EPSILON) * 100) / 100
    );

    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row row-no-gutters">
            <div className="col-xs-12 col-sm-6 col-md-8">
              <div className="select">
                <select
                  options={options}
                  value={name}
                  onChange={handleChangeVendors}
                >
                  {options.map((option) => (
                    <option key={name} value={option.markup}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="cost">
                <input
                  type="text"
                  placeholder="Cost"
                  value={cost}
                  onChange={handleChangeCost}
                />
              </div>
              <div className="btn">
                <button>Calculate</button>
              </div>
              <div className="retail">
                {total && <div>Retail: {total}</div>}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

/*   
<Autocomplete
      id="vendors"
      options={options}
      getOptionLabel={(option) => option}
      value={markup}
      style={{ width: 270 }}
      onChange={handleChangeVendors}
      renderInput={params => (
        <TextField {...params} label="Vendor" variant="outlined" 
        />
      )}

onChange={handleChangeCost}
          value={cost} */
