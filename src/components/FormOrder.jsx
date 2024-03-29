
import { useContext } from 'react';
import { Timestamp, getFirestore, collection, addDoc, documentId, query, where, writeBatch, getDocs } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import * as Yup from 'yup';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import { confirmationAlert } from '../helpers/Alerts';
import { useNavigate } from 'react-router-dom';
import '../styles/Order.css'


// Objeto para validar el form

const FormValidation = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/, 'Ingrese solo letras y espacios')
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
    .matches(/^[0-9-+]+$/, "Por favor ingrese sólo números")
    .min(7, "El número telefónico es inválido"),
});


// Control del form

export const FormOrder = () => {
  const { cart, totalCart, deleteCart } = useContext(CartContext);
  const navigate = useNavigate()

  async function formData(dataForm) {
    let newOrder = {
      buyer:{
        name: dataForm.name,
        email: dataForm.email,
        phone: dataForm.phone,
      },
      items: cart.map(prod => ({
        id: prod.id,
        title: prod.nombre,
        price: prod.precio,
        quantity: prod.qty,
      })),
      total: totalCart(),
      date: Timestamp.fromDate(new Date()),
    }

    // Enviar orden a Firebase
    const db = getFirestore()
    const orders = collection(db, 'orders')
    addDoc(orders, newOrder)
    .then((resp) => 
      // confirmationAlert(
      //   "Orden de compra exitosa",
      //   `Nº de compra ${resp.id}`
      // )
      navigate('/order/'+resp.id)
    )
  
    .catch(err => console.log(err))
    .finally(() => deleteCart())


    // Actualizar stock
    const queryCollectionStock = collection(db, 'productos')
    const upDateStock = query(queryCollectionStock, where(documentId(), 'in', cart.map(prod => prod.id)))
    const batch = writeBatch(db)
  
    await getDocs(upDateStock).then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cart.find(prod => prod.id === res.id).qty
    })))
    batch.commit()
  }
  

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
        onSubmit={formData}
      > 
        {() => (
          <>   
            {cart.length !== 0 && (
              <Form style={{width:'80%', backgroundColor:'#F2F2F2', padding:'1rem', borderRadius:'20px'}}>
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
                <small style={{fontWeight:'bold', fontSize:'0.7rem'}}>Sus datos correctos nos permitirán entregarle los productos de forma correcta y oportuna.</small>
                <div className="form-buttons">
                    <button type="submit" className="btn btn-danger text-uppercase mt-2 px-2">
                      Terminar Compra
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
