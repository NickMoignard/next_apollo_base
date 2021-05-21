/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const SignupInput = React.forwardRef((props, ref) => {
  let jsx;
  switch (props.step) {
    case 0:
      jsx = (
        <div className="fancy-input">
          <label htmlFor="name">What is your full name?</label>
          <input id="name" ref={ref} type="text" placeholder="Jane Smith" />
        </div>
      );
      break;
    case 1:
      jsx = (
        <div className="fancy-input">
          <label htmlFor="email">
            What is your best email for us to contact you with?
          </label>
          <input
            id="email"
            ref={ref}
            type="text"
            placeholder="your@email.com"
          />
        </div>
      );
      break;
    case 2:
      jsx = (
        <div className="fancy-input">
          <label htmlFor="password">
            Choose a long complicated password for your security!
          </label>
          <input id="password" ref={ref} type="password" />
        </div>
      );
      break;
    case 3:
      jsx = (
        <div className="grid cols-1">
          <label htmlFor="confirmation">
            Please retype your password to confirm
            <span role="img" aria-label="smiley">
              {" 😊"}
            </span>
          </label>
          <input id="confirmation" ref={ref} type="password" />
        </div>
      );
      break;
    default:
      break;
  }

  return jsx !== undefined ? jsx : <></>;
});

export default SignupInput;
