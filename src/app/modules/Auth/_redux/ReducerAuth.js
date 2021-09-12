import { actionTypes } from "./ConfigAuth";

const initialAuthState = {
  user: undefined,
  authToken: undefined,
  medicinePatient: undefined,
  screeningPatient: undefined,
};

export const reducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.Login: {
      const { authToken } = action.payload;
      return {
        authToken,
        user: undefined,
        medicinePatient: undefined,
        screeningPatient: undefined,
      };
    }

    case actionTypes.Register: {
      const { authToken } = action.payload;

      return {
        authToken,
        user: undefined,
        medicinePatient: undefined,
        screeningPatient: undefined,
      };
    }

    case actionTypes.Logout: {
      // TODO: Change this code. Actions in reducer aren't allowed.
      return initialAuthState;
    }

    case actionTypes.UserLoaded: {
      const data = action.payload;
      var user = Object.assign({}, data.user);
      return { ...state, user };
    }

    case actionTypes.SetUser: {
      const { user } = action.payload;
      return { ...state, user };
    }

    case actionTypes.SetMedicinePatient: {
      const { medicinePatient } = action.payload;
      return { ...state, medicinePatient };
    }

    case actionTypes.SetScreeningPatient: {
      const { screeningPatient } = action.payload;
      return { ...state, screeningPatient };
    }

    default:
      return state;
  }
};
