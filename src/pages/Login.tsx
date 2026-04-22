import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="page login-page">
            <div className="login-container">
                <h2>Welcome Back</h2>
                <p>Sign in to your account</p>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <button type="button" className="btn btn-primary full-width">Sign In</button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <Link to="/">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}
