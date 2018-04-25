function getLocation(){
    $.get("api/location/")
    //TODO: make the api call, and if we are in narnia we have to toggle the button fight the witch on
}

function getLog(){
    $.get("/api/log/", function(data){
        if (data.length<=0){
            return;
        }

        $("#gameConsole").html(html);
    }
    )
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


getLog;