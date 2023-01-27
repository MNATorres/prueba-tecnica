import React from 'react';
import Age from './Age';
import { DataPicker } from './DatePicker';
import Month from './Month';

export default function Date(){
    return(
        <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "100px auto",
          maxWidth: "70%",
        }}
      >
        <DataPicker titleDate="Fecha desde" />
        <DataPicker titleDate="Fecha hasta" />
        <Month />
        <Age />
      </div>
    )
}