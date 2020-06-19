let katasList = document.querySelector('.katas-list')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]

function createHTML(title, array){
    const kataHeading = document.createElement('h2')
    const kataBody = document.createElement('h3')
    
    katasList.append(kataHeading)
    kataHeading.append(title)
    katasList.append(kataBody)
    kataBody.append(array)
    
}


//Kata One

let kata1Array = []
let counter = 1
while (counter <= 20) {
    kata1Array.push(counter)
  counter += 1

}
createHTML('Kata One', kata1Array)


//Kata Two 
    
    let kata2Array = []
    counter = 1
    while (counter <= 20) {
        if (!(counter%2)) {
            kata2Array.push(counter)
        }
        counter +=1
      }
    createHTML("Kata Two", kata2Array)


    // Kata Three
    let kata3Array = []
    counter = 1
  while (counter <= 20) {
      if (counter%2) {
        kata3Array.push(counter)
      }
      counter +=1
    }
    createHTML('Kata Three', kata3Array)

    // Kata Four
    let kata4Array = []
    counter = 5
  while (counter <= 100) {
    kata4Array.push(counter)
    counter +=5
  }
createHTML('Kata Four', kata4Array)

// Kata Five
let kata5Array = []
counter = 1
counterX = 1
while (counterX < 100) {
counterX = counter * counter;
kata5Array.push(counterX)
counter += 1
}
createHTML('Kata Five', kata5Array)

//Kata Six
let kata6Array = []
counter = 20
while (counter >= 0) {
    kata6Array.push(counter)
  counter -= 1
}
createHTML('Kata Six', kata6Array)

//Kata Seven 
let kata7Array = []
counter = 20
while (counter >= 0) {
  if (!(counter % 2)) {
    kata7Array.push(counter)
  }
  counter -= 1
}
createHTML('Kata 7', kata7Array)

// Kata Eight
let kata8Array = []
counter = 20
while (counter >= 0) {
  if ((counter % 2)) {
    kata8Array.push(counter)
  }
  counter -= 1
}
createHTML('Kata Eight', kata8Array)

//Kata Nine 
let kata9Array = []
counter = 100
while (counter >= 0) {
    kata9Array.push(counter)
  counter -= 5
}
createHTML('Kata Nine', kata9Array)

// Kata Ten
let kata10Array = []
counter = 10
counterX = 1
while (counterX <= 100 && counter != 0) {
counterX = counter * counter;
kata10Array.push(counterX)
counter -= 1
}
createHTML('Kata Ten', kata10Array)


//Kata Eleven
let kata11Array = []
for(let index = 0; index < sampleArray.length; index += 1) {
        kata11Array.push(sampleArray[index])    
}
createHTML('Kata Eleven', kata11Array)


//Kata Twelve 
let kata12Array = []
for(let index = 0; index < sampleArray.length; index += 1) {

    if (!(sampleArray[index]%2)) {
        kata12Array.push(sampleArray[index])
    }
}
createHTML('Kata Twelve', kata12Array)

//Kata Thirteen
let kata13Array = []
for(let index = 0; index < sampleArray.length; index += 1) {

    if ((sampleArray[index]%2)) {
        kata13Array.push(sampleArray[index])
    }
}
createHTML('Kata Thirteen', kata13Array)

//Kata Fourteen 
let kata14Array = []
counter = 1
for(let index = 0; index < sampleArray.length; index += 1) {

    counterX = sampleArray[index] * sampleArray[index];
kata14Array.push(counterX)
}
createHTML('Kata Fourteen', kata14Array)

//Kata Fifteen
let kata15Sum = 0
for(let index = 0; index < 21; index += 1) {
  kata15Sum += index
}
createHTML('Kata Fifteen', kata15Sum)

//Kata Sixteen
let kata16Sum = 0
for(let index = 0; index < sampleArray.length; index += 1) {
  kata16Sum += sampleArray[index]
}
createHTML('Kata Sixteen', kata16Sum)

//Kata Seventeen 
let lowestNumber = 1000000
let kata17Array = []
for(let index = 0; index < sampleArray.length; index += 1){

    if ( sampleArray[index] < lowestNumber) { 
        lowestNumber = sampleArray[index]
    }
}
createHTML('Kata Seventeen', lowestNumber)

//Eighteen 
let heighestNumber = 0
for(let index = 0; index < sampleArray.length; index += 1){

    if (sampleArray[index] > heighestNumber) { 
        heighestNumber = sampleArray[index]
    }
}
createHTML('Kata Eighteen', heighestNumber)


let boxElement = document.querySelector('.boxes')

//Kata Nineteen
for (let counter = 0; counter < 21; counter += 1) {
    let boxes = document.createElement('div')
    boxes.className = 'boxes'
    boxElement.append(boxes)
}

//Kata twenty 
for (let counter = 0; counter < 21; counter += 1) {
    let boxes = document.createElement('div')
    boxes.className = 'boxes-4'
    boxes.id = 'boxes-4'
    boxElement.append(boxes)
    
    for (let counter = 105; counter < 200; counter += 5){
        

        var style = document.createElement('style');
          style.innerHTML = `
          #boxes-4 {
          background-color: cadetblue;
          width: counter;
          }
          `;
          document.head.append(style);
        }
  }

  //Kata Twentyone 
  for (let counter = 0; counter < 21; counter += 1) {
    let boxes = document.createElement('div')
    boxes.className = 'boxes21'
    boxElement.append(boxes)
    if (counter%2) {
        boxes.id = 'boxes21'
        style.innerHTML = `
        #boxes21 {
        background-color: cadetblue;
        
        }
        `;
        
      }

}

