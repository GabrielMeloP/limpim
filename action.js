var hands = false;
var teeth = false;
var shower = false;
var habit = 0;

$( document ).ready( function() {
	$( 'li' ).click( function() {
		var line = $( this ).parents( 'article' ).attr( 'id' ).slice( -2 );
		var opt = $( this ).attr( 'class' ).slice( -2 );

		if( line == '01' && opt == '01' ) {
			skipLine( '02' );
		}
		else if( line == '01' && opt == '02' ) {
			skipLine( '03' );
		}
		else if( line == '02' && opt == '01' ) {
			skipLine( '03' );
		}
		else if( line == '03' && opt == '01' ) {
			skipLine( '04' );
		}
		else if( line == '04' && opt == '01' ) {
			skipLine( '05' );
		}
		else if( line == '05' && opt == '01' ) {
			hands = true;
			habit++;
			skipLine( '06' );
		}
		else if( line == '05' && opt == '02' ) {
			skipLine( '06' );
		}
		else if( line == '06' && opt == '01' ) {
			skipLine( '07' );
		}
		else if( line == '07' && opt == '01' ) {
			teeth = true;
			habit++;
			skipLine( '08' );
		}
		else if( line == '07' && opt == '02' ) {
			skipLine( '08' );
		}
		else if( line == '08' && opt == '01' ) {
			skipLine( '09' );
		}
		else if( line == '09' && opt == '01' ) {
			shower = true;
			habit++;
			skipLine( '10' );
		}
		else if( line == '09' && opt == '02' ) {
			skipLine( '10' );
		}
		else if( line == '10' && opt == '01' ) {
			if( hands ) {
				$( '#hands-yes' ).show();
				$( '#hands-no' ).hide();
			}
			else {
				$( '#hands-yes' ).hide();
				$( '#hands-no' ).show();
			}

			if( teeth ) {
				$( '#teeth-yes' ).show();
				$( '#teeth-no' ).hide();
			}
			else {
				$( '#teeth-yes' ).hide();
				$( '#teeth-no' ).show();
			}

			if( shower ) {
				$( '#shower-yes' ).show();
				$( '#shower-no' ).hide();
			}
			else {
				$( '#shower-yes' ).hide();
				$( '#shower-no' ).show();
			}

			skipLine( '11' );
		}
		else if( line == '11' && opt == '01' ) {
			if( habit == 3 ) {
				$( '#habits-00' ).hide();
				$( '#habits-01' ).hide();
				$( '#habits-02' ).hide();
				$( '#habits-03' ).show();
			}
			else if( habit == 2 ) {
				$( '#habits-00' ).hide();
				$( '#habits-01' ).hide();
				$( '#habits-02' ).show();
				$( '#habits-03' ).hide();
			}
			else if( habit == 1 ) {
				$( '#habits-00' ).hide();
				$( '#habits-01' ).show();
				$( '#habits-02' ).hide();
				$( '#habits-03' ).hide();
			}
			else {
				$( '#habits-00' ).show();
				$( '#habits-01' ).hide();
				$( '#habits-02' ).hide();
				$( '#habits-03' ).hide();
			}
			skipLine( '12' );
		}
		else if( line == '12' && opt == '01' ) {
			hands = false;
			teeth = false;
			shower = false;
			habit = 0;

			skipLine( '03' );
		}
	} );
} );

function skipLine( number ) {
	var line = $( 'article#line-' + number );
	$( 'article.active' ).fadeOut( 500, function() {
		$( this ).removeClass( 'active' );
		line.fadeIn( 500 );
		line.addClass( 'active' );
	} );
}