import './styles.css'

const Item = ({ data }) => {
  return (
    <div className="item-container">
      <div className="item-image-container">
        <img className="item-image" src="https://static.wixstatic.com/media/ea6ac8_cb9b268f986043b6881d42352adf857d~mv2.jpg/v1/fill/w_924,h_510,al_c,q_90/ea6ac8_cb9b268f986043b6881d42352adf857d~mv2.jpg" alt="readerTextForYourImage" />
      </div>
      <div className="item-info">
        <div className="item-name">
          <h6 className="item-subheading">Name</h6>
          {data.name}
        </div>
        <div className="item-description">
          <h6 className="item-subheading">Description</h6>
          {data.description}
        </div>
        <div className="item-date">
          <h6 className="item-subheading">Date</h6>
          {data.date}
        </div>
      </div>
    </div>
  )
}

export default Item
