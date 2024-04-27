// const message1 = "Hey Nonty how are you doing?";
// const message2 = "Kwetzy I am doing great thanks";
// const message3 = "And how are you doing?";
// const message4 = "I am doing great, just busy with javascript";


const nonty = "Nonty";
const kwetzy = "Kwetzy";

// const hours = time.getHours();
// const minutes = time.getMinutes();

sendMessage(nonty, "Hi Kwetzy how are you doing");
sendMessage(kwetzy, "Hi, Nonty I am doing great thanks and you");
sendMessage(nonty, "I am doing great, just busy with javascript");
sendMessage(kwetzy, "I am doing great, keep your mind fully blown ");

function sendMessage(user, message ) {
    // const log =`${user}: ${message}`;
    const timeStamp = getTimeStamp();
    console.log(
        `${user}: ${message}
                                                ${timeStamp}`

    );
    // return log;
}

function getTimeStamp() {
    const date = new Date();
    const timeStamp = date.getHours() + ":" + date.getMinutes();
    return timeStamp;
}

