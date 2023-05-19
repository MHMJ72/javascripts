


function expression (gradScore,hscScore,sscScore,candidateName) {

    if (gradScore >= 70 || hscScore >= 80 || sscScore > 90 ) {
        console.log(`Congrates ${candidateName}, you are eligible for TCS interview.`);
        
    } else {
        console.log(`Unfortunately you are not eligible for interview.`);
    }

}

expression(80,86,90,"Manoj" );
expression(70,65,55,"Savan" );
expression(60,79,88,"Aniket" );