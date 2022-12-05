import Head from 'next/head';
import Link from 'next/link'

function Login() {
  return (
    <div className='container-fluid'>
      <Head>
        <title> FordaStore </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/main-logo.png' />
      </Head>

      <img src='logo.png' className='img-thumbnail w-25 h-25 border border-white' alt='logo.png' />

      <div className='row'>
        <div className='col-sm-6 col-md-5 m-auto'>

          <div className='text-center'>
            <img src='user-icon.png' className='img-thumbnail border border-white' alt='user-icon.png' />
          </div>
       
          <div className='fs-1 d-flex justify-content-center fw-bold'> 
            Sign in 
          </div>

          <div>
            {/* <i className='bi bi-person-fill'> </i> */}
            <input className='form-control mt-5 border border-dark' id='username-id' type='text' placeholder='Username' />
          </div>

          <div>
            {/* <i className="bi bi-lock-fill"> </i> */}
            <input className='form-control mt-4 border border-dark' id='password-id' type='password' placeholder='Password' />
          </div>

          <div>    
            <Link href='/home'> 
              <button type="button" className="btn btn-info mt-5 w-100 border border-dark">Login</button>
            </Link>
          </div>

          <div className='text-center mt-2'>
            Not registered? 
            <Link href='/register'>Create an Account</Link>
          </div>
  
        </div>
      </div>
    </div>
  )
}

export default Login;