background(204, 204, 255);
noStroke();


// hår//
fill(153, 76, 9);
ellipse(298, 330, 340, 500);

// ansikte//
fill(249, 218, 173);
ellipse(300, 250, 250, 310);

// Vänster lugg//
fill(153, 76, 9);
arc(210, 97, 175, 170, 270, 2.3, PI);

// höger lugg//
push();
translate(386, 95);
scale(-1, 1);
arc(0, 0, 175, 170, 270, 2.3, PI);
pop();

// ögon//
push();
stroke(0, 0, 0);
fill(255, 255, 255);
ellipse(243, 199, 45, 25);
ellipse(350, 199, 45, 25);
pop();

// ögonfärg//
fill(0, 75, 153);
ellipse(243, 199, 15, 25);
ellipse(350, 199, 15, 25);

// pupill//
fill(0, 0, 0);
ellipse(243, 199, 8, 8);
ellipse(350, 199, 8, 8);

fill(223, 188, 135, 70);
rect(287, 206, 20, 40);

// näsa //
fill(233, 198, 145);
ellipse(297, 255, 45, 20);

// näsborrar//
fill(218, 184, 134);
ellipse(290, 257, 10, 13);
ellipse(305, 257, 10, 13);

// läppar//
fill(255, 102, 102);
ellipse(298, 326, 70, 30);

// amorbåge//
fill(249, 218, 173);
triangle(289, 310, 298, 321, 312, 305);

// rouge//
fill(223, 148, 148, 130);
ellipse(225, 253, 40, 25);
ellipse(375, 253, 40, 25);

// fräknar vänster//
fill(122, 68, 26, 170);
ellipse(255, 239, 3, 3);
ellipse(245, 242, 3, 3);
ellipse(243, 233, 3, 3);
ellipse(227, 230, 3, 3);
ellipse(234, 238, 3, 3);
ellipse(237, 248, 3, 3);
ellipse(225, 245, 3, 3);

// fräknar höger//
fill(122, 68, 26, 170);
ellipse(345, 239, 3, 3);
ellipse(355, 242, 3, 3);
ellipse(357, 233, 3, 3);
ellipse(373, 230, 3, 3);
ellipse(366, 238, 3, 3);
ellipse(363, 248, 3, 3);
ellipse(375, 245, 3, 3);
