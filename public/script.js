
let checkBox =document.getElementById("checkbox");
        function toggle(){
            if(checkBox){
                document.body.classList.add('dark');
                checkBox = false;
            }
            else{
                document.body.classList.remove('dark');
                checkBox = true;
            }
        }

