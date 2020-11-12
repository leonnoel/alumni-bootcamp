// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function stringEndsWith(str, ending) {
    const strEnding = str.substr(str.length - ending.length);
    return strEnding === ending;
}
  