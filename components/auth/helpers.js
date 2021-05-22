const getRef = (refs, login, step) => {
  if (login) {
    switch (step) {
      case 0:
        return refs.email;
      case 1:
        return refs.password;
      default:
        break;
    }
  } else {
    switch (step) {
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

const isLastStep = (step, numSteps) => {
  return step >= numSteps;
};
const isFirstStep = (step) => {
  return step === 0;
};
const emptyFunc = () => {
  // console.log('doing a whole lot of nothing!');
};

const clearInput = (login, step, stateMachine, refs) => {
  const ref = login
    ? refs[stateMachine.login[step]]
    : refs[stateMachine.signup[step]];
  if (ref.current !== undefined) {
    ref.current.value = "";
  }
};

export { getRef, isLastStep, isFirstStep, emptyFunc, clearInput };
