{/* <style lang="scss">
  
  .hide {
    display: none;
  }

  div {
    padding: 16px;
    border-radius: 5px;
    border: 1px solid;



    p {
      margin: 0;
      padding: 0;
    }

    &.alert-success {
      background-color: rgb(232, 244, 232);
      border-color: green;
    }

    &.alert-error {
      background-color: rgb(255, 222, 222);
      border-color: red;
    }
  }
</style> */}


const Alert = (props) => (
  <div id={props.id} class={`alert-${props.type} ${props.visible ? 'hide' : ''}`.trim()} role="alert">
    <p>{text}</p>
  </div>
);

export default Alert

export const AlertTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
}

