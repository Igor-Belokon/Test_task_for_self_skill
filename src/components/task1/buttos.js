import React from "react";

export default ({ onClick, units = [] }) => {
  return (
    <div className="buttons-conteiner">
      {units.map((unit) => (
        <button
          className="button-comp"
          onClick={() => onClick(unit.unit_name, unit.koef_to_m)}
        >
          {unit.unit_name}
        </button>
      ))}
    </div>
  );
};
