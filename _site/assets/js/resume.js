alert("test");

$(document).ready() {

  alert("HI!");

  const NUM_JOBS = 4;

  $(".resume-btn").click() {
    var btn_id = $(this).attr('id').slice(-1);

    var i;
    for (i=0; i < NUM_JOBS; i++) {
      
      if ( i == btn_id && $("#panel-" + btn_id).hasClass("hidden") ) {
        $("#panel-" + btn_id).removeClass("hidden");
        $("#panel-" + btn_id).addClass("visible");
      }
      else if ( i != btn_id && $("#panel-" + btn_id).hasClass("visible")  ) {
        $("#panel-" + btn_id).removeClass("visible");
        $("#panel-" + btn_id).addClass("hidden");
      }
    }


  }
}
