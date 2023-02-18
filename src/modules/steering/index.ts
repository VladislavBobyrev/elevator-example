import { CallElevator } from '@src/types'

const buttons = document.querySelector('.app__buttons')

if (!buttons) {
  throw new Error('no buttons')
}

export const registerSteningHandler = (callElevator: CallElevator) => {
  buttons.addEventListener('click', e => {
    const { target } = e

    if (target && target instanceof HTMLButtonElement) {
      callElevator(parseInt(target.innerHTML))
    }
  })
}
