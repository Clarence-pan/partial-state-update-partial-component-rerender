import { createStore } from "redux";

export const REFRESH_CAR_NEWS = "REFRESH_CAR_NEWS";
export const REFRESH_PHONE_NEWS = "REFRESH_PHONE_NEWS";

export const store = createStore(
  (state, action) => {
    switch (action.type) {
      case REFRESH_CAR_NEWS:
        return {
          ...state,
          car: "car news @" + getTime()
        };
      case REFRESH_PHONE_NEWS:
        return {
          ...state,
          phone: "phone news @" + getTime()
        };
      default:
        break;
    }

    return state;
  },
  {
    car: "",
    phone: ""
  }
);

function getTime() {
  const d = new Date();
  return d.toTimeString().replace(/ .*$/, "") + "." + d.getMilliseconds();
}
