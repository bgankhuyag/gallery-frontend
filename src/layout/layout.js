import Header from './header';

const Layout = ({ children }) => {
  return (
    <div style={{backgroundColor: '#fffded', minHeight: '100vh', border: '10px solid maroon'}}>
      <Header />
      {children}
    </div>
  )
}

export default Layout;
