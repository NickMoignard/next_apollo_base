import { useMutation } from "@apollo/client";
import { useRef } from "react";
import GraphAuth from "../../apollo/graphql/mutations/GraphAuth";

const SignInForm = () => {
  const [login, { data, loading, error }] = useMutation(
    GraphAuth.public.SIGN_IN
  );
  const refs = {
    email: useRef(""),
    password: useRef(""),
  };
  const onSubmit = (event) => {
    event.preventDefault();
    login({
      variables: {
        email: refs.email.current.value,
        password: refs.password.current.value,
      },
    }).then(() => {
      console.log(data, error, loading);
    });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input ref={refs.email} type="text" placeholder="your@email.com" />
        <input ref={refs.password} type="password" />
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default SignInForm;
