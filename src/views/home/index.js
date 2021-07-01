import { useState, useEffect } from 'react';
import {
  Spin
} from '../../components'
import { data } from '../../demoData'
import Item from './item'

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){ setLoading(false) }, 500);
  }, []);

  return (
    <>
    {
      loading ?
      <Spin size={40} />
      :
      <div style={{overFlow: 'scroll'}}>
      {
        data.map((elem, i) => (
          <Item key={i} data={elem} />
        ))
      }
      </div>
    }
    </>
  );
}

export default Home;
