fetch('https://api.spacexdata.com/v2/launches/all')
    .then(result => result.json())
    .then((res) => {
	console.log("reached before res");
    createEvents(res);

	console.log("reached after res");
  })
.catch(err => console.log(err))

function createEvents(thisEvent){
	console.log("reached inside createEvent");
	var details = document.getElementById('events_list');
    var unix = Math.round(+new Date()/1000);
    var nDate = new Date();
    
    console.log(unix);
    
    details.innerHTML += "<span style='text-align:center; '><h3><font color='white'>Future event</font></h3></span>";
	for (var i=thisEvent.length-1 ; i > 0 ; i--)
		{

            
            if (thisEvent[i]['launch_date_unix'] > unix)
                {
                      var a = new Date(thisEvent[i]['launch_date_unix'] * 1000);
                      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                      var year = a.getFullYear();
                      var month = months[a.getMonth()];
                      var date = a.getDate();

                      var time = date + ' ' + month + ' ' + year ;
                    nDate = thisEvent[i]['launch_date_local'];
                    details.innerHTML += "<div style='padding-left:2px;text-align:left;background-color:aliceblue;border:1px; border-color:black;border-style: solid; border-color: darkgray; padding: 2px;'><div class='card-container'> <b>Rocket: </b> " + thisEvent[i]['rocket']['rocket_name'] + " on <b>Date:</b>" + time + "</div></div> ";
                }
           

		}
    
    details.innerHTML += "<span style='text-align:center'><h3><font color='white'>Past event</font></h3></span>";
    for (var i=thisEvent.length-1 ; i > 0 ; i--)
		{
            
            if (thisEvent[i]['launch_date_unix'] < unix)
                {
                      var a2 = new Date(thisEvent[i]['launch_date_unix'] * 1000);
                      var months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                      var year2 = a.getFullYear();
                      var month2 = months2[a.getMonth()];
                      var date2 = a2.getDate();

                      var time2 = date2 + ' ' + month2 + ' ' + year2 ;
                    
                    details.innerHTML += "<div style='padding-left:2px;text-align:left; background-color:lightgray;border:1px; border-color:black;border-style: solid; border-color: darkgray; text-decoration-color:black;'><div class='card-container'><a href='"+thisEvent[i]['links']['video_link']+"'><img src='images/play_video_icon.png' style='width:20px'/></a> " + "<b>Rocket Name:</b> " + thisEvent[i]['rocket']['rocket_name'] +  " on <b>Date:</b> " + time2 + "</div></div>";
                }
            

		}

}
document.activeElement

