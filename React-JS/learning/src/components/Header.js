import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ color:"lightseagreen", fontSize:"50px", fontFamily:"sans-serif"}}>MS DHONI</h1>
                    <img style={{border:"1px solid #ddd", borderRadius:"4px", padding: "5px", width: "40%" }} src="https://assets.gqindia.com/photos/5e8485a922867b0008960729/3:2/w_1620,h_1080,c_limit/MS-Dhoni-net-worth.jpg" alt="" />

                </div>


            </>
        )
    }
}

export default Header;