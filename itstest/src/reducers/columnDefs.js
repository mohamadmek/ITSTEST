const columnDefs = (state = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'},
], action) => {
    switch(action.type){
      default:
          return state;
    }
  }
  
  export default columnDefs;