export const getCountryAction = (a) => async (dispatch) => {

    let response = await fetch('https://restcountries.com/v3.1/all')

    let data = await response.json();

    dispatch({
        type: "ADD_COUNTRY",
        payload: data
    })
}