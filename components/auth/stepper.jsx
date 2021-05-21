class stepper extends React.Component {
    constructor(props) {
      super(props);
      this.step = props.step;
      this.numSteps = props.numSteps;
    }
  
    const resetSteps = () => {
      this.setState((state, props) => ({
        step: 0,
        numSteps: props.numSteps
      }));
    };
    const backStep = () => {
      this.setState((state, props) => ({
        step: state.step - 1,
        numSteps: props.numSteps
      }));
    };
    const nextStep = () => {
      this.setState((state, props) => ({
        step: state.step + 1,
        numSteps: props.numSteps
      }));
    };
    
  }