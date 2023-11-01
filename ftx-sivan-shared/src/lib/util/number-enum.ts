export enum NumberEnum {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
}

export enum TypeConstantEnum {
  EMAIL = 'email',
  MAX = 'max',
  MIN = 'min',
  NUMBER = 'number',
  PATTERN = 'pattern',
  REQUIRED = 'required',
  STRING = 'string',
  MIN_CHAR = 'minChar',
  ONLY_CHAR = 'only_char',
}

export enum TypePattern {
  ONLY_NUMBER = '^[0-9]+$',
  ONLY_CHAR = '^[a-zA-Z\\s]*$',
}
