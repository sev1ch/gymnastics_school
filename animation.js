$(".fade-in-first").addClass("animated fadeInUp");
setTimeout(function(){
     $(".fade-in-second").animate({ opacity: 1 });
    $(".btn-explore").addClass("pulse-anim");
}, 1300);