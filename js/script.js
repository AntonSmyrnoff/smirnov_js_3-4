var test = {
	header : function() {
	  var head = document.createElement('h3');
	  head.classList.add('test__header');
	  head.innerHTML = 'Тест по программированию';
	  document.body.appendChild(head);	
	},

	list : function() {
	  var list = document.createElement('ol');
	  document.body.appendChild(list);	
	  
	  var i = 0;
      while (i < 3) {
        var list_item = document.createElement('li');
        list_item.classList.add('list_item');
        list_item.innerHTML = 'Вопрос №'+(i+1);
        list.appendChild(list_item);

        var j = 0;
        while (j < 3) {
          var answer = document.createElement('div');
          answer.classList.add('radio');
          list_item.appendChild(answer); 

            var label = document.createElement('label');
            label.innerHTML = '<input type="radio" name="optionsRadios'+(i+1)+'" id="optionsRadios'+(i+1)+'_'+(j+1)+'" value="option'+(j+1)+'"> Вариант ответа №'+(j+1);
            answer.appendChild(label); 
        j++;   
        }
      i++;
      }	
    },

    submit : function() {
      var submit = document.createElement('button');
	  submit.classList.add('button');
	  submit.setAttribute('type', 'submit');
	  submit.innerHTML = 'Проверить мои результаты';
	  document.body.appendChild(submit);	
    },

};

test.header();
test.list();
test.submit();

