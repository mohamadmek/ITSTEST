import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { useSelector, useDispatch } from 'react-redux';

 let CarsForm = ({handleSubmit}) => { 

  let carsData = useSelector(state => state.rowData);
  const dispatch = useDispatch();
  

  const submit = (values, dispatch) => {
    // let carsData = useSelector(state => state.rowData);
   let id = carsData.length + 1;
    dispatch({type: 'ADD', payload: values, id: id})
    dispatch(reset('contact'));
    }

    // const renderField = ({name, label, input, meta: { touched, error }}) => (
    //   <div className="input-row">
    //     <label>{label}</label>
    //     <input name={name} {...input.input} required type="text" style={{margin: '0 5px'}}/>
    //     {touched && error &&
    //      <span className="error">{error}</span>}
    //   </div>
    // )

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0',}}>
        <div>
          <label htmlFor="make">Make</label>
          <Field name="make" component="input" required type="text" style={{marginRight: '20px', marginLeft:'10px'}} />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Field name="model"  component="input" required type="text" style={{marginRight: '20px !important', marginLeft:'10px'}} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Field name="price" component="input" required type="text" style={{marginRight: '20px', marginLeft:'10px'}} />
        </div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}


 CarsForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(CarsForm)

export default CarsForm

