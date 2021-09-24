var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
                q:'1. The events that are not triggered directly by user activity are called',
                options: [' State change events', 'Device-dependent input events', 'User interface events','Device-independent input events'],
                answer:1
            },
            {
                q:'2. The video and the audio belong to the',
                options: ['a) Timers and error handlers', 'b) API-Specific events', 'c) State change events', 'd) User interface events'],
                answer:2
            },        
            {
                q:'3. The client-side JavaScript asynchronous programming model contains',
                options: ['a) Timers and error handlers','b) API-specific events','c) State change events','d) User interface events'],
                answer:1
            },
            {
                q:'4. Which are the events that have default actions that can be canceled by event handlers?',
                options: ['a) Submit and form-related events','b) Reset and form-related events','c) Submit and reset events','d) form-related events'],
                answer:3
            },
            {
                q:'5. The events that represent occurrences related to the browser window are',
                options: ['a) Window','b) Element','c) Display','d) Handlers'],
                answer:1
            }        
            

        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}