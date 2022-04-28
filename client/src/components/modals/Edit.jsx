import styles from "./Edit.module.css"

class Modal extends React.Component {
    onClose = e => {
      this.props.onClose && this.props.onClose(e);
    };
      render() {
          //if show is set to false, don't render
          if (!this.props.show) {
              return null;
          }
          return (
            <div class="modal-overlay">
               <div class="modal">
                  <h3>{this.props.title}</h3>
                  <div>{this.props.children}</div>
              <button onClick={this.onClose}>
              close
            </button>
              </div>
              </div>
          );
      }
  }
  //create trigger
  class Toggle extends React.Component {
      //set state 
      state = {
          show: false
      };
      //define toggle function
      toggleModal = e => {
          //when ran, this will just change the value to the opposite.
          this.setState({
              show: !this.state.show
          })
      }
      render() {
          return (
              <div>
                  <a href="#" onClick={this.toggleModal}>Click Me!</a>
                  <Modal onClose={this.toggleModal} show={this.state.show} title="Dynamic Modal">
                    <p>This is the body text for the modal</p>
                  </Modal>
              </div>
          )
      }
  }
  //render trigger on webpage
  ReactDOM.render(
    <Toggle />,
    document.getElementById('app')
  );