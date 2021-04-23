export default async function getData(resource){
 const url =`http://localhost:3000/${resource}`
 const response = await axios.get(url);
 return response    
}
