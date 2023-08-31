
const Login = () => {
  return (
    <div>
      <form action='/'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="contact">Contact</label>
        <input type="number" name="contact" id="contact" />
        <button type='submit'>Submit</button>  
      </form>
    </div>
  );
}

export default Login;
