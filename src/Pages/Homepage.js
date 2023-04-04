import Item from '../Components/Item'
import sampledata from '../data.js'

function Homepage() {
  console.log(sampledata)
  return (
    <div className='page homepage'>
      <h1>Homepage</h1>
      <h2>Today</h2>
      <section>
        {sampledata
          .filter((sampleitem) => sampleitem.priority === 'high')
          .map((highpriorityitem) => (
            <Item key={highpriorityitem.id} singleitem={highpriorityitem} />
          ))}
      </section>
      <h2>This Week</h2>
      <section>
        {sampledata
          .filter((sampleitem) => sampleitem.priority === 'med')
          .map((medpriorityitem) => (
            <Item key={medpriorityitem.id} singleitem={medpriorityitem} />
          ))}
      </section>
      <h2>Sometime Soon</h2>
      <section>
        {sampledata
          .filter((sampleitem) => sampleitem.priority === 'low')
          .map((lowpriorityitem) => (
            <Item key={lowpriorityitem.id} singleitem={lowpriorityitem} />
          ))}
      </section>
    </div>
  )
}

export default Homepage
