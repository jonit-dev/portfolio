function detectmob() {
    return !!(navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i));
}


$(function() {

    /* INIT SCROLLIFY CONFIG =========================================== */
    let triggerPosition;
    let marginValue = -11;
    let marginValue2 = 24;
    let lastHeight, height;

    $(window).scroll(function() {

        lastHeight = height;
        //update height value
        height = $(window).scrollTop();
        console.log(height);

        if(lastHeight < height) {
            // console.log("moving scroll down");

/* EXECUTE ONLY ON SCROLL DOWN =========================================== */
            switch(detectmob()) {
                case false:
                    triggerPosition = 2000;
                    break;
                case true:
                    triggerPosition = 0;
                    break;
            }

            if((height  > triggerPosition) && triggerPosition > 0) {

                if(marginValue <= 11){

                    // do something
                    $('.education-box-wrapper').css('margin-left', `${marginValue}rem`);
                    marginValue += 0.2;

                }

                if(marginValue2 >= 0){

                    // do something
                    $('.interests-box-wrapper').css('margin-left', `${marginValue2}rem`);
                    marginValue2 -= 0.2;

                }


            }



        } else {
            // console.log("moving scroll up");
        }


    });

});