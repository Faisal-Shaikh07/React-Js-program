class Team{
    constructor(Batsmen, All_rounder, Bowler){
        this.Batsmen = Batsmen;
        this.All_rounder = All_rounder;
        this.Bowler = Bowler;
    }
    
getAll_rounder(){
    return(`${this.All_rounder} is my team's best All_round player. `);
}
getBatsmen(){
    return(`${this.Batsmen} is my team's best Batsmen. `);
}
getBowler(){
    return(`${this.Bowler} is my team's best Bowler. `);
}

}

let players1 = new Team('Virat','Jadeja','Bumrah');
let players2 = new Team('Rohit','Axar','Siraj');

console.log(players1.getBatsmen());
console.log(players2.getAll_rounder());
console.log(players1.getBowler());



