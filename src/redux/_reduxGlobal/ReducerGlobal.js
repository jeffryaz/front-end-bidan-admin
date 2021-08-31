import { actionTypes } from "./ConfigGlobal";

const initialAuthState = {
  client: undefined,
};

export const reducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.SetClient: {
      const { client } = action.payload;
      return { ...state, client };
    }

    default:
      return state;
  }
};
