import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate(null);
  return (
    <div className="grid justify-center content-center gap-5 h-screen">
      <i>Url not found</i>
      <button className="px-2 py-1 bg-slate-400 rounded-lg" onClick={() => navigate('/ecommerce-react')}>
        Go Home
      </button>
    </div>
  );
}

export default ErrorPage;
