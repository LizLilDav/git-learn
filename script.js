function test() {
var a = [ ];
for( var i = 0; i < 2; i++ ){
a.push( function(){ console.log( i ); } );
}
return a;
}
var x = test();

function test() {
var a = [ ];
for( var i = 0; i < 2; i++ )
( function( b ) {
a.push( function(){ console.log( b ); } );
})( i );
return a;
}
var x = test();
console.