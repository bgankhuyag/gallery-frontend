import { useState, useEffect } from 'react';
import {
  Spin
} from '../../components'

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){ setLoading(false) }, 3000);
  }, []);

  return (
    <>
    {
      loading ?
      <Spin /> :
      <h2>Home</h2>
    }
    </>
  );
}

export default Home;
