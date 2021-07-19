import { gql } from "@apollo/client";

// QUERY

const USER_DATA = gql`
  {
    employer_user {
      firstname
      lastname
      password
      email
      phonenumber
    }
  }
`;
// Mutation;
const SIGNUP_MUTATION = gql`
  mutation signupMutation(
    $firstname: String
    $lastname: String
    $password: String
    $email: String
    $phonenumber: String
  ) {
    insert_employer_user(
      objects: {
        firstname: $firstname
        lastname: $lastname
        password: $password
        email: $email
        phonenumber: $phonenumber
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export { USER_DATA, SIGNUP_MUTATION };
