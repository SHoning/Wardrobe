function getLocation(){
    $.get("api/location/", function(data){
    if (data== true){
        $("#fight").show();
        $("#gameConsole").html("<h2>you reached Narnia</h2>");
        return;
    }
    $("#gameConsole").html("<p>There is nothing here, better get out again</p>");
    });
}

function fightWitch(){
    $.get("api/location/fight", function(data){
    if(data==true){
        $("#fight").hide();
        $("#gameConsole").html("</h2>you have killed the witch<h2><p> you can now talk to Aslan to finish the game</p>");
        $("#talk").show();
        return;
    }
    $("#gameConsole").html("<p>The witch staggers but is still alive, try again!</p>");
    });
}

function winGame(){

html="<img src='https://media.giphy.com/media/11EhiIoyUsda0/giphy.gif'>";

$("#gameConsole").html(html);
}

function getLog(){
    $.get("/api/log/", function(data){
        if (data.length<=0){
            return;
        }

        html="";

        $("#gameConsole").html(html);
    });
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
    },function(){getLog();}
    );
}

$("#setWardrobe").submit(saveWardrobe);
$("#fight").click(fightWitch());
$("#talk").click(winGame())

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
    });


//If you click close, close will hide, get in will hide and open will show
    $("#close").click(function(){
         $("#close").hide();
         $("#getIn").hide();
         $("#open").show();
    });


//If you click get in, get in will hide kick will hide and get out will show
    $("#getIn").click(function(){
         $("#getIn").hide();
         $("#getOut").show();
         $("#kick").hide();
    }, function(){getLocation();});


$("#getOut").click(function(){
    $("#fight").hide();
    $("#talk").hide();
    $("#getOut").hide();
    $("#getIn").show();
})

getLog;