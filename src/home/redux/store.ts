import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

// const middlewares: Middleware[] = [];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

const store = createStore(rootReducer, applyMiddleware(logger));

export { store };
