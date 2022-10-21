import React,{useEffect} from 'react'



function Slider() {
useEffect(() => {
	const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
 
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";

  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}
function Prev(){
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);

}
btnRight.addEventListener('click', function(){
  Next();
});
btnLeft.addEventListener('click', function(){
  Prev();
});   


}, [])


	return(<>
		


         <div className="container-slider">
          <div className="slider" id="slider">
               <div className="slider__section">
                  <img className="slider__img" layout="fill" src={"/img/almendra.jpg"}/>
                   <div>
                    <h5>Almendra</h5>
                    <p>$399 x 100g</p>
                 </div>
               </div>
               <div className="slider__section">
                 <img className="slider__img" layout="fill" src={"/img/frutilla.webp"}/>
                  <div>
                    <h5>Frutilla mendocina</h5>
                    <p>$599 x kilo</p>
                 </div>
               </div>
               <div className="slider__section">
                  <img className="slider__img" layout="fill" src={"/img/banana.webp"}/>
                 <div>
                    <h5>Banana</h5>
                    <p>$370 x kilo</p>
                 </div>
               </div>
               <div className="slider__section">
                  <img className="slider__img" layout="fill" src={"/img/naranja.jpg"}/>
                 <div>
                    <h5>Naranja</h5>
                    <p>$399 x 100g</p>
                 </div>
               </div>
          </div>
          <div className="slider__btn slider__btn--right" id="btn-right">
              &#62;
          </div>
          <div className="slider__btn slider__btn--left" id="btn-left">
              &#60;
          </div>
        </div>
      
     
      <style jsx>{`

       

          .container-slider{
         
          position: relative; 
          overflow: hidden;

            height: 420px;
            padding:15px 0;
            border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;


          }

          .slider{

            display: flex;
            width: 400%;
            height: 350px;
            margin-left: -100%;
            position: relative;
           justify-content:center;

          }
          .slider__section{
            width: 70vw;
            height: 380px;
            position: relative;
            background:#fff;
            margin: auto;
              box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.5);
  -webkit-box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.5);

          }
          .slider__section h5{
                font-size: 17px;
                margin: 0 15px;
                color: #444;
          }
          .slider__section p{
               font-size: 18px;
                margin: 0 22px;
                font-weight: 333;
                color: #25CC0F;
          }
          img{
            display: block;
            width: 90%;
            height: 250px;
            object-fit: contain;
            margin: 20px auto; 
            border: 1px solid #ccc;
            
          }

       @media(min-width: 700px){


          .slider{

            display: flex;
            width: 200%;
            height: 350px;
            margin-left: -100%;
            position: relative;
           justify-content:center;

          }
          .slider__section{
            width: 35vw;
            height: 380px;
            position: relative;
            background:#fff;
            margin: auto;
              box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.5);
  -webkit-box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 3px 0px 10px 0px rgba(0,0,0,0.5);

          }
          .slider__section h5{
                font-size: 17px;
                margin: 0 15px;
                color: #444;
          }
          .slider__section p{
               font-size: 18px;
                margin: 0 22px;
                font-weight: 333;
                color: #25CC0F;
          }
          img{
            display: block;
            width: 90%;
            height: 250px;
            object-fit: contain;
            margin: 20px auto; 
            border: 1px solid #ccc;
            
          }

 
        }


          .slider__btn{
            position: absolute;
            width: 40px;
            height: 40px;
            background: rgb(1,1,1,0.3);
            top: 50%; 
            transform: translateY(-50%);
            font-size: 30px;
            font-weight: bold;
            font-family: monospace;
            text-align: center;
            border-radius: 50%;/*para q ae ve como un circulo*/
            cursor: pointer;
            z-index: 9999;
            color: rgba(275,275,275,.7);
          }

          .slider__btn:hover{
           background: rgba(0,0,0,0.1);
          }

          .slider__btn--left{
            left: 10px;
          }

          .slider__btn--right{
            right: 10px;
          }

          .slider__content{
              position: absolute;
              top: 50%;
              left: 50%;
              color: #fff;
              transform: translate(-50%, -50%); 
              width: 60%;
              text-align: center;
              z-index: 999;
          }

          .slider__title{
            font-size: 2.2em;
            margin: 0;
          }

          .slider__txt{
              margin: 5px 0;
          }
      `}</style>
	</>	)
}

export default Slider