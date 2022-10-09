
import { useEffect, useState } from 'react';
import SourceContext from './Context/SourceContext';
import {
  Route,
  Routes
} from "react-router-dom";
import Sensor from './Pages/Sensor';
import Table from './Pages/Table';

function App() {
  return (
    <SourceContext>
      <Routes>
        <Route path="" element={<Sensor />}>
        </Route>
        <Route path="table" element={<Table />}>
        </Route>
        {/* <Route path="*" element={ErrorPage404} /> */}
      </Routes>
    </SourceContext>
  );
}

export default App;
