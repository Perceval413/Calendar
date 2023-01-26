import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../src/store/calendar/calendarSlice"
import { calendarWithEventsSate, events, initialState } from "../fixtures/calerdarStates"

describe('pruebas en calendarSlice', () => { 
  
  test('debe de regrtesar el estado por defecto', () => { 
    const  state = calendarSlice.getInitialState()
    expect(state).toEqual(initialState)
   })

   test('onSetActiveEvent debe de activar el evento', () => { 
    const state = calendarSlice.reducer(calendarWithEventsSate,onSetActiveEvent(events[0]))
    expect(state.activeEvent).toEqual(events[0])
   })

   test('oonAddnew event debe de agregar el evento', () => { 
    const newEvent = {
      id: '3',
      title: "Cumpleanos de Jose",
      notes: "Hay que comprar el pastel",
      start: new Date('2022-10-21 13:00:00'),
      end: new Date('2022-10-21 15:00:00'),
    }
    const state = calendarSlice.reducer(calendarWithEventsSate,onAddNewEvent(newEvent))
    expect(state.events).toEqual([...events,newEvent])
   })

   test('onUpdateEvent event debe de agregar el evento', () => { 
    const newEvent = {
      id: 1,
      title: "Cumpleanos de Jose actad",
      notes: "Hay que comprar el pastel",
      start: new Date('2022-10-21 13:00:00'),
      end: new Date('2022-10-21 15:00:00'),
    }
    const state = calendarSlice.reducer(calendarWithEventsSate,onUpdateEvent(newEvent))
    expect(state.events).toContain(newEvent)
   })

   test('ondeletevent event debe de agregar el evento', () => { 
  
    const state = calendarSlice.reducer(calendarWithEventsSate,onDeleteEvent())
    expect(state.activeEvent).toBe(null)
    //expect(state.events).not.toContain(events[0])
   })

   test('onload event debe de agregar el evento', () => { 
   
    const state = calendarSlice.reducer(calendarWithEventsSate,onLoadEvents(events))
    expect(state.isLoadingEvents).toBeFalsy()
    expect(state.events).toEqual(events)
    const newState = calendarSlice.reducer(state,onLoadEvents(events))
    expect(state.events.length).toBe(events.length)
   })

   
   test('onlogout event debe de agregar el evento', () => { 
   
    const state = calendarSlice.reducer(calendarWithEventsSate,onLogoutCalendar())
    expect(state).toEqual(initialState)
   })
   


 })