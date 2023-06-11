import axios from "axios";
 export const getData = async () => {
  let response = await axios.get(" http://localhost:8080/HRC-backend/ShowData");
  
  return response.data.data;
}