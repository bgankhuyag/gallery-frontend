import { CM_TO_PX } from '../../../constants/AppConstants'
import './styles.css'

const Item = ({ data, handleShow }) => {
  return (
    <div className="item-container">
      <div style={data.width <= 80 ? {maxWidth: data.width * CM_TO_PX} : {maxWidth: 800}} className="item-image-container">
        <img className="item-image" onClick={() => handleShow(data)} style={data.height > data.width ? (data.height >= 100 ? { maxHeight: 800 } : { maxHeight: data.height * 10 }) : { maxHeight: 800 }} src={data.image} alt="readerTextForYourImage" />
      </div>
      <div className="item-info" style={data.width <= 80 ? {maxWidth: data.width * CM_TO_PX} : {maxWidth: 800}}>
        <span className="item-name">
          {data.name}
        </span>
      </div>
    </div>
  )
}

export default Item
