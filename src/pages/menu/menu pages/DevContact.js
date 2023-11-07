import { useNavigate } from 'react-router-dom';

const DevContact = () => {
  const navigate = useNavigate(null);
  return (
    <section className="p-10">
      <p>hi i'm Fauzi. i'm a human</p>
      <div>
        <p>email. i wanna know yor thoughts about this. any feedback are open</p>
        <a className="text-blue-500" href="mailto:fauzifarzancendekiawan@gmail.com">
          fauzifarzancendekiawan@gmail.com
        </a>
      </div>
      <div>
        <p>linkedin.Let's do connection. oookkaayy....</p>
        <a className="text-blue-500" href="https://www.linkedin.com/in/ahmad-fauzi-643993276/?originalSubdomain=id">
          Ahmad Fauzi LinkedIn
        </a>
      </div>
      <div>
        <p>Github. this is open source product, btw</p>
        <a className="text-blue-500" href="https://github.com/Ziputrafa">
          Ahmad Fauzi Github
        </a>
      </div>
      <button className="my-5 py-1 px-3 bg-zinc-300 rounded-lg" onClick={() => navigate('/')}>
        Go to Home
      </button>
    </section>
  );
};

export default DevContact;
