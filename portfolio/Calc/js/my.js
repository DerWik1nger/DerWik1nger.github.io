$(document).ready( function(){
var tirSize=90;
var pricePaper=0;
var priceForm=0;
var pricePrint=0;
var sum=0;



var typePaper={
  "Мелованная бумага (белая)":6.8,
  "Бумага повышенной белизны":40.5,
  "Prestige Лен (белый)":45};

var typeColor={
    "Односторонняя черно-белая":{"forma":100, "print":14},
    "Двухсторонняя черно-белая":{"forma":220, "print":28},
    "Односторонняя цветная":{"forma":110, "print":37},
    "Двухсторонняя цветная+черно-белая":{"forma":220, "print":51},
    "Двухсторонняя цветная":{"forma":220, "print":74}
  };

  console.log (typeColor);

insertPaper();
insertColor();
/*******************************************************/
 function insertPaper(){
   var html="";
   for(type in typePaper){
     html+="<option value='"+type+"'>"+type+"</option>";
   }
   $('#paper').append(html);


 }
/*******************************************************/
  function insertColor(){
    var html="";
    for(type in typeColor){
      html+="<option value='"+type+"'>"+type+"</option>";
    }
    $('#color').append(html);


  }
/*******************************************************/
function summa(){
  var Paper=$("#paper").val();
  if(Paper!='-')
  pricePaper=typePaper[Paper]*tirSize;
  sum=pricePaper+priceForm+pricePrint;
  $('.price span').text(sum);
  var Color=$("#color").val();
  if(Color!='-'){
    priceForm=typeColor[Color]["forma"];
    pricePrint=typeColor[Color]["print"]*tirSize;
}
}
/*******************************************************/
$('#size').change(function(){
  tirSize=$("#size").val()/30;
  summa();
});
/*******************************************************/
$('#paper').change(function(){

  summa();
});
/*******************************************************/
$('#color').change(function(){
var Color=$("#color").val();
summa();
  $(".card-images img").hide("slow");
  switch (Color) {
    case "Односторонняя черно-белая":$("#card_1_0").show();
      break;
    case "Двухсторонняя черно-белая":$("#card_1_1").show();
      break;
    case"Односторонняя цветная":$("#card_4_0").show();
      break;
    case"Двухсторонняя цветная+черно-белая":$("#card_4_1").show();
      break;
    case"Двухсторонняя цветная":$("#card_4_4").show();
      break;
    default:
  }
});


});
