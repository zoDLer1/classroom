
import { Routes } from 'react-router-dom';
import urlpatternts from './urlpatternts';



export default () => {
  return (
    <>
      <Routes>
        {urlpatternts.map((route, index) => route.render(index))}
      </Routes>
    </>
  )
}