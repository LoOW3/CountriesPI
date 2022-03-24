import axios from "axios";

export function getCountries(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type:'GET_COUNTRIES',
            payload: json.data
        })
    }
} 

export function orderCountry(order){
    return async (dispatch) => {
       dispatch({ type: 'ORDER_COUNTRY', payload: order });
     
  }};

export function filterContinent(continent){
    return {
        type: 'FILTER_CONTINENT',
        payload: continent,
    };

};
export function filterActivity(activity){
      return {
        type: 'FILTER_ACTIVITY',
        payload: activity,
      };  
  };

export function getCountry(id){
  return  (dispatch) => {
      /* var json = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({ 
          type: 'GET_COUNTRY', 
          payload: json.data 
        });
     */
        fetch(`http://localhost:3001/countries/${id}`)
        .then(res => {return res.json()})
        .then(function(data){
            return dispatch({ 
                type: 'GET_COUNTRY', 
                payload: data
              });
        })
  };
  
};
export function clearCountry(){
    return (dispatch) => {
      dispatch({ type: 'CLEAR_COUNTRY' });
    };
  };

export function createActivity(create){
return async (dispatch) => {
    var json = axios.post("http://localhost:3001/activity", create);
    return dispatch({
        type: 'CREATE_ACTIVITY',
        payload: json.data,
    });
    
};
};
export function foundCountries(name){
return async (dispatch) => {
    var json = await axios.get(`http://localhost:3001/countries?name=${name}`);
    return dispatch({ 
        type: 'FILTER_COUNTRIES', 
        payload: json.data });
    
};
};
export const foundActivities = () => {
    return async (dispatch) => {
        var json = await axios.get("http://localhost:3001/activity");
        dispatch({ 
            type: 'FOUND_ACTIVITIES', 
            payload: json.data });
        
};
};

  