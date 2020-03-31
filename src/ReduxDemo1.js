/**
 * 注意：这个版本是没有问题的
 */

import React, { memo, useRef } from "react";
import { Provider, connect } from "react-redux";
import { store, REFRESH_CAR_NEWS, REFRESH_PHONE_NEWS } from "./store";

const Alice = connect(({ car }) => ({ car }))(
  memo(({ car }) => {
    const renderTimes = useRef(0);

    renderTimes.current++;

    return (
      <div>
        Alice: got car news: {car} (renderTimes: {renderTimes.current})
      </div>
    );
  })
);

const Bob = connect(({ phone }) => ({ phone }))(
  memo(({ phone }) => {
    const renderTimes = useRef(0);

    renderTimes.current++;

    return (
      <div>
        Bob: got phone news: {phone} (renderTimes: {renderTimes.current})
      </div>
    );
  })
);

const App = connect(
  () => ({}),
  dispatch => ({ dispatch })
)(({ dispatch }) => {
  const renderTimes = useRef(0);
  renderTimes.current++;
  return (
    <div className="App">
      <Alice />
      <Bob />

      <button
        onClick={() => {
          dispatch({ type: REFRESH_CAR_NEWS });
        }}
      >
        update car news
      </button>
      <button
        onClick={() => {
          dispatch({ type: REFRESH_PHONE_NEWS });
        }}
      >
        update phone news
      </button>

      <div>App render times: {renderTimes.current}</div>
    </div>
  );
});

export default function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
