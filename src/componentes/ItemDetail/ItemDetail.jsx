import React from 'react'
import '../../estilos/ItemDetail.css'


function ItemDetail({ prod }) {

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4"> <img id="main-image" src={require(`../../../src/img/productos/${prod.imagen}`)} width="250" /> </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                  </div>
                  <div className="mt-4 mb-3">
                    <h5 className="text-uppercase">{prod.nombre}</h5>
                    <div className="price d-flex flex-row align-items-center"> 
                      <span className="act-price">${prod.precio}</span>
                    </div>
                  </div>
                  <p className="about">{prod.detalle}</p>
                  <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default ItemDetail