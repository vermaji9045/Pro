var count = 0;

function throwMe(card){
    if(count%2==0){
        card.classList.add("throwL");
    }
    else{
        card.classList.add("throwR");
    }
    count ++ ;
}