function Status({ status }) {
  const statusColor = (status) => {
    let color
    switch (status) {
      case 'not started':
        color = 'red'
        break
      case 'in-progress':
        color = 'orange'
        break
      case 'complete':
        color = 'limegreen'
        break
      default:
        color = 'gray'
    }

    return color
  }

  return (
    <div>
      <span className='status-bubble' style={{ backgroundColor: statusColor(status), color: 'white' }}>
        {status}
      </span>
    </div>
  )
}

export default Status
