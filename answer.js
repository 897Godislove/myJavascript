$(document).ready(function () {
  $('#content').hide()
  $('#ready').click(()=>{
    $('#doc').slideToggle();
    $('#content').show();
  })
});
  const first = () => {
    var getContent = $('#HTMLcontent').html()
    alert(getContent)
  }

  const second = () => {
    var setContent = $('#HTMLcontent').html()
    $('#info1').html(setContent)
  }

  let easy = $('#textContent').text();
  document.getElementById('commend1').addEventListener('mouseover', ()=>{
    alert(easy)
  })  

  document.getElementById('commend2').addEventListener('click', ()=>{
    $('#info2').text(easy);
  })

  document.getElementById('imageAlt').addEventListener('mouseover', ()=>{
    $('#info3').attr('alt', 'There is supposed to be an image here...');
  })
  document.getElementById('imageAlt').addEventListener('mouseout', ()=>{
    $('#info3').attr('alt', '');
  })