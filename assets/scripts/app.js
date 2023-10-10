const ATTACK_VALUE=10;

let chosenMaxLife =100;
let currentMonsterHealt = chosenMaxLife;
let currentPlayerHealt =chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler(){
    const damage =dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealt -= damage;
}
attackBtn.addEventListener('click', attackHandler);