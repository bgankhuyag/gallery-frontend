import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
  Spin
} from '../../components'
import { data } from '../../demoData'
import Item from './item'
import './styles.css'

const Gallery = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){ setLoading(false) }, 500);
  }, []);

  const handleShow = (elem) => {
    setSelected(elem)
    setVisible(true)
  }

  const handleClose = () => setVisible(false)

  return (
    <>
    {
      loading ?
      <Spin size={40} />
      :
      <div className="items">
      {
        data.map((elem, i) => (
          <Item key={i} data={elem} handleShow={handleShow} />
        ))
      }
      </div>
    }
    {
      selected ?
      <Modal show={visible} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img className="selected-image" src={selected.image} alt="readerTextForYourImage" />
          <div className="selected-info">
            <h4 className="selected-name">{selected.name}</h4>
            <p className="selected-description">{selected.description}</p>
            <p className="selected-date">{selected.date}</p>
            <p className="selected-size">{selected.width}cmx{selected.height}cm</p>
          </div>
        </Modal.Body>
      </Modal>
      : null
    }
    </>
  );
}

export default Gallery;
