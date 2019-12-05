// TODO: add code here
window.addEventListener("load", function() {
            fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("container");
                  // Add HTML that includes the JSON data
				  for (let i=0; i<json.length; i++){
                  div.innerHTML += `
				  <div class="astronaut">
				  <div class="bio"
					<h3>${json[i].firstName} ${json[i].lastName}</h3>
                     <ul>
                        <li>Hours in Space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].status}</li>
                        <li>Chance of Precip ${json[i].skills}</li>
                     </ul>
					</div>
					<img class="avatar" src=${json[i].picture}>
					</div>
                  `};
               });
            });
         });