const ATTACK_VALUE=10;
const STRONG_ATTACK_VALUE=17;
const MONSTER_ATTACK_VALUE= 14;



let chosenMaxLife =100;
let currentMonsterHealt = chosenMaxLife;
let currentPlayerHealt =chosenMaxLife;

adjustHealthBars(chosenMaxLife);

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
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);