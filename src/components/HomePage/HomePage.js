import React, { useState, useEffect } from 'react';
import { myBasket } from '../../App';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);
  const {setMyPage}= React.useContext(myBasket)

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
        const data= await response.json()
        setJokes(data.jokes)
        
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, []);

  const logOut=()=>{
    setMyPage('login')
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card" style={{ marginTop: '0.5em', fontFamily: 'Roboto' }}>
            <div className="card-header" style={{ backgroundColor: '#425e19', color: 'white' }}>
              Jokes
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <tbody>
                  {jokes.map((joke) => (
                    <tr key={joke.id}>
                      <td>{joke.joke}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center">
              <button className="btn btn-danger" onClick={logOut}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  


