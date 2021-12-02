export interface UpdateAccessTokenRepository {
  updateAccessToken(id: number, token: string): Promise<void>
}
