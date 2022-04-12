export default function FilterDropdown({
  toggleFilter,
  filter,
  setFilter,
  cities,
  states,
}) {
  const dropdown = (data, label) => (
    <div className="wrapper">
      <div className="jumbotron">
        <label className="drop">
          <input type="checkbox" id="target-drop-example" />
          <span className="control">{label}</span>

          <ul className="drop-items">
            {data.map((val) => (
              <li className="item-drop">
                <a target="_blank" href="https://codepen.io/robsonklein23">
                  {val}
                </a>
              </li>
            ))}
          </ul>
          <label for="target-drop-example" className="overlay-close"></label>
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
        {dropdown(states, "States")}
        {dropdown(cities, "Cities")}
      </div>
    </div>
  );
}
