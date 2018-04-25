function getLocation(){
    $.get("api/location/", function(data){
    if (data){
        $("#fight").show();
        $("#gameConsole").html("<h2>you reached Narnia</h2>");
        return;
    }
    $("#gameConsole").html("<p>There is nothing here, better get out again</p>");
    });
}

function kickCloset(){
    $.get("api/log/kick", function(data){
    if(data){
        $("#gameConsole").html("<p> The housekeeper has seen you kick the wardrobe, you are on a TimeOUT! </p>");
         $("#open").prop( "disabled", true );
         $("#close").prop( "disabled", true );
         $("#getIn").prop( "disabled", true );
         $("#kick").prop( "disabled", true );
         setTimeout(function() {
              $("#open").prop( "disabled", false);
              $("#close").prop( "disabled", false );
              $("#getIn").prop( "disabled", false);
              $("#kick").prop( "disabled", false);
         }, 10000);
         return;
    }
    $("#gameConsole").html("<p> You are kicking an innocent wardrobe, WHY?!</p>")
    });
}

function fightWitch(){
    $.get("api/location/fight", function(data){
    if(data){
        $("#fight").hide();
        $("#gameConsole").html("</h2>you have killed the witch<h2><p> you can now talk to Aslan to finish the game</p>");
        $("#talk").show();
        return;
    }
    $("#gameConsole").html("<p>The witch staggers but is still alive, try again!</p>");
    $("#fight").hide();
    $("#open").show();
    $("#kick").show();
    $("#getOut").hide();
    $("#close").hide();
    });
}

function winGame(){
html="<img src='https://media.giphy.com/media/11EhiIoyUsda0/giphy.gif'>";
    $("#open").hide();
    $("#close").hide();
    $("#getIn").hide();
    $("#getOut").hide();
    $("#kick").hide();
    $("#talk").hide();
    $("#fight").hide();
$("#gameConsole").html(html);
}



function saveWardrobe(e){
    e.preventDefault();
    $.post("/api/log/new",
    {
        name: "wardrobe",
        open: false,
        amInside: false,
        breakDownCapacity: 0,
        working: true
    },function(){$("#gameConsole").html("");}
    );
}

$("#setWardrobe").submit(saveWardrobe);

//If you click the start the game button, you can kick and open
$("#startGame").click(function(){
    $("#startGame").hide();
    $("#open").show();
    $("#kick").show();
});

//If you click the button open, this button wil hide, and Close will show and get in will show
$("#open").click(function(){
    $("#open").hide();
    $("#close").show();
    $("#getIn").show();
    $("#gameConsole").html("");
});


//If you click close, close will hide, get in will hide and open will show
    $("#close").click(function(){
         $("#close").hide();
         $("#getIn").hide();
         $("#open").show();
         $("#gameConsole").html("");
    });


//If you click get in, get in will hide kick will hide and get out will show

$("#getIn").click(function() {
    getLocation();
    $("#getIn").hide();
    $("#getOut").show();
    $("#kick").hide();
    $("#close").hide();
});

$("#getOut").click(function(){
    $("#fight").hide();
    $("#talk").hide();
    $("#getOut").hide();
    $("#getIn").show();
    $("#kick").show();
    $("#gameConsole").html("You are once again staring at the wardrobe");
})

$("#kick").click(kickCloset)
