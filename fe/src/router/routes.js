import Main from "../components/main";
import Test from "../components/test";
import NotFound from "../common/NotFound";
import Record from "../components/record";
import Introduce from "../components/introduce";
import Bulletin from "../components/bulletin";
import Write from "../components/introduce/write";
import Recommend from '../components/recommend/Recommend'
import Read from "../components/record/read/Read";

export default [
  { path: "", component: <Main />, nav: true, footer: true },
  { path: "*", component: <NotFound />, nav: false, footer: false },
  { path: "test", component: <Test />, nav: true, footer: true },
  { path: "record", component: <Record/>, nav: true, footer: true },
  { path: "record/:user/:id", component: <Read/>, nav: true, footer: true },
  { path: "introduce", component: <Introduce />, nav: true, footer: true },
  { path: "introduce/:id", component: <Bulletin />, nav: true, footer: true },
  { path: "write", component: <Write />, nav: true, footer: true },
  { path: "recommend", component:<Recommend/>, nav:true, footer:true }
]