export interface Encrypter {
  encrypt(value: number): Promise<string>
}