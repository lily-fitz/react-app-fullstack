import { useState } from 'react'

function Itempage() {
  const [editmode, setEditmode] = useState(false)
  const [formDefaults, setFormDefaults] = useState({
    title: '',
    status: 'not started',
    priority: 'low',
  })

  const handleSubmit = () => {
    console.log('form submitted')
  }

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setFormDefaults((prevFormDefaults) => ({
      ...prevFormDefaults,
      [name]: value,
    }))
  }

  return (
    <div className='page itempage'>
      <h1>{editmode ? 'Update Item' : 'Create Item'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input type='text' name='title' value={formDefaults.title} onChange={handleChange} />
        </label>

        <label>
          Status
          <select name='status' value={formDefaults.status} onChange={handleChange}>
            <option defaultValue={formDefaults.status === 'not started'} value='Not Started'>
              Not Started
            </option>
            <option defaultValue={formDefaults.status === 'in-progress'} value='In-Progress'>
              In-Progress
            </option>
            <option defaultValue={formDefaults.status === 'complete'} value='Complete'>
              Complete
            </option>
          </select>
        </label>

        <label>
          Priority
          <select value={formDefaults.priority} onChange={handleChange}>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </label>

        <button type='submit'>{editmode ? 'Update' : 'Add'} </button>
      </form>
    </div>
  )
}

export default Itempage
