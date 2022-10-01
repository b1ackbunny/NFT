import { Crypto } from "./Crypto/Crypto";
import data from './data.json'

export const App = () => {
  return (
    <div>
      <Crypto data={data.data}/>
    </div>
  );
};
