var student_scores=[
    {"id":1, "score":17},
    {"id":2, "score": 15},
    {"id":3, "score":30},
    {"id":4, "score":12},      
]

var total_score=30;
var pass_score=15;

for (var i=1; i<= student_scores.length-1; i++){
    var currentscore=student_scores[i].score;
    var currentstudentID= student_scores[i].id;
    if(currentscore < pass_score){
        console.log(currentstudentID);
    }
}
