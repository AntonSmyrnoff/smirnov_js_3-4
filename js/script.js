var test = {
  testHeader: 'Тест по программированию',

  questionList: [
    {
      question: 'Вопрос №1',

      answerVariants: [
        'Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3'  
      ]
    },
        {
      question: 'Вопрос №2',

      answerVariants: [
        'Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3'  
      ]
    },
        {
      question: 'Вопрос №3',

      answerVariants: [
        'Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3'  
      ]
    }
  ],

  submit: 'Проверить мои результаты'
}

var h3 = document.createElement( 'h3' ); // create Test-header
h3.classList.add( 'test__header' );
h3.innerHTML = test.testHeader;
document.body.appendChild( h3 );

var ol = document.createElement( 'ol' ); // create List of questions
ol.classList.add( 'question-list' )
document.body.appendChild( ol );

for (var i = 0; i < test.questionList.length; i++) { // add questions to the List of questions
  li = document.createElement( 'li' );
  li.classList.add( 'question-list__item' );
  li.innerHTML = test.questionList[i].question;
  ol.appendChild( li );

  for (var j = 0; j < test.questionList[i].answerVariants.length; j++) { // add variants of answers
    var div = document.createElement( 'div' );
    div.classList.add( 'radio' );
    li.appendChild( div );

      var label = document.createElement( 'label' );
      div.appendChild( label );
      label.innerHTML = test.questionList[i].answerVariants[j];

      var input = document.createElement( 'input' );
      input.setAttribute( 'type', 'radio' );
      input.setAttribute( 'value', (i+1).toString()+(j+1).toString() );
      input.setAttribute( 'name', 'question_'+(i+1) );
      input.style.float = 'left'; 
      label.appendChild( input );
     }  
}

var submit = document.createElement( 'input' ); // create button
submit.classList.add( 'button' );
submit.setAttribute( 'type', 'submit' );
submit.setAttribute( 'value', test.submit ); 
document.body.appendChild( submit );