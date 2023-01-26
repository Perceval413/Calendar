import { configureStore } from "@reduxjs/toolkit"
import { renderHook } from "@testing-library/react"
import { Provider } from "react-redux"
import { useAuthStore } from "../../src/hooks/useAuthStore"
import { authSlice } from "../../src/store"
import { initialState } from '../fixtures/authStates'

describe('Pruebas en useAuthStore', () => {

  const getMockStore = (initalState) => {
    return configureStore({
      reducer: {
        auth: authSlice.reducer
      },
      preloadedState: {
        auth: { ...initalState }
      }
    })
  }

  test('debe de regresar los valores por defecto ', () => {
    const mockStore = getMockStore({ ...initialState })
    const { result } = renderHook(() => useAuthStore(),{wrapper:({children})=><Provider store={mockStore}>{children}</Provider>})
    console.log(result.current);
  })

})