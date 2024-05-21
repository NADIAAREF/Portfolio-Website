/*utility function uses the images inside assets folder*/

// export const getImageUrl = (path /*this path will be relative*/) => {
//   /*this function constructs absolute path */
//   return new URL('assets/${path}', import.meta.url).href;
// };
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
