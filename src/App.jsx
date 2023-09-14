import { useEffect, useState } from 'react';
import './App.css'
import Card from './Card'
import Cart from './Cart'

function App() {
  const [allCourses, setCourses] = useState([]);

  useEffect(() => {
    fetch("../json/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])

  console.log(allCourses);

  return (
    <>
      <main className='px-14 pb-20'>
        {/* Page Title.. */}
        <h1 className='text-center text-4xl font-bold pt-12 pb-8'>Course Registration</h1>
        <div className='flex justify-between gap-6'>
          {/* Cards Section.. */}
          <div className='w-3/4 flex justify-between gap-6 flex-wrap'>
            {allCourses.map((course) => (
              <Card
              key={course.id}
              thumbnail={course.thumbnail}
              title={course.title}
              description={course.description}
              price={course.price}
              credit={course.credit}
              ></Card>
            ))}
          </div>
          {/* Cart Section.. */}
          <div className='w-1/4'>
            <Cart></Cart>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
