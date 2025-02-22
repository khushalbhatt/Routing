import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';


function Header() {
    const navigate = useNavigate();
    function Landing() {
        navigate('/');
    }
    
    function Dashboard() {
        navigate('/dashboard');
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: 'lightblue' }}> 
            {/* <button onClick={()=>Landing()}>Landing Page</button>
            <button onClick={()=>Dashboard()}>Dashboard Page</button> */}
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/">Landing</Link>
        </div>
    )
}

export default React.memo(Header);