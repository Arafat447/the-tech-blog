import { createStore } from "redux";
import reducer from "./Filters/reducer";

const store = createStore(reducer)

export default store ;