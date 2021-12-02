import {
  Authentication,
  AuthenticationModel,
  CheckAccountByEmailRepository,
  HashComparer,
  Encrypter,
  UpdateAccessTokenRepository
} from './db-authentication-protocols'

export class DbAuthentication implements Authentication {

  constructor(
    private readonly hashComparer: HashComparer,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository
  ) { }

  async auth(authentication: AuthenticationModel): Promise<string> {
    const account = await this.checkAccountByEmailRepository.checkByEmail(authentication.email)

    if (account) {
      const isValid = await this.hashComparer.compare(authentication.password, account.password)

      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.updateAccessTokenRepository.updateAccessToken(account.id, accessToken)

        return accessToken
      }
    }
    return null
  }

}