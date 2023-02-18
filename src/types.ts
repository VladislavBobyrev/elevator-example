export type CallElevator = (floor: number) => void

export interface Engine {
  callElevator: CallElevator
  getState(): Elevator[]
}

export interface Elevator {
  startFloor: number
  targetFloor: number
  startTime: number
}
