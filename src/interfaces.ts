export interface Engine {
  callElevator(floor: number): void
  getState(): Elevator[]
}

export interface Elevator {
  startFloor: number
  targetFloor: number
  startTime: number
}
