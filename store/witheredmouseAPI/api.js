import axios from "axios"
const witheredmouseAPI = axios.create({
  baseURL: "https://withered-mouse-39563.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return witheredmouseAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return witheredmouseAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return witheredmouseAPI.post(`/api/v1/signup/`, payload.data)
}
function modules_privacy_policy_list(payload) {
  return witheredmouseAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return witheredmouseAPI.post(`/modules/privacy-policy/`, payload.data)
}
function modules_privacy_policy_retrieve(payload) {
  return witheredmouseAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return witheredmouseAPI.put(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_partial_update(payload) {
  return witheredmouseAPI.patch(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_destroy(payload) {
  return witheredmouseAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return witheredmouseAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return witheredmouseAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return witheredmouseAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return witheredmouseAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return witheredmouseAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return witheredmouseAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return witheredmouseAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return witheredmouseAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return witheredmouseAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return witheredmouseAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return witheredmouseAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
