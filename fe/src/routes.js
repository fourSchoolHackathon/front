import Main from './components/main'
import NotFound from './common/notfound'
import RequestHelp from './components/requestHelp/RequestHelp'
import Login from "./components/Login"
import Accept from './components/accept';

export default [
  // footer는 실제로는 사용되지 않지만 혹시 모르니 로직 그대로 쓰기 위해 남겨둠
  { path: '', element: <Main />, nav: true, footer: false },
  { path: '*', element: <NotFound />, nav: false, footer: false },
  { path: 'profile', element: <div>profile</div>, nav: true, footer: false },
  { path: 'req', element: <RequestHelp />, nav: true, footer: false },
  { path: 'signin', element: <Login />, nav: false, footer: false },
  { path: 'accept', element: <Accept />, nav: false, footer: false }

  // { path: "/hi", element: <div>hi</div>, nav: false, footer: false },
]
