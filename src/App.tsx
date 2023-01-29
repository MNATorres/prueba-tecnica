import React from "react";
import Date from "./component/dates/Date";
import { DataPicker } from "./component/dates/DatePicker";
import MainTable from "./component/table/MainTable";

function App() {
  return (
    <div>
      <Date />
      <MainTable />
    </div>
  );
}

export default App;
