import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./assets/redux/store.js";
import { FavoriteProvider } from "./context/FavouriteContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <FavoriteProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoriteProvider>
  </Provider>
);
