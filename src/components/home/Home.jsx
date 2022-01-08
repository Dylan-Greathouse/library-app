import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Please be quiet in the Library</h1>
      <p className="home">
        <Link to="/books">To the Library</Link>
      </p>
    </>
  );
}
