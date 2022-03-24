
const initialState = {
    countries: [],
    allCountries: [],
    country: [],
    activity: [],
    number: 1
}


export default function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case 'ORDER_COUNTRY':
            let countriesSort;
            if (action.payload === "Z-A") {
                countriesSort = state.countries.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                else return 0;
                });
            }
            if (action.payload === "A-Z") {
                countriesSort = state.countries.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                else return 0;
                });
            }
            if (action.payload === "Low") {
                countriesSort = state.countries.sort((a, b) => {
                return a.population - b.population;
                });
            }
            if (action.payload === "High") {
                countriesSort = state.countries.sort((a, b) => {
                return b.population - a.population;
                });
            }
            return {
                ...state,
                countries: countriesSort,
            };
        case 'FILTER_CONTINENT':
            let countriesList2 = state.allCountries;
            let filterContinent = countriesList2.filter(
              (c) => c.continent === action.payload
            );
            return {
              ...state,
              countries: filterContinent,
            };
        case 'FILTER_ACTIVITY':
            let activitiesCountries = state.allCountries;
            let filterActivity =
            action.payload === ""
                ? activitiesCountries.filter((a) => a.activity.length > 0)
                : activitiesCountries.filter(
                    (a) =>
                    a.activities &&
                    a.activities.map((f) => f.name).includes(action.payload)
                );
            return {
            ...state,
            countries: filterActivity,
            };
        case 'GET_COUNTRY':
            return {
                ...state,
                country: action.payload,
              };
        case 'CLEAR_COUNTRY':
            return {
                ...state,
                country: [],
              };
        case 'CREATE_ACTIVITY':
            return {
            ...state,
            };
        case 'FILTER_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
              };
        case 'FOUND_ACTIVITIES':
            return {
            ...state,
            activity: action.payload,
            };

        default:
            return state

    }
}


