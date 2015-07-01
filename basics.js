// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );

/* The result is a number. This is a basic integer without any qualifications. */

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );

/* This is a string. Non-integer basic characters inside quotations. */

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );

/* The result is an object. Arrays are composite data types, so typeof will summarize this as an object.  */

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );

/* The result is a number. NaN offers a definition relative to numerical values, and it is one itself.  */

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";

/* The result is "Hamburgers" -- addition operations concatenate string inputs. */

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";

/* The result is NaN. The subtraction operator doesn't evaluate strings. */

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;

/* The result is NaN. The subtraction operator doesn't evaluate strings. */

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";

/* The result is NaN. The multiplication operator doesn't evaluate strings. */

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );

/* 3, 2, 4, 6, 10 */

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );

/* [dot, dash, pause, dash, dot] */

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles ); // adds beatles to the end of the empty array and returns the length (1 array, or 1)
bands.unshift( stones ); // adds stones to the front of the array and returns the length (2 array, or 2)
bands[ bands.length - 1 ].pop(); // targets the bands variable. length -1 will target the final object in the array, beatles. Pop will remove the final object in beatles, Pete.
bands[0].shift(); // now, within bands, targeting index 0, or stones. Then conducts a shift, removing the the first item, Brian.
bands[1][3] = "Ringo"; // within bands, targets array 1 (beatles) object 3 (Empty after George) and turns it into Ringo. 

Result: [Mick, Keith, Ronnie, Charlie] [Paul, John, George, Ringo]




