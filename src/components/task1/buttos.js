import React from "react";

export default ({ onClick, units = [] }) => {
  return (
    <div className="buttons-conteiner">
      {units.map((unit) => (
        <div
          class="svg-wrapper"
          onClick={() => onClick(unit.unit_name, unit.koef_to_m)}
        >
          <svg height="60" width="100" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape1" height="60" width="100" />
            <rect class="shape2" height="60" width="100" />

            <div class="text"> {unit.unit_name} </div>
          </svg>
        </div>
      ))}
    </div>
  );
};
