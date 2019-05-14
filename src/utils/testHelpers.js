export const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};
