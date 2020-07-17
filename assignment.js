function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile;
}



function woodCalculator(chair, table, bed){
    var chairWoodLagbe = chair * 1;
    var tableWoodLagbe = table * 3;
    var bedWoodLagbe   = bed * 5;
    var totalWoodLagbe = chairWoodLagbe + tableWoodLagbe + bedWoodLagbe;
    return totalWoodLagbe;
}



function brickCalculator(jotoTola){
    if(jotoTola <= 20){
        if(jotoTola <= 10){
            var feet = jotoTola * 15;
        }
        else{
            feet = jotoTola *12;
        }
    }
    else{
        feet = jotoTola * 10;
    }
    return feet * 1000;
}



function tinyFriend(name){
    var tinnyWord = [];
    for(var i = 0; i < name.length; i++){
        var element = name[i];
        
        if(element > tinnyWord){
            tinnyWord = element;
        }
        
    }
    return tinnyWord;
}