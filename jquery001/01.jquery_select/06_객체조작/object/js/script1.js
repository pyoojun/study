//$('.after p:eq(2)').after('<p>after로 내용 추가</p>').css('background','yellow');
$('<p>insertAfter로 내용 추가</p>').insertAfter('.after p:eq(2)').css('background','yellow');

$('.after p:eq(0)').before('<p>before로 내용 추가</p>').css('background','skyblue');
$('<p>insertBefore로 내용 추가</p>').insertBefore('.after p:eq(1)').css('background','pink');

//append/appendTo/prepend/perpendTo
const basket=$('#basket')
const apple=$('#apple')
const banana=$('#banana')
const orange=$('#orange')

/* basket.append(apple)
basket.append(orange) */

/* apple.appendTo(basket) */
basket.prepend(apple)

$('.content3').hover(function(){
    $('#div1').show();
    $('#div2').hide();
},function(){
    $('#div1').hide();
    $('#div2').show();
})

$('.box2').animate({left:400},1000).animate({top:400},500);

$('.box3').delay(1500).animate({bottom:450},2000).animate({right:500,bottom:40},1000);

$('.btn1').on("click focus",function(){
    console.log('welcome')
});

$('.btn2').on({'click focus':function(){
    console.log('클릭했다')
}})

$('.btn3').on({click:function(){
     console.log('클릭으로 이벤트 사용')
},
focus:function(){
     console.log('키보드 이벤트')
}})

$('.btn4').click(function(){
    $(this).parent().next().css({'color':'red'})
});
$('.btn5').on({"mouseover focus":function(){
    $(this).parent().next().css({'color':'green'})
}});

$('.btn4').off("click")
$('.btn5').trigger("mouseover")

$('.btn6').click(function(event){
    event.preventDefault();
    console.log(event)
    $('.txt1').text('나는 클릭이벤트로 내용 바꿔졌어요')
});

$('.btn7').click(function(event){
    $('.txt2').text('나는 클릭이벤트로 내용 바꿔졌어요')
    return false
});

$('.btn9').click(function(){
    $('.txt4').text('나는 클릭이벤트로 내용 바꿔졌어요')
});

$('.btn8').on('dbclick',function(){
    $('.txt3').css({"background":'yellow'});
});

/*$('.click').click(function(){
    $(this).text('클릭되었습니다.')
});*/

let a=true;
$('.click').click(function(){
   if(a==this).text('클릭되었습니다.')
   a=false;
}else{
    $(this).text('클릭 해지')
    a=true;
}
});

$('.hover').hover(function(){
    $(this).text('마우스포인트가 위에 있어요')
},function(){
    $(this).text('마우스포인트 벗어남')
});

$('.mouseover').mouseenter(function(){
    $(this).text('마우스포인트가 위에 있어요')
});
$('.mouseove').mouseleave(function(){
    $(this).text('마우스포인트가 벗어남')
});

$('#input1').focus(function(){
    $(this).addClass('active');
});
$('#input1').blur(function(){
    $(this).removeClass('active');
});

$('.animal').each(function(){
    let name=$(this).text();

    console.log(name)
});

let box11=$('.box11');
let boxWidth=box11.width();
let boxHeight=box11.height();
let boxFont=box11.css('font-size');
let boxColor=box1.css('background-color');

$('.span1').text(boxWidth);
$('.span2').text(boxHeight);
$('.span3').text(boxFont);
$('.span4').text(boxColor);