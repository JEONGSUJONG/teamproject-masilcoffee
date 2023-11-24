
import { ORDER_DETAIL_TYPE} from "./_types";

export const actionSetMenuOption = ({ itemPrice, menu }) => {
  return {
    type: ORDER_DETAIL_TYPE.ADD_MENU_ORDER_DETAIL,
    payload: {
      itemPrice,
      menu
    },
  };
};
export const actionSetShotOption = (shotOption) => {
  return {
    type: ORDER_DETAIL_TYPE.ADD_SHOT_ORDER_DETAIL,
    payload: shotOption,
  };
};
export const actionSetSyrupsOption = (syrupsOption) => {
  return {
    type: ORDER_DETAIL_TYPE.ADD_SYRUPS_ORDER_DETAIL,
    payload: syrupsOption,
  };
};
export const actionSetIceOption = (iceOption) => {
  return {
    type: ORDER_DETAIL_TYPE.ADD_ICE_ORDER_DETAIL,
    payload: iceOption,
  };
};
export const actionSetWhippingOption = (whippingOption) => {
  return {
    type: ORDER_DETAIL_TYPE.ADD_WHIPPING_ORDER_DETAIL,
    payload: whippingOption,
  };
};
export const actionSetDrizzleOption = (drizzleOption) => {
  return {
    type: ORDER_DETAIL_TYPE.ADD_DRIZZLE_ORDER_DETAIL,
    payload: drizzleOption,
  };
};
export const actionSetMilkOption = (milkOption) => {
  return {
    type: ORDER_DETAIL_TYPE.ADD_MILK_ORDER_DETAIL,
    payload: milkOption,
  };
};
export const actionResetOption = {
    type: ORDER_DETAIL_TYPE.RESET_ORDER_DETAIL,
    payload: null, //state로 갈거니까 아무것도 안넣을 거임
  };
