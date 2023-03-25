export const SignUpQuery = `
mutation SignUp($email:String!, $password:String!, $firstName:String!, $lastName:String!) {
  createUser (data:{email: $email, password:$password, firstName:$firstName, lastName:$lastName}) {
    id
    email
  }
}
`;
