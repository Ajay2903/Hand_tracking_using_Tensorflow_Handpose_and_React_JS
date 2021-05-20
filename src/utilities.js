const fingers = {
    thumb:[0,1,2,3,4],
    index:[0,5,6,7,8],
    middle:[0,9,10,11,12],
    ring:[0,13,14,15,16],
    pinky:[0,17,18,19,20], 
};

export const drawHand = (predictions,ctx)=>{
    if(predictions.length>0){
        predictions.forEach((predictions)=>{
            const marks = predictions.landmarks;

             for(let j=0;j<Object.keys(fingers).length;j++)
             {
                 let finger = Object.keys(fingers)[j];
                 for(let k=0;k<fingers[finger].length-1;k++)
                 {
                     const firstIndex = fingers[finger][k];
                     const secondIndex = fingers[finger][k+1];

                     ctx.beginPath();
                     ctx.moveTo(
                         marks[firstIndex][0],
                         marks[firstIndex][1]
                     );
                     ctx.lineTo(
                         marks[secondIndex][0],
                         marks[secondIndex][1]
                     )
                     ctx.strokeStyle = 'plum';
                     ctx.lineWidth = 4;
                     ctx.stroke();
                 }
             }

            for(let i=0;i<marks.length;i++)
            {
                const x = marks[i][0];
                const y = marks[i][1];
                ctx.beginPath();
                ctx.arc(x,y,8,0,3*Math.PI)
                ctx.fillStyle = "yellow";
                ctx.fill();


            }

        })
    }
}