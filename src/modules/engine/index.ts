import { Elevator } from '@src/types'

export const getState = (): Elevator[] => []

export const callElevator = (floor: number) => {
  console.log('лифт вызван на этаж', floor)
}
