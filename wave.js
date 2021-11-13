let wave_container = document.querySelector(".wave_container");
let handleWave = (event)=> {
    let waves = document.querySelectorAll(".wavywave");
    if(waves.length < 6){
        let waveid = "wave" + (waves.length).toString();
        let death_wave = document.createElement("div");
        death_wave.id = waveid;
        death_wave.classList.add("wavywave");
        death_wave.classList.add("main");
        death_wave.innerHTML = `
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
            <div class="wave wave3"></div>`;
        wave_container.appendChild(death_wave);
        let half = 205;
        death_wave.style.display = "absolute";
        death_wave.style.top = (event.clientY - half).toString() + "px";
        death_wave.style.left = (event.clientX - half).toString() + "px";
        setTimeout(()=>{ 
            let death_wave = document.getElementById(waveid);
            death_wave.parentNode. removeChild(death_wave);
        }, 4000);
    } else {
        console.log("No more");
    }
  }
  wave_container.addEventListener("click", handleWave);