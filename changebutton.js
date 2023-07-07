var change={ 
    nightday:function(self){
    var target=document.querySelector('body');
    var target2=document.querySelectorAll('a');
    var i = 0;
    if(self.value === 'night'){
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';
        while(i<target2.length){
            target2[i].style.color = 'pink';
            i= i+1 ;
        }
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
        while(i<target2.length){
            target2[i].style.color = 'blue';
            i= i+1 ;
        }
    }
        }
    }