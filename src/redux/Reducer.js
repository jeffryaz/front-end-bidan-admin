import * as auth from "../app/modules/Auth/_redux/ReducerAuth";
import * as client from "./_reduxGlobal/ReducerGlobal";

export default {
  auth: auth.reducer,
  clientMqtt: client.reducer,
};
