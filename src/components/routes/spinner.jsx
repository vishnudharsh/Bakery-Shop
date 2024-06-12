import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, useLocation } from 'react-router-dom';

function Spinners({ path = "login" }) {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect((e) => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 && navigate(`/${path}`, {
      state: location.pathname,
    });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <h1 className='text-center'>redirecting to you in {count} second</h1>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
}

export default Spinners;