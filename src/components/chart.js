import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

// 2. Hilfsfunktion die innerhalb der komponente genutzt wird
function average(data) {
  return _.round(_.sum(data) / data.length);
}

// 1.erstellt komponente mit props
export default props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}</div>
    </div>
  );
};
