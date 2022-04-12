import { useState } from "react";
import FilterDropdown from "./filterDropdown";
import { Link } from "next/link";

export default function Navbar({ selected, setSelected, numArr, ...rest }) {
  const [toggleFilter, setToggleFilter] = useState(false);

  const headings = [
    { name: "Nearest Rides" },
    { name: "Upcoming Rides", len: numArr[0] },
    { name: "Past Rides", len: numArr[1] },
  ];

  // console.log(numArr);

  return (
    <div className="sticky-top flex-row d-flex navbar-back justify-content-between text-light p-3">
      <div
        className="d-flex flex-row justify-content-between w-30"
        style={{ paddingLeft: "33px" }}
      >
        {headings.map(({ name, len }) => (
          <button
            key={name}
            className={`tog-select  ${
              name === selected ? "active underline" : ""
            }`}
            onClick={() => setSelected(name)}
          >
            <h6>
              {name}
              {len || len === 0 ? " (" + len + ")" : ""}
            </h6>
          </button>
        ))}
      </div>
      <div>
        <img src="/Vector.svg" alt="svg" />
        <button
          className="tog-select "
          style={{ paddingRight: "33px" }}
          onClick={() => setToggleFilter(!toggleFilter)}
        >
          Filter
        </button>
      </div>

      {toggleFilter && <FilterDropdown toggleFilter={toggleFilter} {...rest} />}
    </div>
  );
}
