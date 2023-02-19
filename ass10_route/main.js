/*

(SIGN UP PAGE)
=> awl ma yclick 3la signup button           done
=> b yt check 3la el inputs lw fe wa7d fady yzhr message      done
=> 3ayza a5od el data mn el inputs             done
=> check if email already exist                done
=> lw mwgod y o2al email already exist         done
=> yzhr Success lw el donia tmam               done
=> 3ayza a5zn el data fe localstorage          done

-------------------------------------------------------------------

(LOG IN PAGE)
=> awl ma y click 3la login button              done
=> atakd en mfe4 input fady                     done
=> lw 7ga fdya yzhr message                     done
=> a4of el data de mwgoda fe el localstorage wla la
=> ahh yd5l (WELCOME PAGE)
=> laa yzhr Error in alert w ao2l fe eh blzbt emailerror OR passerror

*/








var userName= document.getElementById('userName');
var userEmail= document.getElementById('userEmail');
var userPass= document.getElementById('userPass');
var errorMess=document.getElementById('errorMess');
var welcomeMess=document.getElementById("welcomeMess");

var users=[];
if(localStorage.getItem("users")!= null){
    users=JSON.parse(localStorage.getItem("users"));
}

function signUpBtn(){
    test=0;
    if(!userName.value=="" && !userEmail.value=="" && !userPass.value==""){
        errorMess.innerHTML="";
        for(var i=0;i<users.length;i++)
        {
            if(userEmail.value==users[i].email)
            {
                test++;
            }
            else
            {
                continue;
            }
        }
        if(test==1){
            errorMess.innerHTML=`
            <p class="text-danger w-100">email already exist</p>
            `;
        }
        else{
            objUser={
                name:userName.value,
                email:userEmail.value,
                password:userPass.value
            }
            users.push(objUser);
            localStorage.setItem("users",JSON.stringify(users));
            errorMess.innerHTML=`
            <p class="text-success w-100">Success</p>
            `;
        }
    }
    else{
        errorMess.innerHTML=`
        <p class="text-danger w-100">All inputs is required</p>
        `;
    }
}
function logInBtn(){

    if(!userEmail.value=="" && !userPass.value==""){
        errorMess.innerHTML="";
        for(var i=0;i<users.length;i++){
            if(userEmail.value==users[i].email && userPass.value==users[i].password){
                errorMess.innerHTML="";
                location.assign("./welcome.html");
                welcomeMess.innerHTML=`welcome ${users[i].name}`;
                break;
            }
            else {
                errorMess.innerHTML=`
                <p class="text-danger w-100">password and email are incorrect</p>
                `;
            }
        }
    }
    else{
        errorMess.innerHTML=`
        <p class="text-danger w-100">All inputs is required</p>
        `;
    }
}












