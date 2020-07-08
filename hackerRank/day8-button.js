window.onload = () => {

    const button = document.createElement("button");
        button.onclick = Button
        button.innerHTML = 0
        
    document.body.appendChild(button)

}

function Button() {
   console.log(typeof this.innerHTML);
   parseInt(this.innerHTML)
   console.log(typeof this.innerHTML);

   
    
}