export default class Building {
  constructor(sqft) {
    if (
      new.target !== Building &&
      typeof this.evacuationWarningMessage !== "function"
    ) {
      throw new Error(
        "Subclasses of Building must implement evacuationWarningMessage"
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
