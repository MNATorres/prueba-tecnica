import React from "react";
import { DataPicker } from "./component/DatePicker";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "100px auto",
          maxWidth: "40%",
        }}
      >
        <DataPicker titleDate="Fecha desde" />
        <DataPicker titleDate="Fecha hasta" />
      </div>
    </div>
  );
}

export default App;
