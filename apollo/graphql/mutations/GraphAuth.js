import { gql } from "@apollo/client";

const GraphqlAuth = {
  protected: {
    INVITE_USER: gql`
      mutation inviteUser($attributes: UserInput!) {
        inviteUser(attributes: $attributes) {
          id
          name
        }
      }
    `,
    LOCK_ACCOUNT: gql`
      mutation lockAccount($id: ID!) {
        lockAccount(id: $id) {
          errors {
            message
            details
            field
          }
          success
          user {
            id
            name
            email
          }
        }
      }
    `,
    UNLOCK_ACCOUNT: gql`
      mutation unlockAccount($id: ID!) {
        unlockAccount(id: $id) {
          errors {
            message
            details
            field
          }
          success
          user {
            id
            name
            email
          }
        }
      }
    `,
    RESET_PASSWORD: {},
    UPDATE_ACCOUNT: {},
    VALIDATE_TOKEN: {},
  },
  public: {
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
    SIGN_UP: gql`
      mutation signUp(
        $email: String!
        $password: String!
        $passwordConfirmation: String!
      ) {
        signUp(
          email: $email
          password: $password
          passwordConfirmation: $passwordConfirmation
        ) {
          errors {
            details
            field
            message
          }
          success
          user {
            id
            name
          }
        }
      }
    `,
    FORGOT_PASSWORD: {},
    RESEND_CONFIRMATION_EMAIL: gql`
      mutation resendConfirmationInstructions($email: String!) {
        resendConfirmationInstructions(email: $email) {
          errors {
            message
            field
            details
          }
          success
          valid
        }
      }
    `,
    ACCEPT_INVITE: gql`
      mutation acceptInvite(
        $invitationToken: String!
        $attributes: UserInput!
      ) {
        acceptInvite(invitationToken: $invitationToken, attributes: $attributes)
      }
    `,
  },
};

export default GraphqlAuth;
