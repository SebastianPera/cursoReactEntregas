import { db } from './config'
import { getDocs, collection, getDoc, query, where, doc } from 'firebase/firestore'
  

const getProductsData = async (productsQuery) => {
  const response = await getDocs(productsQuery)
  const docs = response.docs
  const products = docs.map(doc => setIdToData(doc))

  return products
}

const getProducts = async () => {
  const productsCollection = collection(db, 'productos')
  return await getProductsData(productsCollection)
}


const setIdToData = (response) => {
  const data = response.data()
  if (data) {
      data.id = response.id
  }
  
  return data
}

const getProduct = async (id) => {
  const productsCollection = collection(db, 'productos')
  const refDoc = doc(productsCollection, id)
  const response = await getDoc(refDoc)

  return await setIdToData(response)
}

const getProductsByCategory = async (category) => {
  const productsCollection = collection(db, 'productos')
  const queryProductsByCategory = query(productsCollection, where('categoria', '==', category))

  return await getProductsData(queryProductsByCategory)
}

export { getProducts, getProduct, getProductsByCategory }