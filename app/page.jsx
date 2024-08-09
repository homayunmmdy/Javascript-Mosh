import PostsList from './components/PostsList'

const Home = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-3">
      <div className="hidden md:block md:w-[25%]">
        right
      </div>
      <div className="w-full md:w-[50%]">
        <div className='px-2'>
          <PostsList />
        </div>
      </div>
      <div className="hidden md:block md:w-[25%]">
        Left
      </div>
    </div>
  )
}

export default Home