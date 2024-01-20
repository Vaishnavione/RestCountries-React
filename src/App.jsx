import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryAction } from "./redux/country.action";

function App() {
  const countries = useSelector(state => state.countries);
  console.log(countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryAction(10))
  }, [countries.length])

  return (
    <div className="container">
      <div className="row">
        {
          countries.length > 0 && countries.map((country, index) => (
            <div className="col-3 mt-4" key={index}>
              <div className="card" >
                <img src={country.flags.svg} className="card-img-top" alt={country.name.common} />
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                </div>
              </div>
            </div>
          ))
        }


      </div>
    </div>
  );
}

export default App;

