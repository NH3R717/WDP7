export default function callAPIMiddleware({ dispatch, getState }) {
  return (next) => async (action) => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      // used to pass remaining props from dispatch action along
      // `payload` in our case
      ...props
    } = action;
    // if we don't have the `types` prop
    // we're not supposed to intercept it with this middleware... move it along
    if (!types) {
      next(action);
      return;
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every((type) => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    // If we shouldn't call the API, bail
    if (!shouldCallAPI(getState())) {
      return;
    }
    // break out types in order by request, success and failure
    const [requestType, successType, failureType] = types;
    // dispatch the request action (`REQ_ITEM`)
    dispatch({
      ...props,
      type: requestType,
    });
    try {
      // ! returning not res.data, (res.notificationsAll)
      const res = await callAPI();
      dispatch({
        ...props,
        type: successType,
        data: res.data,
      });
    } catch (err) {
      dispatch({
        ...props,
        type: failureType,
        err,
      });
    }
  };
}
