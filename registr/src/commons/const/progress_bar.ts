import { current_dot, finished_dot, not_active_dot } from '../../assets/images'

export const dotConfigurations: IDotConfigurations = {
  step1: [current_dot, not_active_dot, not_active_dot],
  step2: [finished_dot, current_dot, not_active_dot],
  step3: [finished_dot, finished_dot, current_dot],
}