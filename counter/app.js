let count = 0;
const value = document.querySelector("#value");
const  btns = document.querySelectorAll(".btn");



btns.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        const styles = e.currentTarget.classList

        if (styles.contains('increase')){
            count++;
        } else if(styles.contains("decrease")){
            count--;
        } else{
            count =0;
        }

        if (count>0){
            value.style.color ='green';
            
        } else if(count<0){
            value.style.color ='red';
        } else{
            value.style.color ='black';
        }
    
        value.textContent = count;

    })

}
)