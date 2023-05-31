import axios from 'axios';

export const useFetch = async (state) =>{
  const peticion = await axios.get('http://localhost:3000/api/establecimientos');
   state(peticion.data);
}