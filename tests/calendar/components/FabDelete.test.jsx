const { render, screen } = require("react-dom");
const { Provider } = require("react-redux");
const { FabDelete } = require("../../../src/calendar/components/FabDelete");
const { store } = require("../../../src/store");

describe("pruebas en fabdelete", () => {
  test("debe de mostar el componente correctamente", () => {
    render(
      <Provider store={store}>
        <FabDelete />
      </Provider>
    );
    screen.debug();
  });
});
