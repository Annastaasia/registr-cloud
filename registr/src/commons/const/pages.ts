import { useLocation } from 'react-router-dom';


export const pagePaths: IPages[] = [
  {
    path: '/registr/first-level',
    label: 'first_level',
    percentage: 0,
  },
  {
    path: '/registr/second-level',
    label: 'second_level',
    percentage: 50,
  },
  {
    path: '/registr/third-level',
    label: 'third_level',
    percentage: 100,
  },
]

export function getMatchingPage() {
  const location = useLocation();
  return pagePaths.find((page) => page.path === location.pathname)
}
