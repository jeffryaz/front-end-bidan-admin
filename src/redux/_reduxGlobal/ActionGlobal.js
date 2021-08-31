import { actionTypes } from "./ConfigGlobal";

export const actions = {
  setClient: (client) => ({ type: actionTypes.SetClient, payload: { client } }),
};
