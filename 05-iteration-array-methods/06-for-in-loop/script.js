const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (const value in colorObj) {
  console.log(value, colorObj[value]);
  //   first 'value' indicates key names (color1, color2 etc)
  // colorObj[value] indicates the values 'red', 'blue' etc
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const index in colorArr) {
  console.log(colorArr[index]);
}

// For...in loops are mostly used if we want both the key and/or value pairs of an object literal
