import test from 'node:test';import assert from 'node:assert/strict';
function luminance(hex){const c=hex.match(/[a-f0-9]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;}
function ratio(a,b){const values=[luminance(a),luminance(b)].sort((x,y)=>y-x);return (values[0]+.05)/(values[1]+.05);}
test('authored text and interactive colors meet WCAG AA contrast for normal text',()=>{for(const [fg,bg] of [['22342d','f6f5f0'],['58665e','fffefa'],['215849','fffefa'],['8a611e','f6f5f0'],['ffffff','223b32'],['69552f','f3eee2'],['4d6055','f6f5f0'],['245748','f6f5f0'],['89601f','f6f5f0'],['69628a','f6f5f0']])assert.ok(ratio(fg,bg)>=4.5,`${fg} on ${bg}: ${ratio(fg,bg)}`);});
