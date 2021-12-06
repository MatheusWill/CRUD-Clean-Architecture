export interface DeleteAccountModel {
  email: string
}

export interface DeleteAccount {
  delete(deleteAccountModel: DeleteAccountModel): Promise<any>
}