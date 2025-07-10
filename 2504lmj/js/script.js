// 웹사이트
$("#main4 .website .website_etude").click(function(e){
    e.preventDefault();
    $("#main4 .modal").show();
    $(".modal_fila").hide();
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
    $("#main4 .modal .modal_etude").hide();
    $("#main4 .modal .modal_fila").show();
});

// 상세페이지
$("#main4 #detail_page_btn").click(function(e){
    e.preventDefault();
    $("#main4 .detail_page").show();
    $("#main4 .website").hide();
    $("#main4 .detail_page").show();
});
$("#main4 #website_btn").click(function(e){
    e.preventDefault();
    $("#main4 .website").show();
    $("#main4 .detail_page").hide();
    $("#main4 .website").show();
});
$("#main4 .detail_page .detail_page_nuxe").click(function(e){
    e.preventDefault();
    $("#main4 .modal").show();
    $(".modal_fila, .modal_etude").hide();
    $("#main4 .modal .modal_nuxe").show();
});