import React from 'react'


export default function Register(){
return (
<div className="page-card">
<h2>Register</h2>
<label>Username<input /></label>
<label>Password<input type="password"/></label>
<label>Verify Password<input type="password"/></label>
<div style={{marginTop:8}}><button className="button">Submit</button></div>
</div>
)
}