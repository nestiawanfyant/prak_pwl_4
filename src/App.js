import {Helmet} from "react-helmet";
import logo from './logo.svg';
import './App.css';

import jsonId from "./jsonId.json";
import { data } from "./dummy"

function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonId)}
        </script>
      </Helmet>

      <div className="columRow">
          <div className="container flex">
            {
              data.map((data) => (
                <>
                    <div className="ImagesCover">
                        <img src={data.image} alt="Italian Trulli" />
                    </div><div className="textDescription">
                        <p className="brandName"> { data.brand } </p>
                        <h3 className="titleName"> { data.name } </h3>
                        <p className="deskripsi">
                          { data.description }
                        </p>
                    </div>
                </>
              ))
            }
          </div>
      </div>
  </>
  );  
}

export default App;
