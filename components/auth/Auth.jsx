/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation } from "@apollo/client";
import { useState, useRef } from "react";
import Router from "next/router";
import GraphAuth from "../../apollo/graphql/mutations/GraphAuth";
import LoginInput from "./LoginInput";
import SignupInput from "./SignupInput";

const Auth = () => {
  const refs = {
    email: useRef(""),
    password: useRef(""),
    confirmation: useRef(""),
    name: useRef(""),
    submit: useRef(""),
  };

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [authState, setAuthState] = useState({
    login: true,
    step: 0,
    numSteps: 1,
  });

  const [signup, { signUpData, signUpLoading, signUpError }] = useMutation(
    GraphAuth.public.SIGN_UP
  );

  const [login, { loginData, loginLoading, loginError }] = useMutation(
    GraphAuth.public.SIGN_IN
  );

  // helpers
  const finishedInput = () => {
    console.log(`finishedInput?: ${authState.step} >= ${authState.numSteps}`);
    return authState.step >= authState.numSteps;
  };

  const getRef = () => {
    if (authState.login) {
      switch (authState.step) {
        case 0:
          return refs.email;
        case 1:
          return refs.password;
        default:
          break;
      }
    } else {
      switch (authState.step) {
        case 0:
          return refs.name;
        case 1:
          return refs.email;
        case 2:
          return refs.password;
        case 3:
          return refs.confirmation;
        default:
          break;
      }
    }
    return null;
  };

  const handleChange = (e) => {
    // check for charCode = 13
    setFormState({
      ...formState,
      name:
        refs.name.current === null ? formState.name : refs.name.current.value,
      email:
        refs.email.current === null
          ? formState.email
          : refs.email.current.value,
      password:
        refs.password.current === null
          ? formState.password
          : refs.password.current.value,
      confirmation:
        refs.confirmation.current === null
          ? formState.confirmation
          : refs.confirmation.current.value,
    });
    console.log(`Sign Up Mutation`, signUpData, signUpError, signUpLoading);
    console.log(`Sign in Mutation`, loginData, loginError, loginLoading);
  };

  const nextStep = (e) => {
    e.preventDefault();
    console.log(authState);
    setAuthState({ ...authState, step: authState.step + 1 });
    if (finishedInput()) {
      refs.submit.current.type = "submit";
    }
  };

  const onSubmit = () => {
    const signupSubmitHandler = (e) => {
      e.preventDefault();
      signup({
        variables: {
          email: formState.email,
          password: formState.password,
          confimPass: formState.confirmation,
          name: formState.name,
        },
      }).then(() => {
        // Router.push("/");
      });
    };

    const loginSubmitHandler = (e) => {
      e.preventDefault();
      login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      }).then(() => {
        // Router.push("/");
      });
    };

    if (finishedInput()) {
      return authState.login ? loginSubmitHandler : signupSubmitHandler;
    }
    return nextStep;
  };

  return (
    <div className="p-4 responsive-div mx-auto">
      <form
        onChange={handleChange}
        onSubmit={onSubmit()}
        className="grid-cols-1 grid"
      >
        {authState.login ? (
          <LoginInput step={authState.step} ref={getRef()} />
        ) : (
          <SignupInput step={authState.step} ref={getRef()} />
        )}
        <button
          type="button"
          onClick={
            finishedInput()
              ? () => {
                  console.log("submitting form");
                }
              : nextStep
          }
          ref={refs.submit}
        >
          {finishedInput() ? "Submit" : "Next"}
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setAuthState({
              ...authState,
              login: !authState.login,
              numSteps: authState.login ? 3 : 1,
            });
          }}
        >
          {authState.login ? "Sign up" : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
