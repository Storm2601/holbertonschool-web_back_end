export default class Currency {
  constructor(code, name) {
    this.setCode(code);
    this.setName(name);
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this.setCode(value);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this.setName(value);
  }

  setCode(value) {
    if (typeof value !== "string") {
      throw new TypeError("Code must be a string");
    }
    this._code = value;
  }

  setName(value) {
    if (typeof value !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
