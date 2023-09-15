import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';
import CartList from './CartList';

function App() {
  const [allCourses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setCredit] = useState(0);
  const [totalRemainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setPrice] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])

  const handleSelectCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id == course.id);
    let totalSelectedCredit = course.credit;
    let totalSelectedPrice = course.price;
    if (totalRemainingCredit - course.credit < 0) {
      toast.error('Not enough credit left!..', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    else {
      if (isExist) {
        toast.warn('Already Selected!', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      else {
        selectedCourses.forEach(item => {
          totalSelectedCredit += item.credit;
          totalSelectedPrice += item.price;
        });
        setSelectedCourses([...selectedCourses, course]);
        setPrice(totalSelectedPrice);
        setCredit(totalSelectedCredit);
        setRemainingCredit(20 - totalSelectedCredit);
      }
    }
  }

  if (totalCredit == 20) {
    toast.warn('Your total credit in full..', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  return (
    <>
      <main className='px-5 pb-8 md:px-14 md:pb-20'>
        {/* Page Title.. */}
        <h1 className='text-center text-4xl font-bold pt-12 pb-8'>Course Registration</h1>
        <div className='flex flex-col md:flex-row justify-center gap-6'>
          {/* Cards Section.. */}
          <div className='sm:w-full md:w-2/3 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center'>
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
          <div className='sm:w-full md:w-1/3 lg:w-1/4'>
            <div className=' max-w-[20rem] bg-base-100 shadow p-6 rounded-xl'>
              <h6 className='font-bold text-lg text-[#2F80ED] pb-4'>Credit Hour Remaining {totalRemainingCredit}hr</h6>
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
              <p className='font-medium text-base text-[#1C1B1BCC] py-4'>Total Credit Hour: {totalCredit}</p>
              <hr />
              <p className='font-medium text-base text-[#1C1B1BCC] pt-4'>Total Price: {totalPrice} USD</p>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
