// import [...props] from '../index'

function Test(code) {
  const theCode = code.code;
  return (
    <div className="testAbility">
      {
      console.log('I got here')
      }
    I am just a test page lol. Here's my code: {theCode}
    </div>
  )
}

export default Test;