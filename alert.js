// console.log('i am here');

// alert('Ma is coming!!');

const maComing = () => {
    alert('Ma is coming,open the book');

};

const isGoingPicnic = () => {
    const response = confirm('Are your going to picnic?');
    if (response) {
        alert('amke fee ta bkash kore de');
    } else {
        console.log("DGM");
    }
};

const askName = () => {
    const name = prompt('what is your name?');
    if (name) {
        console.log(name);
    }
};