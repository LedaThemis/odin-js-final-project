import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main
      style={{
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        color: 'rgb(83, 100, 113)',
      }}
    >
      <span>Hmm...this page doesn’t exist.</span>
      <button style={{ backgroundColor: 'rgb(29, 155, 240)', border: 'none', borderRadius: '9999px' }}>
        <Link
          to="/home"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: '600',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '15px',
          }}
        >
          <p style={{ margin: 0, padding: '12px' }}>Go back to home</p>
        </Link>
      </button>
    </main>
  );
};

export default NotFound;
