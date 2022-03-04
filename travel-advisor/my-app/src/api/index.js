import axios from "axios";

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData= async (sw, ne) =>{
    try{
        const {data: {data}}= await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '80e345979dmsh1df0f8635f64adbp1ba6a8jsn7d351f259ffb'
            }
          });

        return data;
    } catch(error){
        console.log(error);
    }
}