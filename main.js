const grab = document.querySelector("#button");
grab.addEventListener("click", post)

const excuseGenerator = document.querySelector("#randomExcuse")

function post(e){
      // e.preventDefault();
      excuseGenerator.innerHTML = " ";

      fetch("http://localhost:3000/excuse/random")
      .then(response => response.json())
      .then(info)
      .catch((e) => (console.log(e)))

      function info(data){
            let i=0;
            let txt;

            function typying(){
                  txt = data;

                  if(i<txt.length){
                        excuseGenerator.innerHTML += txt.charAt(i);
                        i++;
                        setTimeout(typying, 100);
                  }  
            }
            typying();
      }
}