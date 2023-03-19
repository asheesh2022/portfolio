import "./skill.css"
import data from "./skillsApi"
import Card from "./Card"

const Skill = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h1>Skills</h1>
          </div>

          {/* <div className='content grid'> */}
          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

           
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill