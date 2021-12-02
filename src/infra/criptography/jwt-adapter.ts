import { Encrypter, Decrypter } from '../../data/protocols/criptography'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {

  constructor(
    private readonly secret: string
  ) { }

  async encrypt(value: number): Promise<string> {
    return jwt.sign({ id: value }, this.secret)
  }
  async decrypt(ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }

}
