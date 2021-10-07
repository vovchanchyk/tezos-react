import { LOGIN } from "./types";

export default function userReducer(state, action) {
   const stateCopy = { ...state };
   switch (action.type) {
      case LOGIN:
         stateCopy.name = action.payload.name;
         stateCopy.email = action.payload.email;
         stateCopy.id = action.payload.id;
         stateCopy.isLogin = true;
         return stateCopy;

      default:
         return state;
   }
}
