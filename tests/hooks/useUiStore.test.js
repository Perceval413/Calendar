import { configureStore } from '@reduxjs/toolkit'
import { renderHook } from '@testing-library/react'
import { Provider } from 'react-redux'
import { useUiStore } from '../../src/hooks'
import { store, uiSlice } from '../../src/store'

const getMockStore = (initialState) => {
  return configureStore({
    reducer:{
      ui:uiSlice.reducer
    },
    preloadedState:{
      ui:{...initialState}
    }
  })
}
describe('pruebas en usesUiStore', () => {


  test('debe de regersar los valores por defecto', () => {
    const mockStore = getMockStore({isDateModalOpen:false})
    const { result } = renderHook(() => useUiStore(), {
      wraper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })
    console.log(result);
  })
})