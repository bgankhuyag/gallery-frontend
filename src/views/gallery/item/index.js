import { CM_TO_PX } from '../../../constants/AppConstants'
import './styles.css'

const Item = ({ data, handleShow }) => {
  return (
    <div className="item-container">
      <div style={{maxWidth: data.width * CM_TO_PX}} className="item-image-container">
        <img className="item-image" onClick={() => handleShow(data)} style={data.height > data.width ? { maxHeight: data.height * 10} : null} src={data.image} alt="readerTextForYourImage" />
      </div>
      <div className="item-info" style={{maxWidth: data.width * CM_TO_PX}}>
        <span className="item-name">
          {data.name}
        </span>
      </div>
    </div>
  )
}

export default Item
