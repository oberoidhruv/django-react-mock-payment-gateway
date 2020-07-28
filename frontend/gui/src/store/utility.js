export const updateObject = (oldObject, updatetdProperties) => {
  return {
    ...oldObject,
    ...updatetdProperties,
  };
};
