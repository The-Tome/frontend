function Test() {
  return (
    <div className="testAbility">
      {
      console.log('I got here')
      }
    Hi {localStorage.getItem('firstName') + " " + localStorage.getItem('lastName')}
    </div>
  )
}

export default Test;