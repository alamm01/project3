import { Link } from 'react-router-dom';
import FlipCard from '../FlipCard';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      <div className='d-flex'>

      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card m-3">
          <FlipCard front= {thought.front} back={thought.back} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThoughtList;
