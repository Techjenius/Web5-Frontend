import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeveloperList = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (req, res) => {
    try {
      const response = await axios.get('http://localhost:3001/api/developers');
      setDevelopers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.json(error, { status: 404 })
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch student data from the backend when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      {loading ? (
        <p className='isLoading'>Loading...</p>
      ) : (
        <ul>
          {developers.map(developer => (
            <li key={developer.id} className="">
              {developer.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeveloperList;
