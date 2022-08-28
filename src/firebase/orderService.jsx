
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from './config';

const getOrder = async (id) => {
  const ordersCollection = collection(db, 'orders')
  const refDoc = doc(ordersCollection, id)

  const response = await getDoc(refDoc)
  const data = response.data()
  data.id = response.id.trim()

  return data
}

export { getOrder }