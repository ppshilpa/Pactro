import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`{
    from {
        opacity:0;
    }
  
    to {
        opacity:1;
    }
}`

export const fadeInRightShorter = keyframes`
from {
  opacity: 0;
  transform: translate(-50px,0);
  transform-origin: 0 0;
}

to {
  opacity: 1;
  transform: none
}`;

export const fadeInRight = keyframes`
0% {
    -webkit-transform: translate3d(100%,0,0);
    opacity: 0;
    transform: translate3d(100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;

export const fadeInLeftShorter = keyframes`{
    from {
        opacity: 0;
        transform: translate(50px,0);
        transform-origin: 0 0;
    }
    to {
        opacity: 1;
        transform: none
    }
}`

export const fadeInLeft = keyframes`
0% {
    -webkit-transform: translate3d(-100%,0,0);
    opacity: 0;
    transform: translate3d(-100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;

export const fadeInUpShorter = keyframes`
from {
    opacity: 0;
    transform: translate(0,50px);
    transform-origin: 0 0;
}
to {
    opacity:1;
    transform:none
}`

export const fadeInUp = keyframes`
0% {
    -webkit-transform: translate3d( 0, 100%, 0 );
    opacity: 0;
    transform: translate3d( 0, 100 %, 0 )
}

to {
    -webkit-transform: translateZ( 0 );
    opacity: 1;
    transform: translateZ( 0 )
}`

export const fadeInDownShorter = keyframes`
from {
    opacity: 0;
    transform: translate(0,-50px);
    transform-origin: 0 0;
}

to {
    opacity: 1;
    transform: none
}`

export const blurIn = keyframes`{
    from {
        opacity: 0;
        filter: blur(20px);
        transform: scale(1.2);
    }
    to {
        opacity: 1;
        filter: blur(0);
        transform: none 
    }
}`

export const grayOut = keyframes`{
    from {
        opacity: 1;
        filter: grayscale(0);
    }
    15% {
        filter: grayscale(100%);
    }
    to {
        opacity: .0;
        filter: grayscale(100%);
    }
}`

export const dotPulse = keyframes`{
    from {
        opacity:1;
        transform:scale(.2)
    }
  
    to {
        opacity:0;
        transform:scale(1)
    }
}`

export const maskUp = keyframes`{
    from {
        transform: translate(0,100%)
    }
  
    to {
        transform: translate(0,0)
    }
}`

export const maskRight = keyframes`{
    from {
        transform: translate(-100%,0)
    }
    to {
        transform: translate(0,0)
    }
}`

export const maskDown = keyframes`{
    from {
        transform: translate(0,-100%)
    }
    to {
        transform: translate(0,0)
    }
}`

export const maskLeft = keyframes`{
    from {
        transform: translate(100%,0)
    }
    to {
        transform: translate(0,0)
    }
}`

export const slideInUp = keyframes`{
    0% {
        transform: translate3d(0, 100%, 0);
        visibility: visible
    }

    to {
        transform: translateZ(0)
    }
}`

export const slideInDown = keyframes`{
    0% {
        transform: translate3d(0, -100%, 0);
        visibility: visible
    }

    to {
        transform: translateZ(0)
    }
}`

export const slideInLeft = keyframes`{
    0% {
        transform: translate3d(-100%, 0, 0);
        visibility: visible
    }
  
    to {
        transform: translateZ(0)
    }
}`

export const slideInRight = keyframes`{
    0% {
        transform: translate3d(100%, 0, 0);
        visibility: visible
    }
  
    to {
        transform: translateZ(0)
    }
}`

export const flipInX = keyframes`{
    0% {
        animation-timing-function: ease-in;
        opacity: 0;
        transform: perspective(400px) rotateX(90deg)
    }
  
    to {
        transform: perspective(400px)
    }
}`

export const flipInY = keyframes`{
  0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: perspective(400px) rotateY(90deg);
  }

  to {
      transform: perspective(400px);
  }
}`

export const flipOutY = keyframes`{
    0% {
        animation-timing-function: ease-out;
        transform: perspective(400px)
    }

    to {
        opacity: 0;
        transform: perspective(400px) rotateY(90deg)
    }
}`

export const brightIn = keyframes` {
    0% {
        animation-timing-function: ease-in;
        filter: brightness(0%)
    }
  
    to {
        filter: brightness(100%)
    }
}`

export const zoomInShorter = keyframes`{
    0%{
        -webkit-transform:scale3d(.8,.8,.8);
        opacity:0;
        transform:scale3d(.8,.8,.8)
    }
    50%{
        opacity:1
    }
}`

export const bounceInUp = keyframes`{
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
        opacity: 0;
        transform: translate3d(0, 3000px, 0);
    }

    60% {
        opacity: 1;
        transform: translate3d(0, -20px, 0);
    }

    75% {
        transform: translate3d(0, 10px, 0);
    }

    90% {
        transform: translate3d(0, -5px, 0);
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}`

export const slideZoomIn = keyframes`{
    0%{
        transform:scale3d(1,1,1);
        opacity: 1;
    }
    100% {
        transform:scale3d(1.1,1.1,1);
        opacity: 1;
    }
}`

export function splitRight () {
    if ( $.fn.appear ) {
        var times = new Array();
        $( '.owl-item [data-animation-name="splitRight"]' ).each( function () {
            var text = $( this ).text();
            var delay = ( $( this ).data( "animation-delay" ) ? $( this ).data( "animation-delay" ) : "0" );
            $( this ).text( "" );
            for ( var j = text.length - 1; j >= 0; j-- ) {
                $( this ).prepend( '<div class="d-inline-block appear-animate" data-animation-delay="' + ( delay + 90 * j ) + '">' + ( text[ j ] === " " ? '&nbsp' : text[ j ] ) + '</div>' );
            }
        } );

        $( ".appear-animate" ).each( function () {
            if ( !$( this ).hasClass( 'animated' ) ) {
                $( this ).appear( function () {
                    var $this = $( this );
                    if ( $this.closest( ".owl-carousel.slide-animate" ).length > 0 )
                        if ( $this.closest( '.owl-item.active' ).length === 0 )
                            return;
                    var name, delay, duration;
                    name = ( $this.data( "animation-name" ) ? $this.data( "animation-name" ) : "fadeIn" );
                    duration = ( $this.data( "animation-duration" ) ? $this.data( "animation-duration" ) : "1000" );
                    delay = ( $this.data( "animation-delay" ) ? $this.data( "animation-delay" ) : "0" );
                    $this.addClass( "animated" );
                    var id = setTimeout( function () {
                        $this.addClass( name );
                        $this.css( 'animationDuration', duration + "ms" );
                        $this.addClass( "appear-animation-visible" );
                    }, parseInt( delay ? delay : 0 ) );
                    if ( $this.closest( ".owl-carousel.slide-animate" ).length > 0 )
                        times.push( id );
                }, {
                    accX: $( this ).data( 'x' ) ? $( this ).data( 'x' ) : 0,
                    accY: $( this ).data( 'y' ) ? $( this ).data( 'y' ) : -50
                } )
            }
        } );
        $( ".owl-carousel.slide-animate" ).each( function () {
            var translateCarousel;
            $( this ).on( 'translate.owl.carousel', function ( event ) {
                translateCarousel = $( this ).find( ".owl-item.active" );
            } );

            $( this ).on( 'translated.owl.carousel', function ( event ) {
                var item = $( this );

                if ( $( this ).find( ".owl-item.active" )[ 0 ] !== translateCarousel[ 0 ] ) {
                    for ( var i = 0; i < times.length; i++ )
                        clearTimeout( times[ i ] );
                    times = times.splice();
                    translateCarousel.find( ".appear-animate" ).removeClass( "appear-animation-visible" );
                    translateCarousel.find( ".appear-animate" ).css( 'animationDelay', "" );
                    translateCarousel.find( ".appear-animate" ).css( 'animationDuration', "" );
                    translateCarousel.find( ".appear-animate" ).removeClass( "animated" );
                    translateCarousel.find( ".appear-animate" ).each( function () {
                        var $this = $( this );
                        var name;
                        name = ( $this.data( "animation-name" ) ? $this.data( "animation-name" ) : "fadeIn" );
                        $this.removeClass( name );
                    } );
                }
                item.find( ".owl-item.active .appear-animate" ).each( function () {
                    var $this = $( this );
                    var name, delay, duration;
                    name = ( $this.data( "animation-name" ) ? $this.data( "animation-name" ) : "fadeIn" );
                    duration = ( $this.data( "animation-duration" ) ? $this.data( "animation-duration" ) : "1000" );
                    delay = ( $this.data( "animation-delay" ) ? $this.data( "animation-delay" ) : "0" );

                    $this.addClass( name );
                    if ( name != "splitRight" ) {
                        $this.css( 'animationDelay', delay + "ms" );
                        $this.css( 'animationDuration', duration + "ms" );
                    }
                    $this.addClass( "animated" );
                    var id = setTimeout( function () {
                        $this.addClass( "appear-animation-visible" );
                    }, parseInt( delay ? delay : 0 ) );
                    times.push( id );
                } );
            } );
        } );
    }
}