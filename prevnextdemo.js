
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://glitch.com/favicon.ico" />
    <title>Hello World!</title>
    <link rel="canonical" href="https://glitch-hello-website.glitch.me/" />
    <meta
      name="description"
      content="A simple website, built with Glitch. Remix it to get your own."
    />

    <!-- Import the webpage's stylesheet -->
    <link rel="stylesheet" href="/style.css" />
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  </head>
  <body>
    <div id="app">
      <div class="questions">
        <div
        class="questionbox"
        v-for="(q, index) in questions"
        v-on:click="selectQuestion(index)"
      >
        <span v-if="index == seekIndex">[🔥]</span>
        <span v-if="q.answered">[🟨]</span>
        <button v-if="!q.answered" v-on:click="answerQuestion(q)">
          Answer
        </button>
      </div>
      </div>
      
      <button v-on:click="getUnansweredQuestion(seekIndex)">Next</button>
      <button v-on:click="getUnansweredQuestion(seekIndex, 'prev')">
        Pref
      </button>
    </div>

    <script>
      var app = new Vue({
        el: "#app",
        data: {
          seekIndex: 0,
          questionSeekArray: [],
          questions: [
            {
              answered: false,
              question: "bla bla",
            },
            {
              answered: false,
              question: "bla bla",
            },
            {
              answered: true,
              question: "bla bla",
            },
            {
              answered: false,
              question: "bla bla",
            },
            {
              answered: false,
              question: "bla bla",
            },
            {
              answered: true,
              question: "bla bla",
            },
            {
              answered: false,
              question: "bla bla",
            },
            {
              answered: true,
              question: "bla bla",
            },
            {
              answered: true,
              question: "bla bla",
            },
          ],
        },
        methods: {
          selectQuestion(index) {
            this.seekIndex = index;
          },
          answerQuestion(question) {
            question.answered = true;
            this.setUnansweredQuestions();
          },
          getUnansweredQuestion(currentIndex, direction = "next") {
            let returnIndex = currentIndex;
            let returnIndexSet = false;
            if (direction === "next") {
              this.questionSeekArray.forEach((q) => {
                if (returnIndexSet) return;
                if (q > currentIndex) {
                  returnIndex = q;
                  returnIndexSet = true;
                }
              });
            }

            if (direction === "prev") {
              this.questionSeekArray.forEach((q) => {
                if (returnIndexSet) return;
                if (q < currentIndex) {
                  returnIndex = q;
                }
              });
            }

            this.seekIndex = returnIndex;
            return returnIndex;
          },
          setUnansweredQuestions() {
            this.questionSeekArray = [];
             this.questions
              .forEach((q, index) => {
               if(!q.answered) {
                 this.questionSeekArray.push(index);
               }
             });
            if(!this.questionSeekArray.length){
              this.questions
              .forEach((q, index) => {
                
                 this.questionSeekArray.push(index);
                
             });
            }
            console.log(this.questionSeekArray);
          },
        },
        mounted() {
          this.setUnansweredQuestions();
        }
      });
    </script>
  </body>
</html>
