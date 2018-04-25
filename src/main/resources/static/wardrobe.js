function getLog(){
    $.get("/api/log/", function(data){
        if (data.length<=0){
            return;
        }

        html="<p> The status of the wardrobe is </p>";
        html+="<p> Working: " + data.working + " Open: " + data.open;
        if(data.amInside == true){
            html+=" You ARE inside"
        }else{
            html+=" You are from the outside looking at the closet!"
        }
        html+="</p>"

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

getLog;