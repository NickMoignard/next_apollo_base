import { gql } from "@apollo/client";

const GraphqlAuth = {
  superadmin: {},
  admin: {
    INVITE_USER: gql`
      mutation inviteUser($attributes: UserInput!) {
        inviteUser(attributes: $attributes) {
          id
          name
          email
        }
      }
    `,
    UPDATE_USER_ROLE: gql`
      mutation updateUserRole($id: ID!, $role: String!) {
        updateUserRole(id: $id, role: $role)
      }
    `,
    UPDATE_USER: gql`
      mutation updateUser($id: ID!, $attributes: UserInput!) {
        updateUser(id: $id, attributes: $attributes) {
          id
          name
          email
        }
      }
    `,
    CREATE_COMPANY: gql`
      mutation ($attributes: CompanyInput!) {
        createCompany(attributes: $attributes) {
          name
          slug
        }
      }
    `,
    UPDATE_COMPANY: gql`
      mutation updateCompany($id: ID!, $attributes: CompanyInput!) {
        updateCompany(id: $id, attributes: $attributes) {
          id
          name
          slug
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
  },
  protected: {
    RESET_PASSWORD: gql`
      mutation resetPassword(
        $resetPasswordToken: String!
        $password: String!
        $passwordConfirmation: String!
      ) {
        resetPassword(
          resetPasswordToken: $resetPasswordToken
          password: $password
          passwordConfirmation: $passwordConfirmation
        ) {
          errors {
            message
            details
            field
          }
          success
        }
      }
    `,
    UPDATE_ACCOUNT: gql`
      mutation updateAccount(
        $currentPassword: String!
        $password: String!
        $passwordConfirmation: String!
      ) {
        updateAccount(
          currentPassword: $currentPassword
          password: $password
          passwordConfirmation: $passwordConfirmation
        ) {
          errors {
            message
            field
            details
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
    VALIDATE_TOKEN: gql`
      mutation validateToken {
        validateToken {
          errors {
            message
            details
            field
          }
          success
          user {
            id
            email
            name
          }
          valid
        }
      }
    `,
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
            email
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
            email
          }
        }
      }
    `,
    FORGOT_PASSWORD: gql`
      mutation forgotPassword($email: String!) {
        forgotPassword(email: $email) {
          success
        }
      }
    `,
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
