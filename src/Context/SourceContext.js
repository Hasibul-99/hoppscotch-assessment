import React, { createContext, useState, useEffect } from 'react'

export const sensorTableContext = createContext();

const SourceContext = props => {
  const [sensor, setSensor] = useState([]);
  const [table, setTable] = useState([]);

  useEffect(() => {
    let source = new EventSource("https://hopp-frontend-api.herokuapp.com/stream");

    source.onerror = function () {
      console.log("error occured");
      source.close();
    };

    // source.onmessage = function (event) {
    //   console.log("received");
    // };
    source.addEventListener("table", function (e) {
      let item = JSON.parse(e.data);
      if (item.table_data) {
        table.unshift(item.table_data);
        setTable([...table]);
      }
    })
    source.addEventListener("sensor", function (e) {
      let item = JSON.parse(e.data);
      if (item.sensor_data) {
        sensor.push(item.sensor_data);
        setSensor([...sensor]);
      }
    })
  }, [])

  return (
    <sensorTableContext.Provider
      value={{
        sensor,
        table
      }}>
      {props.children}
    </sensorTableContext.Provider>
  )
}

export default SourceContext;