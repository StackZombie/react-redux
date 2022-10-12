import { createRoot } from "react-dom/client";
import { createStore, creteStore } from "redux";
import reducers from "./reducers";
import { createSelectorHook, Provider } from "react-redux";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
