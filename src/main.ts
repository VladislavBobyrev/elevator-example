import { render } from '@/render'
import { getState, callElevator } from '@/engine'
import { registerSteningHandler } from '@/steering'

registerSteningHandler(callElevator)

const drawTic = () => {
  requestAnimationFrame(drawTic)
  render(getState())
}

requestAnimationFrame(drawTic)
