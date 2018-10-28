
function popoverFunc() {
    $("[data-toggle=popover]").each(function(i, obj) {
        $(this).popover({
            html: !0,
            content: function() {
                var id = $(this).attr('id')
                return $('#popover-content-' + id).html()
            }
        })
    })
}
$(document).ready(function() {


    var names = ["Jacob","Isabella","Ethan","Emma","Michael","Olivia","Alexander","Sophia","William","Ava","Joshua"];
    // var names = $.map(names,function(value,i) {
    //   return {'id':i,'name':value,'email':value+"@email.com"};
    // });
    var at_config = {
      at: "@",
      data: names,
      insertTpl: '${name}',
      limit: 200
    };
    
    popoverFunc();
    $("#collapse").click(function(e) {
        e.preventDefault();
        $(".msg-col.msgCollapse").toggleClass("collapsed");
        $(".col2.right-side").toggleClass("collapsed");
        $(".group-list").toggleClass("collapsed");
        if ($(this).css("transform") == 'none') {
            $(this).css("transform", "rotate(180deg)")
        } else {
            $(this).css("transform", "")
        }
    });
    $("li.user-obj").click(function(e) {
        e.preventDefault();
        $("li.user-obj").removeClass("activeGroup");
        $(this).addClass("activeGroup")
    });

 
 var el = $("#emoji").emojioneArea();
  el[0].emojioneArea.on("emojibtn.click", function(btn, event) {
    var $test = $('#emoji').data("emojioneArea");
    var str = $('#input-default').html() + btn.html();
    $( "#input-default" ).empty();
     $('#input-default').append(str);
    // $( "#input-default" ).focus();
  });

   setTimeout(() =>{ $('#input-default').atwho(at_config)}, 1000);

    $('#input-default').on('keydown', function(event){
        if(event.which == 13){
         event.preventDefault(); // < ---------- preventDefault
         return sendMessage(getMessageText())
        }
    });

     var getMessageText, sendMessage;
        getMessageText = function() {
            var $message_input;
            var $message_text;
            $message_input = $('#input-default').html();
             //console.log($message_input);
            return $message_input
        };
        sendMessage = function(text) {
            var $messages, message;
            if (text.trim() === '') {
                return
            }
            $('#input-default').empty();
            $messages = $('.messages');
            message = new Message({
                name: 'Jhon',
                text: text
            });
            message.draw();
            return $messages.animate({
                scrollTop: $messages.prop('scrollHeight')
            }, 300)
        };

            var count = 0;
		    var Message;
		    Message = function(arg) {
		        this.text = arg.text, this.name = arg.name;
		        this.draw = function(_this) {
		            return function() {
		                count = count + 1;
		                var $message;
		                $message = $($('.message_template').clone().html());
		                $message.find('.msg-name').html(_this.name);
		                $message.find('img.avatar').attr('id', 'check' + count);
		                $message.find('.proCard').attr('id', 'popover-content-' + 'check' + count);
		                $message.find('.text').html(_this.text);
		                $('.messages').append($message);
		                popoverFunc();
		                return setTimeout(function() {
		                    return $message.addClass('appeared')
		                }, 0)
		            }
		        }(this);
		        return this
		    };

        $('#input-default').on('focus', function() {
          $('.message_input-container').addClass('focused');
      });

      $('#input-default').off('focus', function() {
          $('.message_input-container').removeClass('focused');
      });
});
