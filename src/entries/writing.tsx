import * as img71123 from '../images/IMG_2431.jpg'
import * as img71423 from '../images/IMG_3885.jpg'
/*This is the image block
When you want to add an image, paste in ${image(<IMAGE>, 400, 350)}

If you have a url to an image online, you can add it like so ${image('www.yourlink.com', 100, 100)}

If you have an image you want to upload, drag it into the src/images folder, then 
1. Paste this into the top of the file: 
import * as img<date> from '../images/<FILE NAME OF IMAGE>'
2. Add it into your post like so ${image(img<date>, 100, 100)}
*/

//TODO: oops these arent responsive
export const image = (link: string, width:number, height:number) => `<img src=${link} width=${width} height=${height} />`;
export const audio = "to come";

/***
 * POST TEMPLATE TO COPY & PASTE
 * 
 * 
export const post<insert date> = `
********* <br>
START WRITING HERE!
<br>
${image(img<date>, 100, 100)}
<br> *******
`;

 *  */ 


export const post71123 = `
To write this article, I spent one night pretending to be like Kiko. 
<br>
I went home after work and relaxed 
<br>
and then wrote from 11pm until 2am— 
I say wrote, but it is happening now, I am writing now, at 12:43am and <br>

I know almost without a doubt that Kiko is also working at 12:43am, now 
12:44, on a thursday night, painting.
<br>
<br>
${image(img71123.default, 820, 550)}
<br>
<br>
To write this article, I spent one night pretending to be like Kiko. 
I went home after work and relaxed and then wrote from 11pm until 2am— 
I say wrote, but it is happening now, I am writing now, at 12:43am and 
I know almost without a doubt that Kiko is also working at 12:43am, now 
12:44, on a thursday night, painting.
`;

export const post71023 = `

Early into my studio visit, I asked Kiko if he could show me a painting he was particularly attached to. He pulled out 
two canvases, significantly larger than his other works.
The paintings share an optical sheen akin to work done by airbrushing, an approach that has gained clout
 as a sexy painterly device in recent years. Notably, Kiko’s pieces, which are replete with technical intricacies
easily achieved by the airbrush, are all hand-painted. It is exactly this hand-painted-ness when applied to such 
exact imagery that first drew me to his work– a hand-painted-ness that bears in it’s imperfect lines the traces
of incredible effort. The result is paintings defined by cross-sections of acrylic blending, geometric scaffolds
 of black fading into white, and boulevards of colored trusses beset by gray. Bright, out-of-the-tube acrylics 
 operate in conjunction with vast gray-scales to create a give-and-take energy.
To write this article, I spent one night pretending to be like Kiko. I went home after work and relaxed and
then wrote from 11pm until 2am— I say wrote, but it is happening now, I am writing now, at 12:43am and I know almost 
without a doubt that Kiko is also working at 12:43am, now 12:44, on a thursday night, painting.

`;

export const post70923 = `

<br>
<br>
June 9, 2023
<br>
<br>
To write this article, I spent one night pretending to be like Kiko. 
I went home after work and relaxed and then wrote from 11pm until 2am— 
I say wrote, but it is happening now, I am writing now, at 12:43am and 
I know almost without a doubt that Kiko is also working at 12:43am, now 
12:44, on a thursday night, painting.
<br>
<br>
${image(img71123.default, 430, 350)}
<br>
<br>

`;
export const post71423 = `
<br>
++++++Friday, July 14, 2023 + noonish, studio+++++++
<br>
not sure wht i'll get done or hoq to spell.
<br>
thnks for listening :)
<br>
brb
<br>
${image(img71423.default, 80, 100)}
<br>

`;