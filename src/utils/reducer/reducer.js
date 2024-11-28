export const createAction = (type, payload) => {
  // if (!type) {
  //   throw new Error("Action type is required!");
  // }
  return { type, payload };
};
