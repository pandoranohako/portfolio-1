// 駿
var images = [
  "url(https://www.yakiniku.jp/sakai/wp-content/uploads/2018/07/1450_1200_topimage_02.png)",
  "url(https://www.yakiniku.jp/sakai/wp-content/uploads/2018/07/1450_1200_topimage_01.png)",
  "url(https://www.yakiniku.jp/sakai/wp-content/uploads/2018/07/1450_1200_topimage_02.png)"
]; // ランダム表示させたい画像のパス

$(function() {
  var backgroundRandom = function() {
    var number = Math.floor(Math.random() * images.length); // 0~3の数値を算出
    var selectedImg = images[number]; // 算出された数値を元に、1行目の配列から取り出す
    $(".main_img").css("background-image", selectedImg); // cssにランダムに選ばれた画像を背景設定する
  };
  setInterval(backgroundRandom, 3000); // 1000msごとにランダム切り替えを繰り返す
});
// $(function() {
//   // インナークラスの中のli要素にホバーしたら
//   $(".inner li").hover(function() {
//     $(this)
//       .next(".inner")
//       .slideToggle();

//     $(".inner li")
//       .not($(this))
//       .next("inner")
//       .slideUp();
//   });
// });
// ここまで
$(function(){
  // 努
  $('#1').click(function() {
    $('.info__left__content').removeClass('active');
    $('#1_content').addClass('active');
  });

  $('#2').click(function() {
    $('.info__left__content').removeClass('active');
    $('#2_content').addClass('active');
  });

  $('#3').click(function() {
    $('.info__left__content').removeClass('active');
    $('#3_content').addClass('active');
  });
});

// import "./shun"
// import "./tsutomu"
// import "./ucchi"
