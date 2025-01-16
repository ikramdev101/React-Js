import { createStore } from "redux";
import {Myreducer} from './reducer'

  const store=createStore(Myreducer);
  export default store;
