$("#main4 .website .website_etude").click(function(e){
    e.preventDefault();
    $("#main4 .modal").show();
    $("#main4 .modal .modal_etude").show();
});

$("#main4 .modal").click(function(e){
    e.preventDefault();
    $("#main4 .modal").hide();
    $("#main4 .modal .modal_etude, .modal_fila, .modal_nuxe").hide();
});

$("#main4 .website .website_fila").click(function(e){
    e.preventDefault();
    $("#main4 .modal").show();
    $("#main4 .modal .modal_fila").show();
});

$("#main4 .website .website_nuxe").click(function(e){
    e.preventDefault();
    $("#main4 .modal").show();
    $("#main4 .modal .modal_nuxe").show();
});