export default function plural(count: number, titles: string[]) {
  const lastDigit = count % 10;
  const lastTowDigit = count % 100;

  if (lastTowDigit >= 11 && lastTowDigit <= 19) {
    return titles[2];
  }

  if (lastDigit === 1) {
    return titles[0];
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return titles[1];
  }

  return titles[2];
}
