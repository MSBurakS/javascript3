const ATTACK_VALUE=10;
const STRONG_ATTACK_VALUE=17;
const MONSTER_ATTACK_VALUE= 14;
const HEAL_VALUE =20;



let chosenMaxLife =100;
let currentMonsterHealt = chosenMaxLife;
let currentPlayerHealt =chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound(){
    const playerDamage =dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealt -= playerDamage;
    if(currentMonsterHealt<=0 && currentPlayerHealt>0){
        alert('You Won');
    }else if(currentPlayerHealt<=0 && currentMonsterHealt>0){
        alert('You lost');
    }else if(currentPlayerHealt<=0 && currentMonsterHealt<=0){
        alert('You have a draw!');
    }
}

function attackMonster(mode){
    let maxDamage;
    if(mode === 'ATTACK'){
        maxDamage=ATTACK_VALUE;
    }else if(mode ==='STRONG_ATTACK'){
        maxDamage= STRONG_ATTACK_VALUE;
    }
    const damage =dealMonsterDamage(maxDamage);
    currentMonsterHealt -= damage;
    const playerDamage =dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealt -= playerDamage;
    if(currentMonsterHealt<=0 && currentPlayerHealt>0){
        alert('You Won');
    }else if(currentPlayerHealt<=0 && currentMonsterHealt>0){
        alert('You lost');
    }else if(currentPlayerHealt<=0 && currentMonsterHealt<=0){
        alert('You have a draw!');
    }
}

function attackHandler(){
    attackMonster('ATTACK');
}
function strongAttackHandler(){
    attackMonster('STRONG_ATTACK');
}
function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealt >= chosenMaxLife - HEAL_VALUE){
        alert("You can't heal to more than your max initial healt");
        healValue=chosenMaxLife - currentMonsterHealt;
    }else {
        healValue=HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealt += HEAL_VALUE;
    endRound();
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);