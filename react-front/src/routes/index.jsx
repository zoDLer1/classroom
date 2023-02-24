
import { Routes } from 'react-router-dom';
import urlpatternts from './urlpatternts';



export default () => {
  console.log(urlpatternts.map(route => route))
  return (
    <>
      <Routes>
        {urlpatternts.map((route, index) => route.render(index))}
      </Routes>
    </>
  )
}