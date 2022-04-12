export default function FilterDropdown({
  toggleFilter,
  filter,
  setFilter,
  cities,
  states,
}) {
  const dropdown = (data, label, name) => (
    <div className="wrapper">
      <div className="jumbotron">
        <label className="drop">
          <input type="checkbox" id="target-drop-example" />
          <span className="control">{label}</span>

          <ul className="drop-items">
            {data.map((value) => (
              <li className="item-drop" key={value}>
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setFilter({ name, value });
                  }}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
          <label
            htmlFor="target-drop-example"
            className="overlay-close"
          ></label>
        </label>
      </div>
    </div>
  );
  return (
    <div className="position-relative">
      <div
        style={{ display: toggleFilter ? "flex" : "none" }}
        className="filter-body bg-dark  "
      >
        <div>Filters</div>
        {dropdown(states, "States", "state")}
        {dropdown(cities, "Cities", "city")}
      </div>
    </div>
  );
}
