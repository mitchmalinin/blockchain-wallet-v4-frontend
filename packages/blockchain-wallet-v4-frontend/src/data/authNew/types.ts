import { StringDecoder } from 'node:string_decoder'

import { RemoteDataType } from 'blockchain-wallet-v4/src/types'

import * as AT from './actionTypes'

export enum LoginSteps {
  CHECK_EMAIL = 'CHECK_EMAIL',
  ENTER_EMAIL_GUID = 'ENTER_EMAIL_GUID',
  ENTER_PASSWORD = 'ENTER_PASSWORD',
  ENTER_TWO_FACTOR = 'ENTER_TWO_FACTOR',
  LOADING = 'LOADING',
  VERIFICATION_MOBILE = 'VERIFICATION_MOBILE'
}

export type LoginFormType = {
  email: string
  guid: string
  guidOrEmail: string
  password: string
  step: LoginSteps
  twoFA?: number | string
}
// TODO: CHECK ON UNDEFINES

export type LoginObject = {
  email: string
  email_code: string
  guid: string
  is_mobile_setup: string | boolean
}

export type RestoreWalletType = {
  email: string | undefined
  language: string
  mnemonic: string
  network?: string
  password: string
}

export type LoginDataType = {
  code?: string
  guid: string
  mobileLogin?: boolean
  password: string
  sharedKey?: string
}

export type Reset2faType = {
  code: string
  email: string
  guid: string
  message?: string
  newEmail?: string
  secretPhrase?: string
  sessiontoken: StringDecoder
}

export type RegisterType = {
  email: string
  language: string
  password: string
}

// state

export type AuthState = {
  auth_type: number
  firstLogin: boolean
  isAuthenticated: boolean
  isLoggingIn: boolean
  login: RemoteDataType<string, any>
  metadataRestore: RemoteDataType<string, string>
  mobileLoginStarted: boolean
  registerEmail?: string
  reset_2fa: RemoteDataType<string, any>
  restoring:RemoteDataType<string,any>
  registering: RemoteDataType<string, any>
  secureChannelLogin: RemoteDataType<string,any>
}

// actions

interface AuthenticateActionType {
  type: typeof AT.AUTHENTICATE
}
interface InitalizeLoginSuccessActionType {
  type: typeof AT.INTIALIZE_LOGIN_SUCCESS
}

interface InitializeLoginLoadingActionType {
  type: typeof AT.INTIALIZE_LOGIN_LOADING
}

interface InitializeLoginFailureActionType {
  type: typeof AT.INTIALIZE_LOGIN_FAILURE
}

interface LoginGuidSuccessActionType {
  type: typeof AT.LOGIN_GUID_SUCCESS
}

interface LoginGuidLoadingActionType {
  type: typeof AT.LOGIN_GUID_LOADING
}

interface LoginGuidFailureActionType {
  type: typeof AT.LOGIN_GUID_FAILURE
}

interface LoginActionType {
  payload: {
    email: string
  }
  type: typeof AT.LOGIN
}
interface LoginSuccessActionType {
  payload: {
    data: LoginObject
  }
  type: typeof AT.LOGIN_SUCCESS
}

interface LoginFailureActionType {
  payload: {
    err: string
  }
  type: typeof AT.LOGIN_FAILURE
}

interface LoginLoadingActionType {
  type: typeof AT.LOGIN_LOADING
}

interface MobileLoginStartActionType {
  type: typeof AT.MOBILE_LOGIN_START
}

interface MobileLoginFinishActionType {
  type: typeof AT.MOBILE_LOGIN_FINISH
}

interface RegisterActionType {
  type: typeof AT.REGISTER
}

interface RegisterSuccessActionType {
  type: typeof AT.REGISTER_SUCCESS
}

interface RegisterFailureActionType {
  type: typeof AT.REGISTER_FAILURE
}

interface RegisterLoadingActionType {
  type: typeof AT.REGISTER_LOADING
}

interface Reset2faLoadingActionType {
  type: typeof AT.RESET_2FA_LOADING
}

interface Reset2faFailureActionType {
  payload: {
    err: string
  }
  type: typeof AT.RESET_2FA_FAILURE
}

interface RestoreActionType {
  payload: {
    email: string | undefined
    language: string
    mnemonic: string
    network: string | undefined
    password: string
  }
  type: typeof AT.RESTORE
}
interface Reset2faSuccessActionType {
  type: typeof AT.RESET_2FA_SUCCESS
}

interface RestoreLoadingActionType {
  type: typeof AT.RESTORE_LOADING
}

interface RestoreSuccessActionType {
  type: typeof AT.RESTORE_SUCCESS
}

interface RestoreFailureActionType {
  type: typeof AT.RESTORE_FAILURE
}

interface RestoreFromMetadataLoadingActionType {
  type: typeof AT.RESTORE_FROM_METADATA_LOADING
}

interface RestoreFromMetadataSuccessActionType {
  payload: {
    mnemonic: string
  }
  type: typeof AT.RESTORE_FROM_METADATA_SUCCESS
}

interface RestoreFromMetadataFailureActionType {
  payload: {
    err: string
  }
  type: typeof AT.RESTORE_FROM_METADATA_FAILURE
}

interface SecureChannelLoadingActionType {
  type: typeof AT.SECURE_CHANNEL_LOGIN_LOADING
}
interface SecureChannelSuccessActionType {
  type: typeof AT.SECURE_CHANNEL_LOGIN_SUCCESS
}
interface SecureChannelFailureActionType {
  payload: {
    err: string
  }
  type: typeof AT.SECURE_CHANNEL_LOGIN_FAILURE
}

interface SetAuthTypeActionType {
  payload: {
    authType: number
  }
  type: typeof AT.SET_AUTH_TYPE
}

interface SetFirstLoginActionType {
  payload: {
    firstLogin: boolean
  }
  type: typeof AT.SET_FIRST_LOGIN
}

interface SetRegisterEmailActionType {
  payload: {
    email: string
  }
  type: typeof AT.SET_REGISTER_EMAIL
}
interface WalletGuidSubmitSuccessActionType {
  type: typeof AT.GUID_WALLET_SUCCESS
}

interface WalletGuidSubmitLoadingActionType {
  type: typeof AT.GUID_WALLET_LOADING
}

interface WalletGuidSubmitFailureActionType {
  type: typeof AT.GUID_WALLET_FAILURE
}
export type AuthNewActionTypes =
  | AuthenticateActionType
  | InitializeLoginFailureActionType
  | InitializeLoginLoadingActionType
  | InitalizeLoginSuccessActionType
  | LoginGuidFailureActionType
  | LoginGuidLoadingActionType
  | LoginGuidSuccessActionType
  | LoginActionType
  | LoginFailureActionType
  | LoginLoadingActionType
  | LoginSuccessActionType
  | MobileLoginStartActionType
  | MobileLoginFinishActionType
  | RegisterLoadingActionType
  | RegisterFailureActionType
  | RegisterSuccessActionType
  | Reset2faLoadingActionType
  | Reset2faFailureActionType
  | Reset2faSuccessActionType
  | RestoreActionType
  | RestoreFailureActionType
  | RestoreLoadingActionType
  | RestoreSuccessActionType
  | RestoreFromMetadataFailureActionType
  | RestoreFromMetadataLoadingActionType
  | RestoreFromMetadataSuccessActionType
  | SecureChannelFailureActionType
  | SecureChannelLoadingActionType
  | SecureChannelSuccessActionType
  | SetFirstLoginActionType
  | SetRegisterEmailActionType
  | SetAuthTypeActionType
  | WalletGuidSubmitSuccessActionType
  | WalletGuidSubmitLoadingActionType
  | WalletGuidSubmitFailureActionType
