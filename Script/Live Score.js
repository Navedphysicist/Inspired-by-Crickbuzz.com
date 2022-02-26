var scoreData =[
    {
        heading:"SOUTH AFRICA TOUR OF NEW ZEALAND, 2022",
        teams:"New Zealand vs South Africa,",
        odi:"2nd Test",
        timing:"Feb 25 - Mar 01  •  3:30 AM at Christchurch, Hagley Oval",
        indteam:"RSA ",
        indteamover:"174/1 (62.3)",
        slteam:"NZ",
        slteamover:"",
        remdata:"Day 1: 3rd Session",
        fixeddata:"Live Score   |  Scorecard  |  Full Commentary   |  News"
    },
    {
        heading:"SRI LANKA TOUR OF INDIA, 2022",
        teams:"India vs Sri Lanka,",
        odi:"1st T20I",
        timing:"Feb 24  •  7:00 PM at Lucknow, Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
        indteam:"IND",
        indteamover:"199/2 (20)",
        slteam:"SL",
        slteamover:"137/6 (20)",
        remdata:"India won by 62 runs",
        fixeddata:"Live Score   |  Scorecard  |  Full Commentary   |  News"
    },
    {
        heading:"SOUTH AFRICA TOUR OF NEW ZEALAND, 2022",
        teams:"New Zealand vs South Africa,",
        odi:"1st Test",
        timing:"Feb 17 - Feb 21  •  3:30 AM at Christchurch, Hagley Oval",
        indteam:"NZ",
        indteamover:"482",
        slteam:"RSA",
        slteamover:"95 & 111",
        remdata:"New Zealand won by an innings and 276 runs",
        fixeddata:"Live Score   |  Scorecard  |  Full Commentary   |  News"
    },
    {
        heading:"AFGHANISTAN TOUR OF BANGLADESH, 2022",
        teams:"Bangladesh vs Afghanistan, ",
        odi:"1st ODI",
        timing:"Feb 23  •  10:30 AM at Chattogram, Zahur Ahmed Chowdhury Stadium",
        indteam:"AFG",
        indteamover:"215 (49.1)",
        slteam:"BAN",
        slteamover:"219/6 (48.5)",
        remdata:"Bangladesh won by 4 wkts",
        fixeddata:"Live Score   |  Scorecard  |  Full Commentary   |  News"
    },
    {
        heading:"ICC MENS T20 WORLD CUP QUALIFIER A 2022",
        teams:"United Arab Emirates vs Ireland,",
        odi:"Final",
        timing:"Feb 24  •  3:30 PM at Al Amerat, Al Amerat Cricket Ground (Ministry Turf 1)",
        indteam:"IRE ",
        indteamover:"159 (20)",
        slteam:"UAE",
        slteamover:"160/3 (18.4)",
        remdata:"United Arab Emirates won by 7 wkts",
        fixeddata:"Live Score   |  Scorecard  |  Full Commentary   |  News"
    },
    
]
 
 displayData();

function displayData()
{ 
    
    scoreData.map(function(ele){
        var row=document.createElement("div")

        var heading=document.createElement("div")
        heading.setAttribute("id","heading");
        heading.innerHTML=ele.heading;

        var teamsdata=document.createElement("div")
        teamsdata.setAttribute("id","teamsdata");

        var teams=document.createElement("div")
        teams.setAttribute("id","teams");
        teams.innerHTML=ele.teams;

        var odi=document.createElement("div")
        odi.setAttribute("id","odi");
        odi.innerHTML=ele.odi;

        var timing=document.createElement("div")
        timing.setAttribute("id","timing");
        timing.innerHTML=ele.timing;

        var scoreboard=document.createElement("div")
        scoreboard.setAttribute("id","scoreboard");

        var indteamdata=document.createElement("div")
        indteamdata.setAttribute("id","indteamdata");

        var indteam=document.createElement("div")
        indteam.innerHTML=ele.indteam;

        var indteamover=document.createElement("div")
        indteamover.innerHTML=ele.indteamover;

        var slteamdata=document.createElement("div")
        slteamdata.setAttribute("id","slteamdata");

        var slteam=document.createElement("div")
        slteam.innerHTML=ele.slteam;

        var slteamover=document.createElement("div")
        slteamover.innerHTML=ele.slteamover;

        var remdata=document.createElement("div")
        remdata.setAttribute("id","remdata");
        remdata.innerHTML=ele.remdata;
        
        var fixeddata=document.createElement("div")
        fixeddata.setAttribute("id","fixeddata");
        fixeddata.innerHTML=ele.fixeddata;
        


        teamsdata.append(teams,odi)
        indteamdata.append(indteam,indteamover)
        slteamdata.append(slteam,slteamover)
        scoreboard.append(indteamdata,slteamdata,remdata)

        row.append(heading,teamsdata,timing,scoreboard,fixeddata)

        document.querySelector(".childContainerdiv").append(row);

    })
}