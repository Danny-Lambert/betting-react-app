import React, {useState, useEffect} from 'react'
// import '../employees/employees.styles.css'
// import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import axios from 'axios'
import Form from "../Form/form";
import CurrentWeekBetslip from "../CurrentWeekBetslip/currentWeekBetslip";
// import iframe from './react-iframe';
import r2rlogo from '../images/R2Rlogo.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../Employees/employees.styles.css'
import Week1 from "../Week1/week1.jsx"
import Week2 from "../Week2/week2.jsx"
import Week3 from "../Week3/week3.jsx"
import Week4 from "../Week4/week4.jsx"
import Week5 from "../Week5/week5.jsx"


// THIS SECTION CAN BE DELETED ONCE PEOPLEHR FULLY INTEGRATED 
// PAGE ONLY USED TO GRAB NEW EMPLOYEES FROM MONGODB
// CAN USE AS EXAMPLE CALLS TO MONGODB FOR WHATEVER YOU DO NOT GRAB FROM SALESFORCE OR PEOPLEHR


function Employees(db){

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/bets')
        .then(res => {
            // console.log(res)
            setPosts(res.data)
            // console.log(res.data.who_is_it)
        })
        .catch(err => {
            console.log(err)
        })

        
    })
 


        // const [posts, setPosts] = useState([])
    
    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/bets')
    //     .then(res => {
    //         // console.log(res)
    //         setPosts(res.data)
    //         // console.log(res.data.who_is_it)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // })

    // console.log(posts.length)
    // console.log(posts[1].away_team)
    // const dannyLength = db.collection.find()
    // dannyLength.count()
    // console.log(dannyLength)
    // var cursor = db.collection('bets').find({});
    // db.collection.find( { who_is_it: "Danny",   outcome_of_bet: "Won" } ).count();

    document.addEventListener("DOMContentLoaded", () => {
        function counter(id, start, end, duration) {
         let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
           current += increment;
           obj.textContent = current;
           if (current == end) {
            clearInterval(timer);
           }
          }, step);
        }
        counter("count1", 0, 10, 3000);
        counter("count2", 100, 21, 2500);
        counter("count3", 0, 40, 3000);
       });
       



return(
    <div className= "full-page-main-page">
        <div className="form-and-table-container">
            <div class="col">
                <div className="logo-container">
                <div id="container">
                    <div class="top left " >£<span id="count1" className="count"></span></div>
                    <div class="top right " id=""><span id="count2" className="count"></span></div>
                    <div class="bottom left" id=""><span id="count3" className="count"></span></div>
                    <div class="bottom right" id=""><span id="count4" className="count"></span></div>
                    <img src ={r2rlogo} alt="r2rlogo" class="r2r-logo" />
                </div>
                </div>
                <Form />
            </div>
        <div className="iframe-and-betslip-container">
            <div class="row iframe-row">
                {/* <iframe class= "iframe-chart col-12" src="https://charts.mongodb.com/charts-project-0-yabzy/embed/charts?id=0939b01d-2239-4be9-9248-1dabbf88dcb2&autoRefresh=10&theme=dark"/>             */}
            </div>        
            <div class="row">
            <CurrentWeekBetslip class="col-12"/>
            </div>
            </div>
        </div>
        
        <div className="container ">
            <div class="card_container">
                <Week5 />
                <Week4 />
                <Week3 />
                <Week2 />
                <Week1 />
            </div>
        </div>
        <div class="row bottom-charts">
        {/* <iframe class= "iframe-table" src="https://charts.mongodb.com/charts-project-0-yabzy/embed/charts?id=d16819a3-c36d-414d-9b60-d977c7b0d700&autoRefresh=10&theme=dark"/>             */}
        </div>         
        {/* <ul className = "employees-list">
            {   
                posts.map(post => <li key={post.id}>
                    <div class ="card_content">
                    <div className ="single-bet-card">
                        <div className="nameAndDateBox">   
                            <p className = "bet-card-text"><h3 className ="bet-text-h2">{post.who_is_it}</h3></p>
                            <p className = "bet-card-text"><span className = "bet-text-data">{post.betting_weekend_selector}</span></p>
                        </div> 
                        <div className = "fixtureAlign">
                            <p className = "bet-card-text"><span className = "bet-text-data"> {post.home_team}</span></p>
                            <p className="vsPeeTag">vs</p>
                            <p className = "bet-card-text"><span className = "bet-text-data"> {post.away_team}</span></p>
                        </div>
                        <div className = "otherInfoAndBetBox">
                            <p className = "bet-card-text"><span className = "bet-text-data">{post.what_is_the_bet}</span></p>
                            <p className ="otherInfoAndBe   tBoxPeeTag">-</p>
                            <p className = "bet-card-text"><span className = "bet-text-data">{post.other_info_needed}</span></p>
                        </div>
                        <div className = "oddsAndOutcomeBox">
                            <p className = "bet-card-text employee-card-text-odds">Odds:  <span className = "bet-text-data">{post.what_are_the_odds}</span></p>
                            <p className = "bet-card-text"><span className = "bet-text-data">{post.outcome_of_bet}</span></p>
                        </div>
                    </div>
            </div>
                    </li>)
            }
            </ul> */}
    </div>
    )
}
export default Employees

// REACT BUILDPACK FROM GITHUB CHANGED TO HEROKUS OWN
// https://github.com/mars/create-react-app-buildpack