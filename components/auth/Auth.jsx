/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation } from "@apollo/client";
import { useState, useRef } from "react";
import Router from "next/router";
import GraphAuth from "../../apollo/graphql/mutations/GraphAuth";
import LoginInput from "./LoginInput";
import SignupInput from "./SignupInput";
import {
  getRef,
  isLastStep,
  emptyFunc,
  isFirstStep,
  clearInput,
} from "./helpers.js";

const Auth = () => {
  // GraphQL mutations
  const [signup] = useMutation(GraphAuth.public.SIGN_UP);
  const [login] = useMutation(GraphAuth.public.SIGN_IN);

  // State
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [authState, setAuthState] = useState({
    login: true,
    step: 0,
    numSteps: 1,
  });
  const stateMachineLookup = {
    login: {
      0: "email",
      1: "password",
    },
    signup: {
      0: "name",
      1: "email",
      2: "password",
      3: "confirmation",
    },
  };
  // Form Element References
  const refs = {
    email: useRef(""),
    password: useRef(""),
    confirmation: useRef(""),
    name: useRef(""),
    submit: useRef(""),
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
  };

  const nextStep = (e) => {
    e.preventDefault();
    setAuthState({ ...authState, step: authState.step + 1 });

    // update submit button
    if (isLastStep(authState.step, authState.numSteps)) {
      refs.submit.current.type = "submit";
    }

    clearInput(authState.login, authState.step, stateMachineLookup, refs);
  };
  const backStep = (e) => {
    e.preventDefault();
    setAuthState({ ...authState, step: authState.step - 1 });
    if (!isLastStep(authState.step, authState.numSteps)) {
      refs.submit.current.type = "button";
    }
  };

  const onSubmit = () => {
    const signupSubmitHandler = (e) => {
      e.preventDefault();
      signup({
        variables: {
          email: formState.email,
          password: formState.password,
          passwordConfirmation: formState.confirmation,
          // name: formState.name,
        },
      }).then(() => {
        Router.push("/");
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
        Router.push("/");
      });
    };

    if (isLastStep(authState.step, authState.numSteps)) {
      return authState.login ? loginSubmitHandler : signupSubmitHandler;
    }
    return nextStep;
  };

  return (
    <div className="p-4 responsive-div mx-auto my-40">
      <form
        onChange={handleChange}
        onSubmit={onSubmit()}
        className="grid-cols-1 grid border bg-gray-50 p-10"
      >
        <button
          className={isFirstStep(authState.step) ? `hidden` : ""}
          type="button"
          onClick={backStep}
          ref={refs.back}
        >
          Back
        </button>
        {authState.login ? (
          <LoginInput
            step={authState.step}
            ref={getRef(refs, authState.login, authState.step)}
          />
        ) : (
          <SignupInput
            step={authState.step}
            ref={getRef(refs, authState.login, authState.step)}
          />
        )}

        <button
          type="button"
          onClick={
            isLastStep(authState.step, authState.numSteps)
              ? emptyFunc
              : nextStep
          }
          ref={refs.submit}
        >
          {isLastStep(authState.step, authState.numSteps) ? "Submit" : "Next"}
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
