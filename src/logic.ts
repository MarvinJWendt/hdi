// This file is only for demo purposes.
// You can safely delete it :)

export default class {
  private _one: number = 1

  static sum (a: number, b: number): number {
    return a + b
  }

  static sumAll (...numbers: number[]): number {
    let i = 0
    numbers.forEach((num) => {
      i += num
    })
    return i
  }

  hw (): string {
    // This function is not static and needs to be imported!
    return 'Hello, World!'
  }

  /**
   * Getter $one
   * @return {number }
   */
  public get one (): number {
    return this._one
  }

  /**
   * Setter $one
   * @param {number } value
   */
  public set one (value: number) {
    this._one = value
  }


}
