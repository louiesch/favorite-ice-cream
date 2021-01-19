$(document).ready(function() {
  let flavors = ["Chocolate", "Vanilla", "Strawberry", "Rocky Road", "Cookie Dough"]
  flavors.forEach(function(flavor) {
    $("#output").append("I love " + flavor + "! ")
  });

});