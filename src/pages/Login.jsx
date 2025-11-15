import React from 'react'


export default function Login(){
return (
<div className="page-card">
<h2>Login</h2>
<label>Username<input /></label>
<label>Password<input type="password"/></label>
<div style={{marginTop:8}}><button className="button">Submit</button></div>
</div>
)
}