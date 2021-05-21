/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
// loginEnum
//   0: "email"
//   1: "password"
//   2: "submit"

const LoginInput = React.forwardRef((props, ref) => {
  let jsx;
  switch (props.step) {
    case 0:
      jsx = (
        <div className="fancy-input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            ref={ref}
            type="text"
            placeholder="your@email.com"
          />
        </div>
      );
      break;
    case 1:
      jsx = (
        <div className="fancy-input">
          <label htmlFor="password">Password</label>
          <input id="password" ref={ref} type="password" />
        </div>
      );
      break;
    default:
      break;
  }
  return jsx !== undefined ? jsx : <></>;
});

export default LoginInput;
