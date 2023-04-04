import Status from './Status'
import EditButton from './EditButton'

function Item({ singleitem }) {
  return (
    <div className='item'>
      <h3>{singleitem.title}</h3>
      <Status status={singleitem.status} />
      <EditButton />
    </div>
  )
}

export default Item
