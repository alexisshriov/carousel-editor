export const compare = ( a, b ) => {
  if ( a.imageCaption < b.imageCaption ){
    return -1;
  }
  if ( a.imageCaption > b.imageCaption ){
    return 1;
  }
  return 0;
}