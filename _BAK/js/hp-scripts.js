$(document).ready(function() {
    var winHeight = $(window).height();

    enquire.register("screen and (min-width: 1024px)", {
        match: function () {
            $('body').addClass('reveal');

            //Based on the Scroller function from @sallar
            var $content = $('header .feature')
              , $blur    = $('.fixed-background')
              , wHeight  = $(window).height();

            $(window).on('resize', function(){
              wHeight = $(window).height();
            });

            window.requestAnimFrame = (function()
            {
              return  window.requestAnimationFrame       ||
                      window.webkitRequestAnimationFrame ||
                      window.mozRequestAnimationFrame    ||
                      function( callback ){
                        window.setTimeout(callback, 1000 / 60);
                      };
            })();

            function Scroller()
            {
              this.latestKnownScrollY = 0;
              this.ticking            = false;
            }

            Scroller.prototype = {
             
              init: function() {
                window.addEventListener('scroll', this.onScroll.bind(this), false);
                $blur.css('background-image',$('header:first-of-type').css('background-image'));
              },


              onScroll: function() {
                this.latestKnownScrollY = window.scrollY;
                this.requestTick();
              },

              
              requestTick: function() {
                if( !this.ticking ) {
                  window.requestAnimFrame(this.update.bind(this));
                }
                this.ticking = true;
              },

              update: function() {
                var currentScrollY = this.latestKnownScrollY;
                this.ticking       = false;                    
                
                var slowScroll = currentScrollY / 2
                  , blurScroll = currentScrollY * 2
                  , opaScroll = 1.4 - currentScrollY / 400;
                
                $content.css({
                  'transform'         : 'translateY(' + -Math.abs(slowScroll) + 'px)',
                  '-moz-transform'    : 'translateY(' + -Math.abs(slowScroll) + 'px)',
                  '-webkit-transform' : 'translateY(' + -Math.abs(slowScroll) + 'px)',
                  'opacity' : opaScroll
                });
                
                $blur.css({
                  'opacity' : blurScroll / wHeight
                });
              }
            };

            var scroller = new Scroller();  
            scroller.init();
        },
        unmatch: function () {
        }
    });
})