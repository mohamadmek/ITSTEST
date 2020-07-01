import React from 'react';
import { useSelector } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

 const Posts = () => {
     const cars = useSelector(state => state.columnDefs);
     let carsData = useSelector(state => state.rowData);
    const [gridApi, setGridApi] = React.useState(null);
    const [defaultColDef, setDefaultColDef] = React.useState({
        flex: 1,
        minWidth: 100,
        editable: true,
    })
    const onGridReady = params => {
        setGridApi(params.api);
     }

    const onSelectionChanged = () => {
        var selectedRows = gridApi.getSelectedRows();
        console.log('sleccc', selectedRows);
      };

    return (
        <div style={{ width: '60%', height: '200px',margin: '0 auto' }}>
        <div 
            className='ag-theme-alpine'
            id="myGrid"
            style={{
                width: '100%',
                height: '100%',
                margin: '0 auto'
            }}
        >
    
            <AgGridReact
            columnDefs={cars}
            rowData={carsData}
            editType='fullRow'
            // rowSelection='single'
            defaultColDef={defaultColDef}
            enterMovesDown={true}
            enterMovesDownAfterEdit={true}
            onGridReady={onGridReady}
            // onSelectionChanged={onSelectionChanged}
            domLayout='autoHeight'
            
             />

        </div>
        </div>
    )
}

export default Posts;