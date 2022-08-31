const studentList = 
["강예훈",
"김성현",
"류주완",
"마근원",
"박종인",
"박재형",
"송형주",
"양상희",
"원두진",
"유민호",
"이상호",
"이소영",
"이은수",
"정동욱",
"정윤환",
"정정원",
"지영빈",
"한용준",
"황초영",
"김근수",
"김승현",
"전형민",
"정연주",
"이아연",
"최화연"
];

const kdtlist = [];

function student (id,name){
  if(typeof (id) === "number"
  && typeof (name) === "string"
  )
    this.id = id;
    this.name = name;    
    
}

for(let i = 0; i < studentList.length; i++){
  kdtlist.push(new student(i+1, studentList[i]));
  if(studentList[i] === "원두진"){
    kdtlist[i].address = "중구";
}else {
  kdtlist[i].address = "어디사세요?";
}
}
console.log(kdtlist);