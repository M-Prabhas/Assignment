const comps = document.getElementsByClassName('drag');
const dropper = document.getElementsByClassName('dropper')[0];
console.log("hello");
// for reverting the containers;
const buton=document.querySelector('button')
const container1 = document.querySelector('.container1');

// Store the initial HTML content of the containers
const initialHTML1 = container1.innerHTML;
const initialHTML2 = dropper.innerHTML;

//for the items in first container.
for (child of comps) {
  child.addEventListener('dragstart', (e) => {
    console.log("dragstart has been triggered");
    e.dataTransfer.setData('text/plain', child.src);
    e.target.className += ' hold'
    setTimeout(()=>{
        const newdivElement = document.createElement('div');
        newdivElement.className='hide';
        e.target.parentNode.replaceChild(newdivElement, e.target);
    },0);
});
    child.addEventListener('dragend', (e) => {
        console.log("dragend has been triggered");
        console.log(e.target);  
});
}


// for the message section.
const msg=document.getElementsByClassName('message');


dropper.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

dropper.addEventListener('dragenter',(e)=>{

});

dropper.addEventListener('dragleave',(e)=>{

});


// the message for dropper being filled.
dropper.addEventListener('drop', (event) => {
  event.preventDefault();
//for appending are dropping the element into the dropper section
  const imageData = event.dataTransfer.getData('text/plain');

  const newImageElement = document.createElement('img');
  newImageElement.src = imageData;
  newImageElement.className = 'drag';

  dropper.appendChild(newImageElement);
//for essage section
  msg.innerHTML = "The item has been dropped.";
  msg.className = 'show';

  setTimeout(() => {  
    msg.className = 'message';
    msg.innerHTML = '';
  }, 2000);
});
// Reset the containers to their initial state when the reset button is clicked
buton.addEventListener('click', () => {
  location.reload();
  container1.innerHTML = initialHTML1;
  dropper.innerHTML = initialHTML2;
})

  