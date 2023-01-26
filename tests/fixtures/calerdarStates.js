
export const events = [
  {
    id: 1,
    title: "Cumpleanos de Jose",
    notes: "Hay que comprar el pastel",
    start: new Date('2022-10-21 13:00:00'),
    end: new Date('2022-10-21 15:00:00'),
  },
  {
    id: 2,
    title: "Cumpleanos de Pepe",
    notes: "Hay que comprar el pastel y gaseosa",
    start: new Date('2022-12-07 13:00:00'),
    end: new Date('2022-12-07 15:00:00'),
  }
]

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
}

export const calendarWithEventsSate = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
}
export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: {...events[0]},
}