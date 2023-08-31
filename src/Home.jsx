import  PropTypes  from 'prop-types';
const Home = ({count , settCount}) => {
  return (
    <div>
        <h1>This is Home Page</h1>
        <div>
        
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>{settCount(count)}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}


Home.propTypes = {
    count: PropTypes.number.isRequired,
    settCount: PropTypes.func.isRequired
}
export default Home;

<h1>This is Home Page</h1>