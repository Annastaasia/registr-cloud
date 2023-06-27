import { current_dot, finished_dot, not_active_dot } from '../../assets/images'

export const dotConfigurations: IDotConfigurations = {
  first_level: [current_dot, not_active_dot, not_active_dot],
  second_level: [finished_dot, current_dot, not_active_dot],
  third_level: [finished_dot, finished_dot, current_dot],
}