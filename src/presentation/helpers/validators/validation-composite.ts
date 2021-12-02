import { Validation } from "../../protocols/validation"

export class ValidationComposite implements Validation {

  constructor(
    private readonly validator: Validation[]
  ) { }

  validate(input: any): Error {
    for (const validation of this.validator) {
      const error = validation.validate(input)
      if (error) return error
    }
  }
}