class StarRating{
    constructor(containerId){
        this.container = document.querySelector(containerId);
        console.log(this.container);

        this.stars=this.container.querySelectorAll('.star');

        this.filled=0;

        this.bindEvents();       
    }

     //binding all the events
    bindEvents(){
        this.container.addEventListener('click', (event)=>{this.onStarClick(event)});
        this.container.addEventListener('mouseover', (event)=>{this.onStarMouseOver(event)})
        this.container.addEventListener('mouseover', ()=>{this.restoringRating()})
    }


    onStarClick(event){
        const starElem = event.target.classList[0];

        if(starElem!== 'star')
        return;

        // const currentClicked = event.target.dataset.index;
        const currentClicked= parseInt(event.target.getAttribute("data-index"));
        // console.log(typeof currentClicked);

        this.fillColors(currentClicked);
        this.filled=currentClicked;

        this.updateRatingCounting(currentClicked);

    }

    fillColors(count){
        for(let i=0; i<5; i++){
            this.stars[i].classList.remove("star-filled");
        }

        for(let i=0; i<count; i++){
            this.stars[i].classList.add("star-filled");
        }
    }

    updateRatingCounting(count){
        document.getElementById("count").textContent = `Rating Count: ${count}`;
        
    }

    onStarMouseOver(event){
       
        const currentMouseHoverIndex = parseInt(event.target.getAttribute("data-index"));

        this.fillColors(currentMouseHoverIndex);
    }

    restoringRating(){
        this.fillColors(this.filled);
    }
}

new StarRating("#star-container");
