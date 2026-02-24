export default function Ex2() {
  const Ex2Style = {
    borderRadius: '6px',
    backgroundColor: 'cyan',
    textAlign: 'center',
    overflow: 'hidden'
  }
  return (
    <div style={Ex2Style}>
      <h1 style={{ margin: '36px' }}>Subcribe</h1>
      <p style={{ margin: '36px' }}>
        Sign up with your email address to recive news and updates
      </p>
      <div style={{ margin: '24px' }}>
        <input placeholder="First name" />
        <input placeholder="Last name" />
        <input placeholder="Email" />
      </div>
      <button style={{ marginBottom: '36px' }}>Subcribe</button>
    </div>
  )
}
