import { CHECK_STATUS } from './constant';

const initialState = 'UNDERCONTRUCTION';

// const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_STATUS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
