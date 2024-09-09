export function intToRoman(num: number): string {
  const str = [""];
  convert(num, str);
  return str[0];
}

function convert(num: number, str: string[]) {
  if (num < 5) {
    switch (num) {
      case 1:
        str[0] += "I";
        break;
      case 2:
        str[0] += "II";
        break;
      case 3:
        str[0] += "III";
        break;
      case 4:
        str[0] += "IV";
        break;
      case 5:
        str[0] += "V";
        break;
    }
    return;
  } else if (num >= 1000) {
    str[0] += "M";
    num -= 1000;
  } else if (num >= 900) {
    str[0] += "CM";
    num -= 900;
  } else if (num >= 500) {
    str[0] += "D";
    num -= 500;
  } else if (num >= 400) {
    str[0] += "CD";
    num -= 400;
  } else if (num >= 100) {
    str[0] += "C";
    num -= 100;
  } else if (num >= 90) {
    str[0] += "XC";
    num -= 90;
  } else if (num >= 50) {
    str[0] += "L";
    num -= 50;
  } else if (num >= 40) {
    str[0] += "XL";
    num -= 40;
  } else if (num >= 10) {
    str[0] += "X";
    num -= 10;
  } else if (num >= 9) {
    str[0] += "IX";
    num -= 9;
  } else if (num >= 5) {
    str[0] += "V";
    num -= 5;
  }
  convert(num, str);
}
