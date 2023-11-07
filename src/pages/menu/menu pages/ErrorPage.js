import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate(null);
  return (
    <div>
      <p>The Adrees is not found.</p>
      <button className="my-5 py-1 px-3 bg-zinc-300 rounded-lg" onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
