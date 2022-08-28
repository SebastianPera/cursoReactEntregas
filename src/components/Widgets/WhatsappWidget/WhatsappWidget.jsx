import { AiOutlineWhatsApp } from 'react-icons/ai'
import './WhatsappWidget.css'

const WhatsappWidget = () => {
  return(
    <a 
      className='btn-wsp'
      href="https://wa.link/nm3dmr"
      target="_blank"
      rel="noreferrer"
      title="Mandanos tu consulta!"
    >
      <AiOutlineWhatsApp aria-hidden="true" draggable="true"/>
    </a>
  )
} 

export default WhatsappWidget