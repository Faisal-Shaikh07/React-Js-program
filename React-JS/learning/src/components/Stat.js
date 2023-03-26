import React, { Component } from 'react'

class Stat extends Component {
    render() {
        const careerArr = [
            {
                Format: 'Test',
                Matches: 90,
                Runs: 4876,
                Avg: 38.09,
                HS: 224,
            },
            {
                Format: 'ODI',
                Matches: 350,
                Runs: 10773,
                Avg: 50.57,
                HS: '183*',
            },
            {
                Format: 'T20I',
                Matches: 98,
                Runs: 1617,
                Avg: 37.60,
                HS: 56, 
            },
            {
                Format: 'IPL',
                Matches: 234,
                Runs: 4978,
                Avg: 39.20,
                HS: '84*', 
            },
        ]
        const Career = careerArr.map((item,idx) => {
            console.log(item)

            return (

                <div style={{fontFamily:"sans-serif"}}>
                    <h3>Format: {item.Format}</h3>
                    <h3>Matches Played: {item.Matches}</h3>
                    <h3>Total Runs: {item.Runs}</h3>
                    <h3>Average: {item.Avg}</h3>
                    <h3>Highest Score: {item.HS}</h3>
                </div>

            )
        })
        

        return (
            <>
            <div style ={{textAlign:"center", display:"flex", justifyContent:"space-evenly", background:"#FFD700"}}>
                {Career}
            </div>
            </>
        )
    }
}
export default Stat;