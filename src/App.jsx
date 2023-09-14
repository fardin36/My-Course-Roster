import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <main className='px-14 pb-20'>
        <h1 className='text-center text-4xl font-bold pt-12 pb-8'>Course Registration</h1>
        <div className='flex justify-between gap-6'>
          <div className='w-3/4 flex justify-between gap-6 flex-wrap'>
            <Card></Card>
          </div>
          <div className='w-1/4'>

          </div>
        </div>
      </main>
    </>
  )
}

export default App
