$(document).ready(function() {
   // 맴버정보 더보기 이벤트
   $.ajax({
      url: "./json/member.json",
      type: "GET",
      dataType: "JSON",
      success: function(data) {
         for (i = 0; i < data.length; i++) {
            var temp = `<li class="mb_list hidden">
               <div class="mb_imgbox">
                  <img src="${data[i].img}" />
               </div>
               <div class="mb_txtbox">
                  <p><span>name :</span> ${data[i].name}</p>
                  <p><span>age :</span> ${data[i].age}</p>
                  <p><span>gender :</span> ${data[i].gender}</p>
                  <p><span>place :</span> ${data[i].place}</p>
                  <p class="mb_intro"><span>intro :</span> ${data[i].intro}</p>
               </div>
            </li>`;
            $(".mb_wrap").append(temp);
         }
      },
      error: function() {
         alert("데이터 로드에 실패했습니다.");
      }
   });

   $(".more_btn").click(function() {
      var len = $(".hidden").length;
      if (!len <= 0) {
         $(".hidden")
            .eq(1)
            .removeClass("hidden")
            .addClass("mb_slideup");
         $(".hidden")
            .eq(0)
            .removeClass("hidden")
            .addClass("mb_slideup");
      } else {
         alert("더이상 표시할 내용이 없습니다.");
      }
   });

   // 슬라이트 터치스와이프 이벤트
   // $('.page_slide_box').cfTouchSwipe({
   //			minSwipeLength: 50,		// 사용자가 swipe 했다고 판단하는 최소 거리
   //			minMoveLength: 15,		// 이 거리보다 작게 움직이고 triggerClick = true 이면 click 이벤트 trigger
   //			triggerClick: true,		// triggerClick false 일 경우 click 이벤트가 발생하지 않음
   //			preventDefault: true,		// touchstart, touchmove 이벤트에 대해 preventDefault 할지 여부
   // });
   $(".slider_box").cfTouchSwipe({
      triggerClick: false,
      swipeLeft: function() {
         $(".slider_nextbtn").trigger("click");
      },
      swipeRight: function() {
         $(".slider_prevbtn").trigger("click");
      }
   });

   // 스무스 스크롤 이벤트
   $("body, html").bind("mousewheel", function(e) {
      var top = parseInt($("#section").offset().top),
         SCTOP = 350;
      if (!(e.originalEvent.wheelDelta == 120)) {
         $("#section").css("top", top - SCTOP + "px");

         var secHeight = $("#section").height();
         var winHeight = $(window).height();

         myHeight = winHeight - secHeight;

         if (top <= myHeight + SCTOP) {
            // setTimeout(function() {
            $("#section").css("top", myHeight);
            // }, 100);
         }

         windowScroll();
      } else {
         $("#section").css("top", top + SCTOP + "px");

         if (top >= -SCTOP) {
            // setTimeout(function() {
            $("#section").css("top", "0");
            // }, 100);
         }
      }
   });
});
