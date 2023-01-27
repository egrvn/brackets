module.exports = function check(str, bracketsConfig) {
  let bracket = bracketsConfig
    .reduce((arr, val) => arr
    .concat(val.join('')), []);

  for (let i = 0; i <= bracket.length; i++) {
    let template = bracket[i];
    while (str.includes(template)) {
      str = str.replace(template, '');
      i = -1;
    }
  }
  return str.length === 0;
}
