
import * as Yup from 'yup';
import { useContext } from 'react';
import { CartContext } from './../context/CartContext';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import { Timestamp, getFirestore, collection, addDoc } from 'firebase/firestore';
import { confirmationAlert } from '../helpers/Alerts';
import { Link } from 'react-router-dom';
import '../estilos/Order.css'


// Objeto para validar el form

const FormValidation = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Ingrese solo letras y espacios')
        .required("Por favor ingrese un nombre y un apellido"),
    email: Yup.string()
        .email("Email inválido")
        .required("Por favor ingrese una dirección de email")
        .oneOf([Yup.ref("repeat_email")], "Los emails ingresados no coinciden"),
    repeat_email: Yup.string()
        .email("Email inválido")
        .required("Por favor ingrese una dirección de email")
        .oneOf([Yup.ref("email")], "Los emails ingresados no coinciden"),
    phone: Yup.string()
        .required("Por favor ingrese un número de teléfono")
        .matches(/^[0-9]+$/, "Por favor ingrese sólo números")
        .min(7, "El número telefónico es inválido"),
});



// Control del form

export const OrderContent = () => {
    const { cart, totalCart, deleteCart } = useContext(CartContext);
  return (
    <div>
        <Formik
          initialValues={{
              name: "",
              email: "",
              repeat_email: "",
              phone: "",
          }}
          validationSchema={FormValidation}
          onSubmit={(formData) => {
              const newOrder = {
                  buyer:{
                      name: formData.name,
                      email: formData.email,
                      phone: formData.phone,
                  },
                  items: cart.map(prod => ({
                      id: prod.id,
                      title: prod.nombre,
                      price: prod.precio,
                      quantity: prod.qty,
                  })),
                  total: totalCart(),
                  date: Timestamp.fromDate(new Date()),
              };

              // Enviar orden a Firebase
              const db = getFirestore()
              const orders = collection(db, 'orders')
              addDoc(orders, newOrder)
              .then((resp) => 
                confirmationAlert(
                    "Orden de compra exitosa",
                    `Nº de compra ${resp.id}`
                )
              )
              .catch(err => console.log(err))
              .finally(() => deleteCart())
          }}
        > 
          {() => (
            <>   
              {cart.length === 0 && (
              <h3>
                El carrito de compras está vacío. Visite nuestros <Link to='/'>productos</Link>
              </h3>
              )}

              {cart.length !== 0 && (
                <Form>
                  <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <Field name="name" className="form-input" placeholder="Ingresar nombre y apellido"/>
                    <div className="form-error">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <Field name="email" type="email" className="form-input" placeholder="Ingresar email"/>
                    <div className="form-error">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Repetir email</label>
                    <Field name="repeat_email" type="email" className="form-input" placeholder="Repetir email"/>
                    <div className="form-error">
                      <ErrorMessage name="repeat_email" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Teléfono</label>
                    <Field name="phone" type="tel" className="form-input" placeholder="Ingresar teléfono"
                    />
                    <div className="form-error">
                      <ErrorMessage name="phone" />
                    </div>
                  </div>
                  <div className="form-buttons">
                    <button type="submit" className="btn btn-danger text-uppercase mt-2 px-2">
                      Realizar compra
                    </button>
                    <button type="reset" className="btn btn-danger text-uppercase mt-2 px-2">
                      Vaciar formulario
                    </button>
                  </div>
                </Form>
              )}      
            </>     
          )}
        </Formik>
    </div>
  )
}