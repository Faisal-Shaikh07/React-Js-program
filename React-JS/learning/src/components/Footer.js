import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <>
                <footer style={{ textAlign: "center", fontFamily: "sans-serif", background: "black", color: "white" }}>
                    <div>
                        <h2> COPYRIGHT@MS DHONI.</h2>
                    </div>
                    <div>
                        <h2>Connect with MSD</h2>
                        <ul>
                            <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="https://instagram.com/mahi7781" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li style={{listStyleType:"none"}}><a style={{textDecoration:"none", color:"white"}} href="https://twitter.com/msdhoni" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;