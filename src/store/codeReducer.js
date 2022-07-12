const initialState = {
  code: false,
};

const UPDATE_CODE = 'GET_CODE';

export const updateCode = code => ({
  type: UPDATE_CODE,
  code,
});

export const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CODE:
      return {
        ...state,
        token: action.code,
      };

    default:
      return state;
  }
};
