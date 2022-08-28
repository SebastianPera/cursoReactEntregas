
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const Search = ({ searchOrder }) => {

  const [search, setsearch] = useState('')

  const handleInputChange = (event) => setsearch(event.target.value)

  const submitSearch = async (event) => {
    event.preventDefault()
    searchOrder(search, event.target)
  }
  
  return(
   <>
    <p>Ingrese su código de compra:</p>
    <Formik onSubmit={ submitSearch } >
      {() => (
        <>
          <Form style={{width:'50%'}} autoComplete='off'>
            <div className="form-group">
              <Field className='form-input' placeholder='Código de compra' onChange={ handleInputChange }/>
              <div className="form-error">
                <ErrorMessage name="search" />
              </div>
            </div>
            <div className="form-buttons">
            <Link to={`/order/${search}`}>
              <button type='submit' className="btn btn-danger text-uppercase mt-2 px-2">
                Buscar
              </button>
            </Link>
            </div>
          </Form>
        </>
      )}
    </Formik>
   </>
  )
}

export default Search