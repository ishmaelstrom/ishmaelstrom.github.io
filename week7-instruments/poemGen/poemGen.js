// Common coding practice is to declare variables at the top. These two are for navigating the poem linearly with the space bar, with counter keeping track of the line of the poem and using it to get the right line from poemText below
var counter = 0;
var poemText = ["type a word, make a poem"]

//Hotkey bindings, Mousetrap is a small javascript library that makes it easy to make things happen when you press a certain key
Mousetrap.bind("q", function(){
    //showText is a function that shows the text inside the parentheses (see full function at the at the bottom)
    showText("Science is not a Science<br>");
    //playSound is a basic function I use in most pieces for playing sound files, in this case it plays a recording of me reading the line from showText
    playSound("1")
})
Mousetrap.bind("w", function(){
    //I wanted the exclamations like 'HAH' to show up bigger so I put them inside a span, with increased font size. Spans don't mean anything in and of themselves, but are just ways to style with css in a more specific way
    showText("in silver<br>")
    playSound("2")
})
Mousetrap.bind("e", function(){
    showText("submerged in midnight<br>")
    playSound("3")
})
Mousetrap.bind("r", function(){
    showText("saltwater taffy for dinner<br>")
    playSound("4")
})
Mousetrap.bind("t", function(){
    showText("Mama said 'there's no need to worry'<br>")
    playSound("5")
})
Mousetrap.bind("y", function(){
    showText("in the ICEBOX<br>")
    playSound("6")
})
Mousetrap.bind("u", function(){
    showText("ribs bent like hot wire<br>")
    playSound("7")
})
Mousetrap.bind("i", function(){
    showText("up on the cold, red mesa<br>")
    playSound("8")
})
Mousetrap.bind("o", function(){
    showText("close as siblings in a hotel bed<br>")
    playSound("9")
})
Mousetrap.bind("p", function(){
    showText("abundance is a fresh, cold canteloupe<br>")
    playSound("10")
})
Mousetrap.bind("[", function(){
    $('#writingDiv').append("<br>")
    showText(";")
    playSound("11")
})
Mousetrap.bind("]", function(){
    showText("//")
    playSound("12")
})
Mousetrap.bind("\\", function(){
    showText("...")
    playSound("13")
})
Mousetrap.bind("a", function(){
    showText("do-it-yourself<br>")
    playSound("14")
})
Mousetrap.bind("s", function(){
    //In this section I wanted all the 'And can I screams' to be on their own line to emphasize the repetition, so I put a line break (<br>) after each
    showText("in a pitch pine clearing<br>");
    playSound("15")
})
Mousetrap.bind("d", function(){
    showText("a thunderhead climbing in the distance<br>");
    playSound("16")
})
Mousetrap.bind("f", function(){
    //This is the longest line of the poem and often runs off-screen, so I added a little span to shrink the font size, this is not necessarily the best solution but it works and that's fine
    showText("that new car smell<br>");
    playSound("17")
})
Mousetrap.bind("g", function(){
    showText("you are the patron saint of double dares<br>");
    playSound("18")
})
Mousetrap.bind("h", function(){
    showText("do you know how to fold a fitted sheet?<br>");
    playSound("19")
})
Mousetrap.bind("j", function(){
    showText("love like ancient architecture<br>")
    playSound("20")
})
Mousetrap.bind("k", function(){
    showText("her neck<br>")
    playSound("21")
})
Mousetrap.bind("l", function(){
    showText("just in case<br>")
    playSound("22")
})
Mousetrap.bind(";", function(){
    showText("can i borrow your id?<br>")
    playSound("23")
})
Mousetrap.bind("\'", function(){
    showText("the end<br>")
    playSound("24")
})
Mousetrap.bind("z", function(){
    showText("i am the angel of indiscretion<br>")
    playSound("25")
})
Mousetrap.bind("x", function(){
    showText("gardening upside down<br>")
    playSound("26")
})
Mousetrap.bind("c", function(){
    showText("folded between two fingers<br>")
    playSound("27")
})
Mousetrap.bind("v", function(){
    showText("arranged from smallest to largest<br>")
    playSound("28")
})
Mousetrap.bind("b", function(){
    showText("his overwhelming geometry<br>")
    playSound("29")
})
Mousetrap.bind("n", function(){
    showText("can you imagine it sung?<br>")
    playSound("30")
})
Mousetrap.bind("m", function(){
    showText("only to slip<br>")
    playSound("31")
})
Mousetrap.bind(",", function(){
    showText("God is a ballplayer<br>")
    playSound("32")
})
Mousetrap.bind(".", function(){
    showText("<br><br>                  ")
    playSound("33")
})
Mousetrap.bind("/", function(){
    showText("think of this as sung<br>")
    playSound("34")
    //This monster line of code here waits 8 seconds then changes the background image back to James Brown and plays 'I Feel Good' to close out the piece
    setTimeout(function(){$('#jbfeelGood')[0].play(); $('html').css('background-image', "url(jamesbrownBG.jpg)"); $('h1').html("")},8000);
})

//Space bar, as in almost all the pieces, plays the piece linearly, see more below
Mousetrap.bind("space", playLinear);

//Now we enter the functions, these are what the hotkeys call to do various things in the piece

//The showText function uses the library jQuery (that's what that $ means) to change the text of an h1 tag (the largest basic text element) as well as its orientation. The '(string)' inside the parens refers to the line of the poem put inside the parens when the function is called above 
function showText(string) {
    //First we change the contents of the h1 to the line of our poem aka 'string'
    $('h1').append(string)
    //Then we do some specific styling things based on which line of the poem it is
    //So if it's the title of the poem, we change the bg image to James Brown and make sure the text is on the right
    if(string == "type a word, make a poem"){
        $('html').css('background-image','url(jamesbrownBG.jpg)')
        $('h1').addClass("text-right").removeClass("text-left")
    }
    //Here we check for spans to find the big exclamation texts so we can change the bg image to yelling face and move text to the left, but also we don't want to change effect the one where we made the text smaller so we make sure it doesn't contain the word 'corporate', this is objectively pretty sloppy code but that is ok! It is ok to write bad code!  
    else if(string.indexOf("span") != -1 && string.indexOf("corporate") == -1){
        $('html').css('background-image','url(toddCloseup.png)')
        $('h1').addClass("text-left").removeClass("text-right")
    } 
    //If the text isn't the title or big, this is what we do to it
    else {
        $('html').css('background-image','url(toddBG.png)')
        $('h1').addClass("text-left").removeClass("text-right")
    }
};
//Here's playSound, as mentioned above it's a function used in a lot of these pieces for playing sound files
function playSound(id) {
    //this first line isn't relevent to sound playing, but just sets the linear counter to whatever line was last played, so if you press one of the letter keys you can still go back to linear from that spot
    counter = parseInt("id");
    //here we check for any other sounds tha are playing and pause/reset them since we dont want two lines said on top of each other
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    });
    //Here we use jQuery do find the sound in the html file
    sound = $(id).addClass("played")[0]
    //Set the playhead to the beginning it its already been played
    if (sound.ended){sound.currentTime = 0};
    //If the sound is currently playing replay it from the beginning (this makes pressing the same button over and over really fun)
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } 
    //Play the sound
    else {
        sound.play()
    }
}

//The playLinear function exists in almost all pieces to let you go through the piece sequentially by pressing space bar, it uses a counter as an index to reference an array containing the poem, and gradually adds to the counter to show more lines of the poem as you press space
function playLinear(){
    $("h1").empty()
    $("h2").empty()
    // //here we find the line of the poem with the index 'counter' and showText it
    // showText(poemText[counter]);
    // //Then we add one to counter (++) to get to the next line for the next one
    // counter++;
    // //Then we play the sound associated with that line (the counters for the sounds are one more than the counters for the lines, this is sloppy and fine but probably dont do it like this yourself)
    // playSound((counter).toString());
    // //When we reach the end of the poem, reset the counter to 0 aka pressing space again will start over, and then play 'I Feel Good' after 8 seconds
    if (counter >= 34){
        setTimeout(function(){playSound("feelGood")},8000);
        counter = 0;
    }
}

