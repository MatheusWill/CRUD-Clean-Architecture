import { ValidationComposite, RequiredFieldValidation, CompareFieldsValidation, EmailValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols/validation'
import { EmailValidatorAdapter } from '../../../../../infra/validators/email-validator-adapter'

export const makeLoginUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password',]) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}