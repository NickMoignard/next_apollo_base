import { gql } from "@apollo/client";
 
const GraphqlAuth = {
  SIGN_IN: gql`
    mutation GraphqlAuth($email: String!, $password: String!) {
      signIn(email: $email, password: $password, rememberMe: false) {
        errors {
          message
          details
        }
        user {
          name
          firstName
          lastName
          id
        }
        success
      }
    }
  `,
  SIGN_UP: {},
  RESEND_CONFIRMATION_EMAIL: {},
  INVITE_USER: {},
  FORGOT_PASSWORD: {},
  LOCK_ACCOUNT: {},
  UNLOCK_ACCOUNT: {},
  RESET_PASSWORD: {},
  UPDATE_ACCOUNT: {},
  VALIDATE_TOKEN: {},
};
 
export default GraphqlAuth;
 
 

