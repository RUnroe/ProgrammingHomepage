



var class1, class6, class2, newDiv;
var students = [];
var studentsOne = [];
var studentsTwo = [];
var studentsSix = [];
var keepSorting = true;



window.onload = init;


function init(){
    class1 = document.getElementById("class1");
    class2 = document.getElementById("class2");
    class6 = document.getElementById("class6");
    importJSON();
}


function sortList(){
    
    while(keepSorting){
        keepSorting = false;
        for(var i = 0; i < students.length-1; i++){
            if(((students[i].nameLast.toLowerCase() === students[i+1].nameLast.toLowerCase()) && 
            (students[i].nameFirst.toLowerCase() > students[i+1].nameFirst.toLowerCase())) || 
            (students[i].nameLast.toLowerCase() > students[i+1].nameLast.toLowerCase())){
                
                students.move((i+1), 1, i);
                keepSorting = true;
            }
        }
        
    }
}



function sortHour(){
    for(var i=0; i < (students.length); i++){
        if(students[i].hour === "1"){
            studentsOne.push(students[i]);
        }
            
        else if(students[i].hour === "2"){
            studentsTwo.push(students[i]); 
        }
        else{
            studentsSix.push(students[i]);
        }
    }
}



function drawDiv(student, classHour){
    var link, firstNameLine, lastNameLine;
    
    
    for(var i=0; i < (student.length); i++){
        link = document.createElement("a");
        link.setAttribute("id", i);
        link.setAttribute("href", student[i].link);
        newDiv = document.createElement("div");
        firstNameLine = document.createElement("h3");
        firstNameLine.innerHTML = student[i].nameFirst;
        lastNameLine = document.createElement("h4");
        lastNameLine.innerHTML = student[i].nameLast;
        
        if(student[i].nameLast.includes(" ") || student[i].nameLast.includes("-")|| student[i].nameLast.length >9){
            lastNameLine.setAttribute("class", "longLastName");
        }
        newDiv.appendChild(firstNameLine);
        newDiv.appendChild(lastNameLine);
        link.appendChild(newDiv);
        classHour.appendChild(link);
    }
    
    
}






function importJSON(){
var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            students = JSON.parse(this.responseText);
            sortList();
            sortHour();
            drawDiv(studentsOne, class1);
            drawDiv(studentsTwo, class2);
            drawDiv(studentsSix, class6);
            console.log(`${students.length} students found!`)

        }
    };
    xmlhttp.open("GET", "students.json", true);
    xmlhttp.send();
}



/*
==================================================================
                        JSON TEMPLATE
==================================================================

    {
       "nameFirst":"",
       "nameLast":"",
       "link":"",
       "hour":""
    },
    
*/


