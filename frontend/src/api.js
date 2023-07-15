import axios from 'axios';

export const getAllData = async () => {
  try {
    const response = await axios.get(`${"http://localhost/8080/reviews"}`, {
      params: {
       
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};
