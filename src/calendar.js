import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";

let Calendar = () => {
  let ranges = {
    selection1: {
      startDate: Date.parse("2021-08-16"),
      endDate: Date.parse("2021-08-29"),
      key: "Denis1",
    },
    selection2: {
      startDate: Date.parse("2021-10-04"),
      endDate: Date.parse("2021-10-10"),
      key: "Denis2",
    },
    selection3: {
      startDate: Date.parse("2021-12-25"),
      endDate: Date.parse("2021-12-31"),
      key: "Denis3",
      autoFocus: false,
    },
    selection4: {
      startDate: Date.parse("2021-05-24"),
      endDate: Date.parse("2021-06-06"),
      key: "Kostya1",
      autoFocus: false,
    },
    selection5: {
      startDate: Date.parse("2021-09-05"),
      endDate: Date.parse("2021-09-18"),
      key: "Kostya2",
      autoFocus: false,
    },
    selection6: {
      startDate: Date.parse("2021-12-06"),
      endDate: Date.parse("2021-12-19"),
      key: "Kostya3",
      autoFocus: false,
    },
    selection7: {
      startDate: Date.parse("2022-01-31"),
      endDate: Date.parse("2022-02-13"),
      key: "Kostya4",
      autoFocus: false,
    },
    selection8: {
      startDate: Date.parse("2021-07-12"),
      endDate: Date.parse("2021-07-30"),
      key: "Vova1",
      autoFocus: false,
    },
    selection9: {
      startDate: Date.parse("2021-08-30"),
      endDate: Date.parse("2021-09-03"),
      key: "Vova2",
      autoFocus: false,
    },
    selection10: {
      startDate: Date.parse("2021-10-08"),
      endDate: Date.parse("2021-10-12"),
      key: "Vova3",
      autoFocus: false,
    },
    selection11: {
      startDate: Date.parse("2021-09-08"),
      endDate: Date.parse("2021-09-21"),
      key: "Gosha1",
      autoFocus: false,
    },
    selection12: {
      startDate: Date.parse("2021-06-21"),
      endDate: Date.parse("2021-06-27"),
      key: "Vanya1",
      autoFocus: false,
    },
    selection13: {
      startDate: Date.parse("2021-10-18"),
      endDate: Date.parse("2021-10-24"),
      key: "Vanya2",
      autoFocus: false,
    },
    selection14: {
      startDate: Date.parse("2021-11-15"),
      endDate: Date.parse("2021-11-28"),
      key: "Vanya3",
      autoFocus: false,
    },
    selection15: {
      startDate: Date.parse("2021-05-31"),
      endDate: Date.parse("2021-06-06"),
      key: "Yura1",
      autoFocus: false,
    },
    selection16: {
      startDate: Date.parse("2021-08-11"),
      endDate: Date.parse("2021-08-24"),
      key: "Yura2",
      autoFocus: false,
    },
    selection17: {
      startDate: Date.parse("2021-11-15"),
      endDate: Date.parse("2021-11-21"),
      key: "Yura3",
      autoFocus: false,
    },
  };
  const [state, setState] = useState({
    ...ranges,
    // selection10: {
    //   startDate: addDays(new Date(), 8),
    //   endDate: addDays(new Date(), 10),
    //   key: "selection10",
    //   autoFocus: false,
    // },
  });

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => {
        /*setState({ ...state, ...item })*/
      }}
      weekStartsOn={1}
      months={4}
      direction="horizontal"
      ranges={Object.values(ranges)}
      rangeColors={[
        "#3d91ff",
        "#3ecf8e",
        "#fed14c",
        "#6f2205",
        "#a36c22",
        "#eacc97",
        "#93b0d0",
        "#8d7361",
        "#8b8da0",
        "#c9bbae",
        "#e48826",
        "#bb99b7",
        "#ecc8c9",
        "#c6a78f",
        "#a0b3a8",
        "#b1185a",
        "#c351a2",
        "#efa9df",
        "#df9e02",
        "#5f5f87",
        "#d98c9e",
        "#390535",
        "#b36ea5",
      ]}
    />
  );
};

export default Calendar;
