const rowData = (state = [
    {make: 'Toyota', model: 'Celtica', price: 35000, id: 1},
    {make: 'Ford', model: 'Mondero', price: 32000, id: 2},
    {make: 'Porsche', model: 'Boxter', price: 72000, id: 3}
], action) => {
    switch(action.type){
      case "ADD":
         action.payload.id = action.id
       return state = [...state, action.payload ]
        break;
      default:
        return state;
    }
  }
  
  export default rowData;