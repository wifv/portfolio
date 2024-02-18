import './exp.css'

const Exp = () => {
  return (
    <div>
      <h1 className="text-center">Qualification</h1>
      <h5 className="text-center colo-2">My personal journey</h5>
      <br /><br /><br />
      <div className="flex">
        <img src="src/assets/cap.svg" alt="a graduation cap" className='svg'/>
        <h4>Education</h4>
      </div>
      <br />
      <div className="edu-container">
        <div className="edu-grid">
          <div className="c">
            <h4>Self Study</h4>
            <h5 className='color-2'>2022-2023</h5>
            <br /><br /><br />
          </div>
          <div className="cool-stuff">
            <span className='round'></span>
            <span className='line'></span>
          </div>
          <div></div>
        </div>
        <div className="edu-grid">
          <div></div>
          <div className="cool-stuff">
            <span className='round'></span>
            <span className='line'></span>
          </div>
          <div className="c">
            <h4>FrontEnd Web Development</h4>
            <h5 className='color-2'>IT-Park Tashkent</h5>
            <h5 className='color-2'>2023-2024</h5>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp
