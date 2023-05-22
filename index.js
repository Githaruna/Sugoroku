const characters = [
  { name: "tulip", image: "images/tulip.png", position: 1 },
  { name: "doll", image: "images/doll.png", position: 1 }
];

const events = [
  { name: "あまりの成績の良さに、神童ともてはやされる。１すすむ。", move: 1, cell: 3 },
  { name: "飛び級・首席で卒業する天才！帝大国文科へ進学。１すすむ。", move: 1, cell: 4 },
  { name: "同人誌『スバル』に参加、文壇での地位確立。学費未納で大学中退。２すすむ。", move: 2, cell: 6 },
  { name: "日本人初・ノーベル文学賞候補に。２すすむ。", move: 2, cell: 18 },
];

const komas = [
  { name: "女性に支配されるマゾヒズム小説『刺青』発表。恥エピソード披露。", cell: 5 },
  { name: "芸者・千代と結婚。右隣の人と見つめ合う。", cell: 7 },
  { name: "大人しい性格の千代が好みでなく、友人・佐藤春夫に譲ろうとした。佐藤と関係悪化。左隣の人に土下座。", cell: 8 },
  { name: "谷崎が養育する千代の妹・せい子に恋し、振られる。一周ハイハイする。", cell: 9 },
  { name: "千代と離婚、千代は佐藤春夫と再婚、佐藤と和解。１回休む。", cell: 11 },
  { name: "二十歳年下で、大阪出身の丁未子と結婚。名前の尻文字。", cell: 12 },
  { name: "理想の女性、松子と結婚。十回スクワット。", cell: 14 },
  { name: "松子の姉妹をモデルに上流社会を生きる姉妹を描く『細雪』の連載を始めるも、贅沢を悪とする戦時下では不適切とされ、発禁となる。右隣の人の命令に従う。", cell: 17 },
  { name: "松子の連れ子、千萬子を崇拝。左隣の人にお手してもらう。", cell: 19 },
];

const one = [
  {name: "スタート", cell: 1}
];

const two = [
  {name: "2", cell: 2}
];

const three = [
  {name: "3", cell: 3}
];

const four = [
  {name: "4", cell: 4}
];

const five = [
  {name: "5", cell: 5}
];

const six = [
  {name: "6", cell: 6}
];

const seven = [
  {name: "7", cell: 7}
];

const eight = [
  {name: "8", cell: 8}
];

const nine = [
  {name: "9", cell: 9}
];

const ten = [
  {name: "10", cell: 10}
];

const eleven = [
  {name: "11", cell: 11}
];

const twelve = [
  {name: "12", cell: 12}
];

const thirteen = [
  {name: "13", cell: 13}
];

const fourteen = [
  {name: "14", cell: 14}
];

const fifteen = [
  {name: "15", cell: 15}
];

const sixteen = [
  {name: "16", cell: 16}
];

const seventeen = [
  {name: "17", cell: 17}
];

const eighteen = [
  {name: "18", cell: 18}
];

const nineteen = [
  {name: "19", cell: 19}
];

const twenty = [
  {name: "20", cell: 20}
];

const twentyone = [
  {name: "21", cell: 21}
];

const saikoros = [
  { name: "s1", image: "images/1.png", position: 1},
  { name: "s2", image: "images/2.png", position: 2},
  { name: "s3", image: "images/3.png", position: 3},
  { name: "s4", image: "images/4.png", position: 4},
  { name: "s5", image: "images/5.png", position: 5},
  { name: "s6", image: "images/6.png", position: 6} ,
];

new Vue({
  el: "#app",
  data: {
    playerPosition: 1,
    cpuPosition: 1,
    isPlayerTurn: true,
    isGameOver: false,
    characters: characters,
    cells: Array(21).fill().map((_, index) => index + 1),
    dice: "",
    saikoros: saikoros,
    events: events.map(event => event.cell),
    komas: komas.map(koma => koma.cell),
    one: one.map(one => one.cell),
    two: two.map(two => two.cell),
    three: three.map(three => three.cell),
    four: four.map(four => four.cell),
    five: five.map(five => five.cell),
    six: six.map(six => six.cell),
    seven: seven.map(seven => seven.cell),
    eight: eight.map(eight => eight.cell),
    nine: nine.map(nine => nine.cell),
    ten: ten.map(ten => ten.cell),
    eleven: eleven.map(eleven => eleven.cell),
    twelve: twelve.map(twelve => twelve.cell),
    thirteen: thirteen.map(thirteen => thirteen.cell),
    fourteen: fourteen.map(fourteen => fourteen.cell),
    fifteen: fifteen.map(fifteen => fifteen.cell),
    sixteen: sixteen.map(sixteen => sixteen.cell),
    seventeen: seventeen.map(seventeen => seventeen.cell),
    eighteen: eighteen.map(eighteen => eighteen.cell),
    nineteen: nineteen.map(nineteen => nineteen.cell),
    twenty: twenty.map(twenty => twenty.cell),
    twentyone: twentyone.map(twentyone => twentyone.cell),
    size: 'character',
    saikoro_size: 'saikoro'
  },

  methods: {

    rollDice() {
      const dice = Math.floor(Math.random() * 6) + 1; //ランダムで１～６の数字を作る
      this.dice = dice;
      this.movePlayer(dice);
      this.isPlayerTurn = !this.isPlayerTurn;
    },

    cpuRollDice() {
      const dice = Math.floor(Math.random() * 6) + 1; //ランダムで１～６の数字を作る
      this.dice = dice;
      this.moveCPU(dice);
      this.isPlayerTurn = !this.isPlayerTurn;
    },

    movePlayer(dice) {
      const newPosition = Math.min(this.playerPosition + dice, 21);
      const move = setInterval(() => {
        dice > 0 ? this.playerPosition += 1 : this.playerPosition -= 1;
        this.characters[0].position = this.playerPosition;
        if (this.playerPosition == newPosition) {
          setTimeout(() => {
            this.event(this.playerPosition);
            this.koma(this.playerPosition);
          }, 500);
          clearInterval(move); // 動きを止める
        }
        if (this.characters[0].position === 21) {
          this.isGameOver = true;
          setTimeout(() => {
            alert("プレイヤーの勝ち！アメリカ芸術文学アカデミー名誉会員に。");
          }, 500);
        }
      }, 500);
    },

    moveCPU(dice) {
      const newPosition = Math.min(this.cpuPosition + dice, 21);
      const move = setInterval(() => {
        dice > 0 ? this.cpuPosition += 1 : this.cpuPosition -= 1;
        this.characters[1].position = this.cpuPosition;
        if (this.cpuPosition == newPosition) {
          setTimeout(() => {
            this.event(this.cpuPosition);
            this.koma(this.cpuPosition);
          }, 500);
          clearInterval(move); // 動きを止める
        }

        if (this.characters[1].position === 21) {
          this.isGameOver = true;
          setTimeout(() => {
            alert("プレイヤーの負け！アメリカ芸術文学アカデミー名誉会員に。");
          }, 500);
        }
      }, 500);
    },

    event(position) {
      for (const event of events) {
        if (position == event.cell) {
          alert(event.name);
          this.isPlayerTurn ? this.moveCPU(event.move) : this.movePlayer(event.move);
        }
      }
    },

    koma(position) {
      for (const koma of komas) {
        if (position == koma.cell) {
          alert(koma.name);
        }
      }
    }

  }
});
