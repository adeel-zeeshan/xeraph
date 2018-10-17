   (function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.name = arg.name;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.find('.msg-name').html(_this.name);
                $message.find('img.avatar').attr('id','check');
                $message.find('img.avatar').attr('id','check');
                $message.find('.proCard').attr('id', 'popover-content-' + 'check');
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, sendMessage;
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message = new Message({
                name: 'Jhon',
                text: text
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };

        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                return sendMessage(getMessageText());
            }
        });
    });
}.call(this)); 


$(document).ready(function(){
    $("[data-toggle=popover]").each(function(i, obj) {

        $(this).popover({
          html: true,
          content: function() {
            var id = $(this).attr('id')
            return $('#popover-content-' + id).html()
          }
        });

        });

    /*User List-toggle*/
    $("#collapse").click(function(e) {
        e.preventDefault();
        $(".col.msgCollapse").toggleClass("collapsed");
        $(".col2.right-side").toggleClass("collapsed");
        if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(180deg)");
    } else {
        $(this).css("transform","" );
    }
    });
    /*Active Group-toggle*/
    $("li.user-obj").click(function(e) {
        e.preventDefault();
        $("li.user-obj").removeClass("activeGroup");
        $(this).addClass("activeGroup");
    });


    $('#input-default').emojiPicker({
          position: 'right',
          fadeTime: 100,
          iconColor: 'black',
          iconBackgroundColor: 'transparent',
          recentCount: 36,
          emojiSet: 'apple',
          container: 'body',
          button: true,
    });
    
});