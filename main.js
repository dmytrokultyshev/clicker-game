const scoreTitle = document.getElementById('score');
const healthTitle = document.getElementById('health');
const evilName = document.getElementById('evilName');
const gameBlock = document.getElementById('game');
let health = 5;
let score = 5;
const userPlayer = document.getElementById('userName');
const userObj =[];

const form = document.getElementById('form');
function retrieveForm(event){
    event.preventDefault();
    const name     = form.querySelector('[name="name"]');
    const lastName = form.querySelector('[name="last"]');
    const userName = form.querySelector('[name="user"]');
    const email    = form.querySelector('[name="email"]');
    const birthday = form.querySelector('[name="birthday"]');
    const password = form.querySelector('[name="password"]');
    const iAgree   = form.querySelector('[name="terms"]');

    const values = {
        name      : name.value,
        lastName  : last.value,
        userName  : user.value,
        email     : email.value,
        birthday  : birthday.value,
        password  : iAgree.value,
    };
 form.classList.toggle('formDisable');
game.classList.toggle('gameActive');
userObj.push(values);

}

 form.addEventListener('submit',retrieveForm);
const soul = {
  name: 'soul',
  health: 5,
  score: 5,
  image: "https://78.media.tumblr.com/b2648a7b84698dd938da0cb69c70a314/tumblr_pb9dq92MzR1uqyagpo4_1280.gif",  
  };
const blue = {
  name: 'blue',
  health: 10,
  score: 10,
  image: "https://i.pinimg.com/originals/81/00/ef/8100eff98911deb1ae54db9e9a7a738d.gif", 
   };
   const blue2 = {
    name: 'blue2',
    health: 12,
    score: 12,
    image: "https://i.gifer.com/origin/1b/1b827749857ae9741e5e4a6906abc512.gif",
   };
const boss = {
   name: 'boss',
   health: 20,
   score: 20,
   image: "https://cdna.artstation.com/p/assets/images/images/005/518/386/original/craig-mullins-zombie-boss-03-idle.gif?1491619273",
    };

let currentEnemy = soul;

function onClick() {
  if (health === 1) {
    score = score + currentEnemy.score;   
    scoreTitle.textContent = `Score: ${score}`; 
    evilName.textContent = `${soul}`;
    if (currentEnemy.name === 'soul') {
      currentEnemy = blue;
    } else if (currentEnemy.name === 'blue'){
      currentEnemy = blue2;
    } else if (currentEnemy.name === 'blue2'){
      currentEnemy = boss;
    } 
    else {
       scoreTitle.style.display = 'none'; 
       enemy.style.display = 'none';
       userPlayer.style.display = 'none';     
       healthTitle.textContent = "You won!" 
       return 
    }
    health =  currentEnemy.health;  
    enemy.setAttribute("src", currentEnemy.image)
  } else {
    health = health - 1;
  }
  healthTitle.textContent = `Health: ${health}`;
  scoreTitle.textContent = `Score: ${score}`;
  evilName.textContent = `Enemy: ${currentEnemy.name}`;
  userPlayer.textContent = `Player : ${userObj[0].userName}`
};
healthTitle.textContent = `Health: ${health}`;
scoreTitle.textContent = `Score: ${score}`;
const enemy = document.getElementById('enemy');
enemy.onclick = onClick;
