import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import CartList from './CartList';

function App() {
  const [allCourses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    fetch("../json/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])
  // console.log(allCourses);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id == course.id);
    if (isExist) {
      alert('Already Exist..')
    }
    else {
      setSelectedCourses([...selectedCourses, course])

    }
  }
  // console.log(selectedCourses);

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
                handleSelectCourse={() => handleSelectCourse(course)}
              ></Card>
            ))}
          </div>
          {/* Cart Section.. */}
          <div className='w-1/4'>
            <div className='w-80 bg-base-100 shadow-xl p-6 rounded-xl'>
              <h6 className='font-bold text-lg text-[#2F80ED] pb-4'>Credit Hour Remaining 7 hr</h6>
              <hr />
              <h1 className='font-bold text-xl text-[#1C1B1B] py-4'>Course Name</h1>
              <ul className='font-normal text-base text-[#1C1B1B99] leading-7 pb-6 pl-4 list-decimal'>
                {/* <li>Introduction to C Programming.</li> */}
                {selectedCourses.map((course) => (
                  <CartList
                    key={course.id}
                    title={course.title}
                  ></CartList>
                ))}
              </ul>
              <hr />
              <p className='font-medium text-base text-[#1C1B1BCC] py-4'>Total Credit Hour: 13</p>
              <hr />
              <p className='font-medium text-base text-[#1C1B1BCC] pt-4'>Total Price: 48000 USD</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
