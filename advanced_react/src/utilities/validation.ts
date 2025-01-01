export function isEmail(value: string) {
  return value.includes('@');
}

export function isNotEmpty(value: string) {
  return value.trim() !== '';
}

export function hasMinLength(value: string, minLength: number) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value: string, otherValue: string) {
  return value === otherValue;
}

export function isEmailValid(value: string): boolean {

  const emailFormat = /^[^\\s@]+@[\\w]+\\.[\\w]{3,4}$/
  return emailFormat.test(value);
}

console.log(isEmailValid('abg@email.com'));
