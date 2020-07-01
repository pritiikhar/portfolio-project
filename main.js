function update(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}



function timeIn24() {
var d = new Date(); /* creating object of Date class */
var hr = d.getHours();
var min = d.getMinutes();
hr = update(hr);
min = update(min);


document.getElementById("digi").innerText = hr + " : " + min; /* adding time to the div */
 
 
}

function timeIn12() {

var d = new Date(); /* creating object of Date class */
var hr = d.getHours();
var min = d.getMinutes();

var midday = " ";
  if (hr == 12) 
midday = "AM";
else if(hr > 12)
midday = "PM";
else 
midday = "AM"  
  hr = (hr == 0) ? 12 : ((hr > 12) ? (hr - 12): hr); /* assigning hour in 12-hour format */

hr = update(hr) ;
min = update(min);
document.getElementById("digi").innerText = hr + " : " + min + " " + midday; /* adding time to the div */
   
}
