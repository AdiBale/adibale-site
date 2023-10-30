import * as img91923 from '../images/newPaintingsRelease2.jpg';
import * as img91923_2 from '../images/newPaintingsRelease.jpg';
import * as img102923 from '../images/newImageThatWeWillUpload.jpg';

/*This is the image block
When you want to add an image, paste in ${image(<IMAGE>, 400, 350)}

If you have a url to an image online, you can add it like so ${image('www.yourlink.com', 100, 100)}

If you have an image you want to upload, drag it into the src/images folder, then 
1. Paste this into the top of the file: 
import * as img<date> from '../images/<FILE NAME OF IMAGE>'
2. Add it into your post like so ${image(img<date>, 100, 100)}
*/

export const image = (link: string, width:number, height:number) => `<img style="width:100%;height:100%;" src=${link} width=${width} height=${height} />`;
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


export const post91923 = `
[ Front & back flyer for my show in Vermont 👻 ! ]
${image(img91923.default, 611,791)}
<br>
${image(img91923_2.default, 611,791)}
<br>
`;

export const post10423 = `
"
<br>
<br>
October 4, 2023 ~ 10:35 am ~ in the studio
<br>
<br>
When the painting is effective it manages to evoke by the most abstract means some feelable (mb identifiable?) subject or mood. This piece I made in mind for Basie really evokes a city playground– it does. 
<br>
<br>
“WOODSHEDDING	   &nbsp;    &nbsp;   	NEW YORK CITY”	 &nbsp;  &nbsp;   	Re-reading a page from Jack’s studio log : This entry on November 20 1974 says: “Group show at MoMA & Marden the only thing worth viewing…” So—— my man was also looking at my man! I had wondered somewhat about that, almost insecurely, if Jack was interested in what Brice was doing & vice versa, if they respected each other’s work. Jack also re-iterates something here that he’ll repeat later on in his studio journals: “Only keep your best work. Destroy the rest. It has a way of haunting you.” & I think I still stand by a gut-rejection of this sentiment. On the contrary, i think some modicum of “bad” work in your life—to remain in your field of vision— is perhaps a positive… or atleast humbling force. The sub-par works do their thing. They also serve as reminders for correction. Jack viewed his paintings with an objective standard of pass/fail based on whether the work succeeded in executing his formula, exacting it as mapped out and predetermined (by his steps.) I am interested in Jack’s concepts and aspects of his formulae but I myself am not interested in exactitude or precision almost ever. Moreover, I am still interested in the mechanics and potential of the human hand + brush (or tool). Painting: the image unfolds like a poem does: begins with a kernel of vision or impulse as point of departure, takes on blessures of movement, accident and then must react, be spontaneous, leading to some quality of surprise and dislocation: I am interested in “surprise” and “dislocation” because then i have allowed the work to form regardless of my intents, which means something autonomous and separate from me: something has asserted force: come through. Spirit. It’s possible that we share this element of valuing the unexpected, but i feel aware of the fact that Jack’s order of operations (at least for my favorite works of his: ie. the DNA paintings, the Greek Alphabet group & drag paintings) rely on establishing a formulaic foundation that, like a dormant chemical cocktail, is then activated by his compliment of machinery and guidance (but almost never his hand in the traditional sense) and thereby finished in one (often) instantaneous development that results in the painting. The variable that he introduces into the ground may make for more or less predictable outcomes, but Jack’s entire process pretty much IS a machination of spirit, an objective spirit, amidst the dissolution of brushstrokes & human judgment. 
<br>
<br>

This is where poetry comes in for me. This is also where other influences come in, such as traditional chinese paintings, which place emphasis on the brushstroke itself, its isolated movement followed by constructive influence within the overall composition of the piece, whatever the image may be. 
<br>
<br>
In 1975 he says “Living + working in N.Y. is getting harder + harder, Very difficult to continue without selling art.” We also say this all the time! It’s hard. I’m not even having it hard compared to most ppl. Even compared to our neighbors. But now I am in the red & owe my credit cards so… I have to make money this fall somehow to pay some off and be able to just be with Xin in Singapore and asia beyond, february + March. Right now it’s hard to conceive of 2 months away with no work but I am excited anyway— I am not old yet— fuck it. Go now, pay later! It’s what this country likes us to do anyway, making ourselves trapped in debt. 
<br>
<br>
I am considering another studio sale this fall. Somehow I doubt that I will sell anything from the show in Vermont. 
<br>
<br>
	Ah–– & now several pages later, Jack writes TO Brice: “Yes Brice I saw your olive leaf— a real symbol. Just as real as your blocks of color.” Yes Jack yes Brice, Brice who just died. You both my
  <br>
  <br>
"
`;
