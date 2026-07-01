let PlayerAttack = null
let EnemyAttack = null

let PlayerLives = 0
let EnemyLives = 0

let BattlesWins = 0
let BattlesPlayed = 0

let PlayerEvoBonus = 1
let LifeEvoBonus = 1
let EnemyEvoBonus = 0.9
let EnemyLifeEvoBonus = 1
let variableOn = 1

let vacuneBonus = 1
let dataBonus = 1
let virusBonus = 1

let ValueAttackPlayer = 0
let ValueAttackEnemy = 0

let EnemyVacuneBonus = 1
let EnemyDataBonus = 1
let EnemyVirusBonus = 1

let evolutionLevel = 1

let MyMon = 1
// Arranque
function startgame() {

    let select_select_attack = document.getElementById('select-attack')
    select_select_attack.style.display = 'none'

    let monsters_image_section = document.getElementById('monster-image')
    monsters_image_section.style.display = 'none'

    let mensajes_section = document.getElementById('mensajes')
    mensajes_section.style.display = 'none'

    let select_start = document.getElementById('button-select')

    select_start.addEventListener('click', select_starter)

    let button_attack_virus = document.getElementById('attack_virus')
    button_attack_virus.addEventListener('click', virus_attack)
    let button_attack_vacune = document.getElementById('attack_vacune')
    button_attack_vacune.addEventListener('click', vacune_attack)
    let button_attack_data = document.getElementById('attack_data')
    button_attack_data.addEventListener('click', data_attack)
    let button_attack_free = document.getElementById('attack_free')
    button_attack_free.addEventListener('click', free_attack)
    let button_attack_variable = document.getElementById('attack_variable')
    button_attack_variable.addEventListener('click', variable_attack)
    
}
// Selección de mascota
function select_starter() {

    let bota = document.getElementById('Botamon') 
    let puni = document.getElementById('Punimon') 
    let nyoki = document.getElementById('Nyokimon')
    let choro = document.getElementById('Choromon')
    let mymonster = document.getElementById('mymonster')

    let mymonsterimg = document.getElementById('mymonsterimg')

    if (bota.checked) {
        alert("Botamon selecionado")
        mymonster.innerHTML = 'Botamon'
        MyMon = 1
        select_enemy()

        mymonsterimg.setAttribute("src", "./assets/images/Botamon.webp")
    } else if (puni.checked) {
        alert("Punimon selecionado")
        mymonster.innerHTML = 'Punimon'
        MyMon = 2
        select_enemy()

        mymonsterimg.setAttribute("src", "./assets/images/Punimon.webp")
    } else if (nyoki.checked) {
        alert("Nyokimon selecionado")
        mymonster.innerHTML = 'Nyokimon'
        MyMon = 3
        select_enemy()

        mymonsterimg.setAttribute("src", "./assets/images/Nyokimon.webp")
    } else if (choro.checked) {
        alert("Choromon selecionado")
        mymonster.innerHTML = 'Choromon'
        MyMon = 4
        select_enemy()

        mymonsterimg.setAttribute("src", "./assets/images/Choromon.webp")
    } else {
        alert('Seleciona un Megamon')
    }
    
    
}
function select_enemy() {
    
    let EnemyMon = 0
    let enemymonster = document.getElementById('enemymonster')
    let enemymonsterimg = document.getElementById('enemymonsterimg')
    

    if (evolutionLevel == 1) {
        EnemyLifeEvoBonus = 1
        EnemyEvoBonus = 0.9
        EnemyMon = random(1,4)
    } else if (evolutionLevel == 2) {
        EnemyLifeEvoBonus = 1
        EnemyEvoBonus = 1
        EnemyMon = random(1,12)
    } else if (evolutionLevel == 3) {
        EnemyLifeEvoBonus = 1
        EnemyEvoBonus = 1
        EnemyMon = random(5,24)
    }
    // No seas no inteligente denuevo, fijate si pusiste == en vez de = en "if"
    if (EnemyMon == 1) {
        enemymonster.innerHTML = 'Botamon'
        enemymonsterimg.setAttribute("src", "./assets/images/Botamon.webp")
    } else if (EnemyMon == 2) {
        enemymonster.innerHTML = 'Punimon'
        enemymonsterimg.setAttribute("src", "./assets/images/Punimon.webp")
    } else if (EnemyMon == 3) {
        enemymonster.innerHTML = 'Nyokimon'
        enemymonsterimg.setAttribute("src", "./assets/images/Nyokimon.webp")
    } else if (EnemyMon == 4) {
        enemymonster.innerHTML = 'Choromon'
        enemymonsterimg.setAttribute("src", "./assets/images/Choromon.webp")
    } else if (EnemyMon == 5) {
        enemymonster.innerHTML = 'Koromon'
        enemymonsterimg.setAttribute("src", "./assets/images/Koromon.webp")
        EnemyLifeEvoBonus = 2
        EnemyEvoBonus = 1.5
    }  else if (EnemyMon == 6) {
        enemymonster.innerHTML = 'Pagumon'
        enemymonsterimg.setAttribute("src", "./assets/images/Pagumon.webp")
        EnemyLifeEvoBonus = 2
        EnemyEvoBonus = 1.5
    } else if (EnemyMon == 7) {
        enemymonster.innerHTML = 'Tunomon'
        enemymonsterimg.setAttribute("src", "./assets/images/Tunomon.webp")
        EnemyLifeEvoBonus = 2
        EnemyEvoBonus = 1.5
    } else if (EnemyMon == 8) {
        enemymonster.innerHTML = 'Pukamon'
        enemymonsterimg.setAttribute("src", "./assets/images/Pukamon.webp")
        EnemyLifeEvoBonus = 2
        EnemyEvoBonus = 1.5
    } else if (EnemyMon == 9) {
        enemymonster.innerHTML = 'Pyocomon'
        enemymonsterimg.setAttribute("src", "./assets/images/Pyocomon.webp")
        EnemyLifeEvoBonus = 2
        EnemyEvoBonus = 1.5
    } else if (EnemyMon == 10) {
        enemymonster.innerHTML = 'Tanemon'
        enemymonsterimg.setAttribute("src", "./assets/images/Tanemon.webp")
        EnemyLifeEvoBonus = 2
        EnemyEvoBonus = 1.5
    } else if (EnemyMon == 11) {
        enemymonster.innerHTML = 'Caprimon'
        enemymonsterimg.setAttribute("src", "./assets/images/Caprimon.webp")
        EnemyLifeEvoBonus = 2
        EnemyEvoBonus = 1.5
    } else if (EnemyMon == 12) {
        enemymonster.innerHTML = 'Mochimon'
        enemymonsterimg.setAttribute("src", "./assets/images/Mochimon.webp")
        EnemyLifeEvoBonus = 2
        EnemyEvoBonus = 1.5
    }
    pre_battle()
}
function pre_battle() {
    let select_select_attack = document.getElementById('select-attack')
    select_select_attack.style.display = 'block'

    let select_select_monster = document.getElementById('select-monster')
    select_select_monster.style.display = 'none'

     let monsters_image_section = document.getElementById('monster-image')
    monsters_image_section.style.display = 'block'

    let mensajes_section = document.getElementById('mensajes')
    mensajes_section.style.display = 'block'

    let win = document.getElementById("win")
    let played = document.getElementById("played")

    let myLife = document.getElementById("mylife")
    let enemyLife = document.getElementById("enemylife")

    PlayerLives = 100 * LifeEvoBonus
    myLife.innerHTML = PlayerLives 
    EnemyLives = 100 * EnemyLifeEvoBonus
    enemyLife.innerHTML = EnemyLives 

    win.innerHTML = BattlesWins
    played.innerHTML = BattlesPlayed
}
// Ataque
function data_attack() {
    PlayerAttack = 'data'
    alert(PlayerAttack)
    EnemyTypeAttack()
}
function vacune_attack() {
    PlayerAttack = 'vacune'
    alert(PlayerAttack)
    EnemyTypeAttack()
}
function virus_attack() {
    PlayerAttack = 'virus'
    alert(PlayerAttack)
    EnemyTypeAttack()
}
function variable_attack() {
    let PlayerRandomAttack = random(1,3)
    variableOn = 1.1
    if (PlayerRandomAttack == 1) {
        PlayerAttack = 'virus'
    } else if (PlayerRandomAttack == 2) {
        PlayerAttack = 'vacune'
    } else {
        PlayerAttack = 'data'
    }

    alert('Aleatoriamente salio: ' + PlayerAttack)
    EnemyTypeAttack()
}
function free_attack() {
    
    
    PlayerAttack = 'free'
    alert(PlayerAttack)
    EnemyTypeAttack()
}
function EnemyTypeAttack() {
    let RandomAttack = random(1,3)

    if (RandomAttack == 1) {
        EnemyAttack = 'virus'
    } else if (RandomAttack == 2) {
        EnemyAttack = 'vacune'
    } else if (RandomAttack == 3) {
        EnemyAttack = 'data'
    } else {
        EnemyAttack = 'free'
    }

    alert(EnemyAttack)
    battle_messages()
}
// Logica combate
function verifyDamage() { 

    let myLife = document.getElementById("mylife")
    let enemyLife = document.getElementById("enemylife")
    ValueAttackEnemy = 0
    ValueAttackPlayer = 0
    // Free attacks

    
    if (EnemyAttack == 'free') {
        ValueAttackEnemy = (20 * EnemyEvoBonus)
        PlayerLives = PlayerLives - ValueAttackEnemy
    }
    // Value and variable attacks
    if ((PlayerAttack == 'data') && (EnemyAttack == 'vacune')) {
        ValueAttackPlayer = (20 * PlayerEvoBonus * variableOn * dataBonus * 1.5)
        EnemyLives = EnemyLives - ValueAttackPlayer  // Player Data Type Win

        ValueAttackEnemy = (20 * EnemyEvoBonus * EnemyVacuneBonus * 0.5)
        PlayerLives = PlayerLives - ValueAttackEnemy

    } else if ((PlayerAttack == 'vacune')&&(EnemyAttack == 'virus')) {
        ValueAttackPlayer = (20 * PlayerEvoBonus * variableOn * vacuneBonus * 1.5)
        EnemyLives = EnemyLives - ValueAttackPlayer // Player Vacune Type Win

        ValueAttackEnemy = (20 * EnemyEvoBonus * EnemyVirusBonus * 0.5)
        PlayerLives = PlayerLives - ValueAttackEnemy

    } else if ((PlayerAttack == 'virus')&&(EnemyAttack == 'data')) {
        ValueAttackPlayer = (20 * PlayerEvoBonus * variableOn * virusBonus * 1.5)
        EnemyLives = EnemyLives - ValueAttackPlayer // Player Virus Type Win

        ValueAttackEnemy = (20 * EnemyEvoBonus * EnemyDataBonus * 0.5)
        PlayerLives = PlayerLives - ValueAttackEnemy

    } else if ((PlayerAttack == 'vacune') && (EnemyAttack == 'data')) {
        ValueAttackEnemy = (20 * EnemyEvoBonus * EnemyDataBonus * 1.5)
        PlayerLives = PlayerLives - ValueAttackEnemy // Enemy Data Type Win

        ValueAttackPlayer = (20 * PlayerEvoBonus * variableOn * vacuneBonus * 0.5)
        EnemyLives = EnemyLives - ValueAttackPlayer

    } else if ((PlayerAttack == 'virus')&&(EnemyAttack == 'vacune')) {
        ValueAttackEnemy = (20 * EnemyEvoBonus * EnemyVacuneBonus * 1.5)
        PlayerLives = PlayerLives - ValueAttackEnemy // Enemy Vacune Type Win

        ValueAttackPlayer = (20 * PlayerEvoBonus * variableOn * virusBonus * 0.5)
        EnemyLives = EnemyLives - ValueAttackPlayer

    } else if ((PlayerAttack == 'data')&&(EnemyAttack == 'virus')) {
        ValueAttackEnemy = (20 * EnemyEvoBonus * EnemyVirusBonus * 1.5)
        PlayerLives = PlayerLives - ValueAttackEnemy // Enemy Virus Type Win

        ValueAttackPlayer = (20 * PlayerEvoBonus * variableOn * dataBonus * 0.5)
        EnemyLives = EnemyLives - ValueAttackPlayer

    }  else if (PlayerAttack==EnemyAttack) {
        ValueAttackEnemy = 20 * EnemyEvoBonus * EnemyDataBonus * EnemyVacuneBonus * EnemyVirusBonus 
        PlayerLives = PlayerLives - ValueAttackEnemy // Draw (Player)

        ValueAttackPlayer = 20 * PlayerEvoBonus * variableOn * dataBonus * vacuneBonus * virusBonus
        EnemyLives = EnemyLives - ValueAttackPlayer // Draw (Enemy)
    } else if (PlayerAttack == 'free') {
        ValueAttackPlayer = (20 * PlayerEvoBonus)
        EnemyLives = EnemyLives - ValueAttackPlayer //Free

        ValueAttackEnemy = 20 * EnemyEvoBonus * EnemyDataBonus * EnemyVacuneBonus * EnemyVirusBonus 
        PlayerLives = PlayerLives - ValueAttackEnemy
    } else {
        alert('Mega, ocurrio un error, revisa el codigo si te falto algo')
    }

    variableOn = 1

    enemyLife.innerHTML = EnemyLives 
    myLife.innerHTML = PlayerLives

}
//Fundamentales
function random(min,max) {
    // si falla Math.trunc, usa Math.floor Mega
    return Math.floor(Math.random()*(max-min+1)+min)
}

function battle_messages() {
    let sectionCombat = document.getElementById('mensajes')
    let paragraph = document.createElement('p')
    verifyDamage()
    paragraph.innerHTML = 'Tu mascota ataco con ' + PlayerAttack + ' infringiendo ' + ValueAttackPlayer + ' de daño. La mascota del enemigo ataco con ' + EnemyAttack + ' infringiendo ' + ValueAttackEnemy+ '. Despues de ataque la vida de tu mascota es: ' + PlayerLives + ' y la vida de la mascota del enemigo es: ' + EnemyLives

    sectionCombat.appendChild(paragraph)

    if ((EnemyLives <= 0)&&(PlayerLives <= 0)) {
        paragraph.innerHTML = 'Ambas mascotas quedaron fuera de combate, ¡EMPATE!'
        post_match('draw')
    } else if (EnemyLives <= 0) {
        paragraph.innerHTML = 'La mascota del enemigo quedo fuera de combate, ¡GANASTE!'
        post_match('win')
    } else if (PlayerLives <= 0) {
        paragraph.innerHTML = 'Tu mascota ha quedado fuera de combate, ¡PERDISTE!'
        post_match('lose')
    } 
    sectionCombat.appendChild(paragraph)
}
function post_match(state) {
    let sectionCombat = document.getElementById('mensajes')
    let paragraph = document.createElement('p')
    BattlesPlayed = BattlesPlayed + 1

    if (state == 'win') {
        BattlesWins = BattlesWins + 1
    } else if (state == 'draw') {
        BattlesWins = BattlesWins + 0.5
    }

    paragraph.innerHTML = 'Llevas ' + BattlesPlayed + ' jugadas y llevas ' + BattlesWins + ' ganadas.'
    sectionCombat.appendChild(paragraph)
    evolution()

}
function evolution() {
    let sectionCombat = document.getElementById('mensajes')
    let paragraph = document.createElement('p')
    let mymonster = document.getElementById('mymonster')
    let mymonsterimg = document.getElementById('mymonsterimg')

    if (BattlesPlayed == 4) { //Baby I -> Baby II
        if (BattlesWins >= 3) {
            if (MyMon==1) {
                mymonster.innerHTML = 'Koromon'
                paragraph.innerHTML = 'Felicidades, tu Digimon ha evolucionado a "Koromon"'
                sectionCombat.appendChild(paragraph)
                mymonsterimg.setAttribute("src", "./assets/images/Koromon.webp")
            } else if (MyMon==2) {
                mymonster.innerHTML = 'Tunomon'
                paragraph.innerHTML = 'Felicidades, tu Digimon ha evolucionado a "Tunomon"'
                sectionCombat.appendChild(paragraph)
                mymonsterimg.setAttribute("src", "./assets/images/Tunomon.webp")
            } else if (MyMon==3) {
                mymonster.innerHTML = 'Pyocomon'
                paragraph.innerHTML = 'Felicidades, tu Digimon ha evolucionado a "Pyocomon"'
                sectionCombat.appendChild(paragraph)
                mymonsterimg.setAttribute("src", "./assets/images/Pyocomon.webp")
            } else if (MyMon==4) {
                mymonster.innerHTML = 'Caprimon'
                paragraph.innerHTML = 'Felicidades, tu Digimon ha evolucionado a "Caprimon"'
                sectionCombat.appendChild(paragraph)
                mymonsterimg.setAttribute("src", "./assets/images/Caprimon.webp")
            } else {
                alert('ERROR, AVISALE AL CREADOR')
            }
        }
        if (BattlesWins < 3) {
            if (MyMon==1) {
                mymonster.innerHTML = 'Pagumon'
                paragraph.innerHTML = 'Felicidades, tu Digimon ha evolucionado a "Pagumon"'
                sectionCombat.appendChild(paragraph)
                mymonsterimg.setAttribute("src", "./assets/images/Pagumon.webp")
            } else if (MyMon==2) {
                mymonster.innerHTML = 'Pukamon'
                paragraph.innerHTML = 'Felicidades, tu Digimon ha evolucionado a "Pukamon"'
                sectionCombat.appendChild(paragraph)
                mymonsterimg.setAttribute("src", "./assets/images/Pukamon.webp")
            } else if (MyMon==3) {
                mymonster.innerHTML = 'Tanemon'
                paragraph.innerHTML = 'Felicidades, tu Digimon ha evolucionado a "Tanemon"'
                sectionCombat.appendChild(paragraph)
                mymonsterimg.setAttribute("src", "./assets/images/Tanemon.webp")
            } else if (MyMon==4) {
                mymonster.innerHTML = 'Mochimon'
                paragraph.innerHTML = 'Felicidades, tu Digimon ha evolucionado a "Mochimon"'
                sectionCombat.appendChild(paragraph)
                mymonsterimg.setAttribute("src", "./assets/images/Mochimon.webp")
            } else {
                alert('ERROR, AVISALE AL CREADOR')
            } 
        } 
        evolutionLevel = 2
        PlayerEvoBonus = 1.5
        LifeEvoBonus = 2
    }
    select_enemy()
}
window.addEventListener('load', startgame)
