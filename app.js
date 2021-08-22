

/* function TopTwoButton(TopName){
    const memoryInner= document.getElementById('memory-inner');
    let memoryText = memoryInner.innerText;
    if(TopName == true){
        memoryText = parseInt(memoryText= 0) ;
    }
    else{
       return memoryText = parseInt(memoryText = 180);
    }
    memoryText.innerText = memoryText;
}


document.getElementById('first-button').addEventListener('click', function(){
    TopTwoButton(true)
})

document.getElementById('second-button').addEventListener('click', function(){
    TopTwoButton(false)
})
 */





// 1st and second button word part
const firstButton = document.getElementById('first-button');
const secondButton = document.getElementById('second-button');


const memoryInner = document.getElementById('memory-inner');

const totalInner = document.getElementById('total-inner');



firstButton.addEventListener('click', function(){
    const memoryInnerText = parseInt(memoryInner.innerText = 0);
    firstMemoryTotal = totalInner.innerText = memoryInnerText + 1299;
    
    
})

secondButton.addEventListener('click', function(){
    memoryInnerText2 = parseInt(memoryInner.innerText = 180) ; 
    secondMemoryTotal = totalInner.innerText = memoryInnerText2 + firstMemoryTotal;
})


// third , four  and five button work part
const thirdButton = document.getElementById('third-Button');
const storeInner = document.getElementById('storage-inner');

thirdButton.addEventListener('click', function(){
   const storeInnerOne = parseInt(storeInner.innerText = 0);
    firstStoreTotal = totalInner.innerText = storeInnerOne + secondMemoryTotal;

})
const fourButton = document.getElementById('four-button');

fourButton.addEventListener('click', function(){
    const storeInnerTwo = parseInt(storeInner.innerText = 100);
    secondStoreTotal = totalInner.innerText = storeInnerTwo + firstStoreTotal; 
})

const fiveButton = document.getElementById('five-button');

fiveButton.addEventListener('click', function(){
    const storeInnerThree = parseInt(storeInner.innerText = 180);
    thirdStoreTotal = totalInner.innerText = storeInnerThree +  secondStoreTotal;
})


// six and sever button clcik work

const sixButton = document.getElementById('six-button');
const deliveryInner = document.getElementById('delivery-inner');

sixButton.addEventListener('click', function(){
    const deliveryInnerOne = deliveryInner.innerText = 0 ;
    firstDeliveryTotal = totalInner.innerText = deliveryInnerOne + thirdStoreTotal;
})


const sevenButton =document.getElementById('seven-button');

sevenButton.addEventListener('click', function(){
    const deliveryInnerTwo = deliveryInner.innerText = 20 ;
    lastDeliveryTotal = totalInner.innerText = deliveryInnerTwo + firstDeliveryTotal;
    return lastDeliveryTotal;
})

    document.getElementById('quiz-button').addEventListener('click', function(){
        const finalTotal =document.getElementById('final-price');
        const finalTotalText =parseInt(finalTotal.innerText);
        amar = finalTotalText / 20;
        let quizInner = document.getElementById('quiz-inner');
            const quizInnerText = parseInt(quizInner.value) ;
            if(quizInnerText == 'stevekaku'){
                amar.innerText - lastDeliveryTotal;
            }
            else{

                return alert="invalid your quiz"
            }
            
    })


