
const HomeHero:React.FC = () => {
  return (
        <div className="hero  min-h-screen  ">
          <div className="hero-content bg-base-200 bg-opacity-90 p-24 rounded-lg shadow-2xl text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">Welcome to <span className='text-primary font-norican '>E</span>-<span className='text-sky-500 font-norican'>Shop</span></h1>
              <p className="py-6">
              This is an example made to improve the skills of the developer, <span className='font-bold text-red-700'>it is not a real sales site</span>.
              </p>
              <h3 className='font-bold text-lg '>Developer  <span className="text-xl text-primary">Doguhan Erol</span></h3>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
  )
}

export default HomeHero