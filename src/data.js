export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};

export const convertDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = match[1] ? match[1].replace('H', '') : 0;
  const minutes = match[2] ? match[2].replace('M', '') : 0;
  let seconds = match[3] ? match[3].replace('S', '') : 0;

 
  seconds = String(seconds).padStart(2, '0');

  return `${hours ? hours + ':' : ''}${minutes}:${seconds}`;
};
