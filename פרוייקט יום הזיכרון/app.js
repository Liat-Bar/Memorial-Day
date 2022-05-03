//One Candle Button
const oneCandleGarbber = document.getElementById("oneCandle");
const oneGifGrabber = document.getElementById("oneGif");
const xBtnGrabber = document.getElementById("xBtn");

oneCandleGarbber.addEventListener('click',() =>{
    oneGifGrabber.style.display = 'block';
})

xBtnGrabber.addEventListener("click",()=>{
    oneGifGrabber.style.display = 'none';
})

//Two Candle Button
const twoCandleGrabber = document.getElementById("twoCandle");
const twoGifGarbber = document.getElementById("twoGif");
const xTwoBtnGrabber = document.getElementById("xTwoBtn");

twoCandleGrabber.addEventListener('click',() =>{
    twoGifGarbber.style.display = 'block';
    const textInputGrabber = document.getElementById("textInput").value;
   document.getElementById("userText").innerHTML = "הקדשה:"+ textInputGrabber;
})

xTwoBtnGrabber.addEventListener("click",()=>{
    twoGifGarbber.style.display = 'none';
})


//Ten Candle Button
const tenCandlesGrabber = document.getElementById("tenCandles");
const threeGifGarbber = document.getElementById("threeGif");
const xBtnThreeGrabber = document.getElementById("xBtnThree");

tenCandlesGrabber.addEventListener('click',() =>{
    threeGifGarbber.style.display = 'block';
})

xBtnThreeGrabber.addEventListener("click",()=>{
    threeGifGarbber.style.display = 'none';
})



