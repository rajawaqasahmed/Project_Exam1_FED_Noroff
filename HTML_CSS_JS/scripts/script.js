fetch('https://api.spacexdata.com/v2/launches/all')
    .then(result => result.json())
    .then((res) => {
	console.log("reached before res");
    createEvents(res);

	console.log("reached after res");
  })
.catch(err => console.log(err))

function createEvents(thisEvent){
	console.log("reached inside createCards");
	var details = document.getElementById('cards2');
    var unix = Math.round(+new Date()/1000);
    
    console.log(unix);
    
    details.innerHTML += "<span style='text-align:left'><h1 class='my_heading'><font color='white'>Future event</font></h1></span>";
	for (var i=thisEvent.length-1 ; i > 0 ; i--)
		{
            
            if (thisEvent[i]['launch_date_unix'] > unix)
                {
                    
                    details.innerHTML += "<br><div class='container'  style='background-color:aliceblue;border-spacing: 5px'><div class='card-container'><h4> Date:" + thisEvent[i]['launch_date_local']+ "</h4>" + "<br><b>Rocket Name:</b> " + thisEvent[i]['rocket']['rocket_name'] + "<br><b>Rocket Type:</b> " + thisEvent[i]['rocket']['rocket_type'] + "<br> <b>Description: </b>" + thisEvent[i]['details'] + "</div></div>";
                }
           

		}
    
    details.innerHTML += "<span style='text-align:left'><h1 class='my_heading'><font color='white'>Past event</font></h1></span>";
    for (var i=thisEvent.length-1 ; i > 0 ; i--)
		{
            
            if (thisEvent[i]['launch_date_unix'] < unix)
                {
                    
                    details.innerHTML += "<br><div class='container'  style='background-color:lightgray;border-spacing: 5px'><div class='card-container'><h4> Date:" + thisEvent[i]['launch_date_local']+ "</h4>" + "<br><b>Rocket Name:</b> " + thisEvent[i]['rocket']['rocket_name'] + "<br><b>Rocket Type:</b> " + thisEvent[i]['rocket']['rocket_type'] + "<br> <b>Description: </b>" + thisEvent[i]['details'] + " <br><a href='" + thisEvent[i]['links']['video_link'] + "' > <img src='images/play_video_icon.png' style='width:20px'/> View Video</a></div></div>";
                }
            

		}

}
document.activeElement