import React from 'react';
import ButtonDate from './ButtonDate';
import { DataPicker } from './DatePicker';
import SelectAge from './SelectAge';
import { SelectMonth} from './SelectMonth';

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
        <SelectMonth />
        <SelectAge />
        <ButtonDate />
      </div>
    )
}