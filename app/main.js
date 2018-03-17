import JSONFormatter from 'json-formatter-js'




$("#formatBtn").click(function(){
    try{
        var formatter = new JSONFormatter(JSON.parse($("#input").val()),1);
        $("#formatResult").html(formatter.render());
    }catch(e){
        $("#formatResult").html("<pre style='color:red'>"+e+"</pre>");
    }

  
});




















