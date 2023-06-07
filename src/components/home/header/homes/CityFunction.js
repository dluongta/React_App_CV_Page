function openCity(cityName,element,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
     tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    element.style.backgroundColor = color;

}
  document.getElementById("defaultOpen").click();