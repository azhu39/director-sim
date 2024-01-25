 
function start() {
    // Get canvas, WebGL context, twgl.m4
    var canvas = document.getElementById("mycanvas");
    var gl = canvas.getContext("webgl");
    // Read shader programs
    // Read Amb+Diffu+Specu shader source
    var ADSProgram = importMyShaderProgram(gl,"ADSVertexShader","ADSFragmentShader");
    // Read Amb + Diffu shader source
    var ADProgram = importMyShaderProgram(gl,"ADVertexShader","ADFragmentShader"); 
    var TProgram = importMyTextureShaderProgram(gl,"TVertexShader","ADSTFragmentShader");
    // Import object datas and define their draw functions
    var cube_data = importMyData(gl,vertexPosCube,vertexNormalsCube,vertexColorsCube,triangleIndicesCube)
    function drawCube(tMV,tMVn,tMVP) {
        drawObject(gl, ADSProgram, cube_data, tMV, tMVn, tMVP)
    }

    var monolith_data = importMyData(gl,vertexPos,vertexNormals,vertexColors,triangleIndices)
    function drawMonolith(tMV,tMVn,tMVP) {
        drawObject(gl, ADSProgram, monolith_data, tMV, tMVn, tMVP)
    }

    var rockwall_w_t = importMyDataWithTexture(gl, vertexPosRockWall,vertexNormalsRockWall,vertexColorsRockWall2,triangleIndicesRockWall,vertexTextureCoordsRockWall);
    function drawRockWall2(tMV,tMVn,tMVP) {
      drawObjectWithTexture(gl, TProgram, rockwall_w_t, tMV, tMVn, tMVP, rockwall_diff_texture, rockwall_nor_texture)
    }

    var stone_w_t = importMyDataWithTexture(gl,vertexPosStone,vertexNormalsStone,vertexColorsStone,triangleIndicesStone,vertexTextureCoordsStone);
    function drawStoneWT(tMV,tMVn,tMVP) {
      drawObjectWithTexture(gl, TProgram, stone_w_t, tMV, tMVn, tMVP, stone_diff_texture, stone_nor_texture)
    }
    var monkey_body_data = importMyData(gl,vertexPosMonkeyBody,vertexNormalsMonkeyBody,vertexColorsMonkeyBody,triangleIndicesMonkeyBody);
    function drawMonkeyBody(tMV,tMVn,tMVP) {
      drawObject(gl, ADProgram, monkey_body_data, tMV, tMVn, tMVP)
    }

    var monkey_face_data = importMyData(gl,vertexPosMonkeyFace,vertexNormalsMonkeyFace,vertexColorsMonkeyFace,triangleIndicesMonkeyFace);
    function drawMonkeyFace(tMV,tMVn,tMVP) {
      drawObject(gl, ADProgram, monkey_face_data, tMV, tMVn, tMVP)
    }

    var monkey_head_data = importMyData(gl,vertexPosMonkeyHead,vertexNormalsMonkeyHead,vertexColorsMonkeyHead,triangleIndicesMonkeyHead);
    function drawMonkeyHead(tMV,tMVn,tMVP) {
      drawObject(gl, ADProgram, monkey_head_data, tMV, tMVn, tMVP)
    }

    var monkey_l_arm_data = importMyData(gl,vertexPosMonkeyLArm,vertexNormalsMonkeyLArm,vertexColorsMonkeyLArm,triangleIndicesMonkeyLArm);
    function drawMonkeyLArm(tMV,tMVn,tMVP) {
      drawObject(gl, ADProgram, monkey_l_arm_data, tMV, tMVn, tMVP)
    }

    var monkey_l_leg_data = importMyData(gl,vertexPosMonkeyLLeg,vertexNormalsMonkeyLLeg,vertexColorsMonkeyLLeg,triangleIndicesMonkeyLLeg);
    function drawMonkeyLLeg(tMV,tMVn,tMVP) {
      drawObject(gl, ADProgram, monkey_l_leg_data, tMV, tMVn, tMVP)
    }

    var monkey_r_arm_data = importMyData(gl,vertexPosMonkeyRArm,vertexNormalsMonkeyRArm,vertexColorsMonkeyRArm,triangleIndicesMonkeyRArm);
    function drawMonkeyRArm(tMV,tMVn,tMVP) {
      drawObject(gl, ADProgram, monkey_r_arm_data, tMV, tMVn, tMVP)
    }

    var monkey_r_leg_data = importMyData(gl,vertexPosMonkeyRLeg,vertexNormalsMonkeyRLeg,vertexColorsMonkeyRLeg,triangleIndicesMonkeyRLeg);
    function drawMonkeyRLeg(tMV,tMVn,tMVP) {
      drawObject(gl, ADProgram, monkey_r_leg_data, tMV, tMVn, tMVP)
    }

    var monkey_tail_data = importMyData(gl,vertexPosMonkeyTail,vertexNormalsMonkeyTail,vertexColorsMonkeyTail,triangleIndicesMonkeyTail);
    function drawMonkeyTail(tMV,tMVn,tMVP) {
      drawObject(gl, ADProgram, monkey_tail_data, tMV, tMVn, tMVP)
    }

    var stone_diff_texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, stone_diff_texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var image1 = new Image();

    var stone_nor_texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, stone_nor_texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var image2 = new Image();

    var rockwall_diff_texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, rockwall_diff_texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var image3 = new Image();

    var rockwall_nor_texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, rockwall_nor_texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var image4 = new Image();

    var monkey_diff_texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, monkey_diff_texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var image5 = new Image();

    var monkey_nor_texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, monkey_nor_texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var image6 = new Image();

    function initTextureThenDraw()
  {
      image1.onload = function() { loadTexture(gl, image1,stone_diff_texture); };
      image1.crossOrigin = "anonymous";
      image1.src = stone_diff;

      image2.onload = function() { loadTexture(gl, image2,stone_nor_texture); };
      image2.crossOrigin = "anonymous";
      image2.src = stone_nor;

      image3.onload = function() { loadTexture(gl, image3,rockwall_diff_texture); };
      image3.crossOrigin = "anonymous";
      image3.src = rockwall_diff;

      image4.onload = function() { loadTexture(gl, image4,rockwall_nor_texture); };
      image4.crossOrigin = "anonymous";
      image4.src = rockwall_nor;

      image5.onload = function() { loadTexture(gl, image3,monkey_diff_texture); };
      image5.crossOrigin = "anonymous";
      image5.src = monkey_diff;

      image6.onload = function() { loadTexture(gl, image4,monkey_nor_texture); };
      image6.crossOrigin = "anonymous";
      image6.src = monkey_nor;

      window.setTimeout(draw,1000);
    }

    function draw() {

        var Hermite = function(t) {
          return [
        2*t*t*t-3*t*t+1,
        t*t*t-2*t*t+t,
        -2*t*t*t+3*t*t,
        t*t*t-t*t
          ];
      }

      function Cubic(basis,P,t){
          var b = basis(t);
          var result=vec3.create();
          vec3.scale(result,P[0],b[0]);
          vec3.scaleAndAdd(result,result,P[1],b[1]);
          vec3.scaleAndAdd(result,result,P[2],b[2]);
          vec3.scaleAndAdd(result,result,P[3],b[3]);
          return result;
      }
      
      var p0=[0,0,0];
      var d0=[1,3,0];
      var p1=[-100+P1XSlider.value*.1,25+P1YSlider.value*.1,-50+P1ZSlider.value*.1];
      var d1=[0,0,-1];
      var p2=[-100+P2XSlider.value*.1,25+P2YSlider.value*.1,-300+P2ZSlider.value*.1];
      var d2=[1,0,1];
      var p3=[0+P3XSlider.value*.1,25+P3YSlider.value*.1,-250+P3ZSlider.value*.1];
      var d3=[0,300,0];
      var p4=[100+P4XSlider.value*.1,25+P4YSlider.value*.1,-300+P4ZSlider.value*.1];
      var d4=[0,3,2];
      
      var P0 = [p0,d0,p1,d1]; 
      var P1 = [p1,d1,p2,d2]; 
      var P2 = [p2,d2,p3,d3]; 
      var P3 = [p3,d3,p4,d4];
      
      var C0 = function(t_) {return Cubic(Hermite,P0,t_);};
      var C1 = function(t_) {return Cubic(Hermite,P1,t_);};
      var C2 = function(t_) {return Cubic(Hermite,P2,t_);};
      var C3 = function(t_) {return Cubic(Hermite,P3,t_);};
      
      var Ccomp = function(t) {
          if (t<1){
                var u = t;
                return C0(u);
          } else if (t< 2.0){
                var u = t-1.0;
                return C1(u);
          } else if (t< 3.0){
            var u = t-2.0;
            return C2(u);
          }  else {
            var u = t-3.0;
            return C3(u);
          }        
      }

      gl.clearColor(153.0/255.0, 204.0/255.0, 255.0/255.0, 1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      var eye = [cameraXSlider.value, cameraYSlider.value, cameraZSlider.value];
      var target = [cameraXSlider.value, cameraYSlider.value-150, cameraZSlider.value-400];
      var up = [0, 1, 0];

      var tCamera = mat4.create();
      mat4.lookAt(tCamera, eye, target, up);
      mat4.rotate(tCamera, tCamera, cameraTiltSlider.value * 0.01 * Math.PI, [1, 0, 0]);
      // Rotate along Y axis
      mat4.rotate(tCamera, tCamera, cameraPanSlider.value * 0.01 * Math.PI, [0, 1, 0]);
      // Rotate along Z axis
      mat4.rotate(tCamera, tCamera, cameraDASlider.value * 0.01 * Math.PI, [0, 0, 1]);
      var tProjection = mat4.create();
      var zoomScale = ((cameraZoomSlider.value-cameraZoomSlider.min)/(cameraZoomSlider.max-cameraZoomSlider.min))*6+4;
      mat4.perspective(tProjection, Math.PI / zoomScale, 1, 10, 1000);

      var tModel = mat4.create();
      var tMV = mat4.create();
      var tMVn = mat3.create();
      var tMVP = mat4.create();
      mat4.scale(tModel,tModel,[1/2,1/2,1/2])
      mat4.multiply(tMV, tCamera, tModel);
      mat3.normalFromMat4(tMVn, tMV);
      mat4.multiply(tMVP, tProjection, tMV);
      drawRockWall2(tMV, tMVn, tMVP);

      var tModelNewRock = mat4.clone(tModel);
      mat4.rotate(tModelNewRock,tModelNewRock,-Math.PI/8.0,[0,1,0])
      mat4.translate(tModelNewRock, tModelNewRock, [50, 50, -350]);
      var tMVNewRock = mat4.create();
      var tMVnNewRock = mat3.create();
      var tMVPNewRock = mat4.create();
      mat4.multiply(tMVNewRock, tCamera, tModelNewRock);
      mat3.normalFromMat4(tMVnNewRock, tMVNewRock);
      mat4.multiply(tMVPNewRock, tProjection, tMVNewRock);
      drawRockWall2(tMVNewRock, tMVnNewRock, tMVPNewRock);

      var tModel_rock2 = mat4.clone(tModel);
      mat4.translate(tModel_rock2, tModel_rock2, [-150, 50, -375]);
      mat4.rotate(tModel_rock2,tModel_rock2,Math.PI/4.0,[0,1,0]);
      var tMV_rock2 = mat4.create();
      var tMVn_rock2 = mat3.create();
      var tMVP_rock2 = mat4.create();
      mat4.multiply(tMV_rock2, tCamera, tModel_rock2);
      mat3.normalFromMat4(tMVn_rock2, tMV_rock2);
      mat4.multiply(tMVP_rock2, tProjection, tMV_rock2);
      drawRockWall2(tMV_rock2, tMVn_rock2, tMVP_rock2);

      var tModel_stone1 = mat4.create();
      mat4.translate(tModel_stone1, tModel_stone1, [-25, 10, -25]);
      mat4.rotate(tModel_stone1,tModel_stone1,Math.PI/4.0,[0,1,0]);
      mat4.scale(tModel_stone1,tModel_stone1,[30,30,30]);
      var tMV_stone1 = mat4.create();
      var tMVn_stone1 = mat3.create();
      var tMVP_stone1 = mat4.create();
      mat4.multiply(tMV_stone1, tCamera, tModel_stone1);
      mat3.normalFromMat4(tMVn_stone1, tMV_stone1);
      mat4.multiply(tMVP_stone1, tProjection, tMV_stone1);
      // drawStone(tMV_stone1, tMVn_stone1, tMVP_stone1);
      drawStoneWT(tMV_stone1, tMVn_stone1, tMVP_stone1);

      var tModel_stone2 = mat4.clone(tModel_stone1);
      mat4.translate(tModel_stone2, tModel_stone2, [-1, 0, -0.1]);
      var tMV_stone2 = mat4.create();
      var tMVn_stone2 = mat3.create();
      var tMVP_stone2 = mat4.create();
      mat4.multiply(tMV_stone2, tCamera, tModel_stone2);
      mat3.normalFromMat4(tMVn_stone2, tMV_stone2);
      mat4.multiply(tMVP_stone2, tProjection, tMV_stone2);
      drawStoneWT(tMV_stone2, tMVn_stone2, tMVP_stone2);

      var tModel_stone3 = mat4.clone(tModel_stone2);
      mat4.translate(tModel_stone3, tModel_stone3, [-1, 0, -0.25]);
      var tMV_stone3 = mat4.create();
      var tMVn_stone3 = mat3.create();
      var tMVP_stone3 = mat4.create();
      mat4.multiply(tMV_stone3, tCamera, tModel_stone3);
      mat3.normalFromMat4(tMVn_stone3, tMV_stone3);
      mat4.multiply(tMVP_stone3, tProjection, tMV_stone3);
      drawStoneWT(tMV_stone3, tMVn_stone3, tMVP_stone3);

      var tModel_stone4 = mat4.clone(tModel_stone3);
      mat4.translate(tModel_stone4, tModel_stone4, [-1, 0, -1]);
      var tMV_stone4 = mat4.create();
      var tMVn_stone4 = mat3.create();
      var tMVP_stone4 = mat4.create();
      mat4.multiply(tMV_stone4, tCamera, tModel_stone4);
      mat3.normalFromMat4(tMVn_stone4, tMV_stone4);
      mat4.multiply(tMVP_stone4, tProjection, tMV_stone4);
      drawStoneWT(tMV_stone4, tMVn_stone4, tMVP_stone4);

      var tModel_stone5 = mat4.create();
      mat4.translate(tModel_stone5, tModel_stone5, [20, 10, -30]);
      mat4.rotate(tModel_stone5,tModel_stone5,-Math.PI/4.0,[0,1,0]);
      mat4.scale(tModel_stone5,tModel_stone5,[30,30,30]);
      var tMV_stone5 = mat4.create();
      var tMVn_stone5 = mat3.create();
      var tMVP_stone5 = mat4.create();
      mat4.multiply(tMV_stone5, tCamera, tModel_stone5);
      mat3.normalFromMat4(tMVn_stone5, tMV_stone5);
      mat4.multiply(tMVP_stone5, tProjection, tMV_stone5);
      drawStoneWT(tMV_stone5, tMVn_stone5, tMVP_stone5);

      var tModel_stone6 = mat4.clone(tModel_stone5);
      mat4.translate(tModel_stone6, tModel_stone6, [1.5, 0.5, -.5]);
      var tMV_stone6 = mat4.create();
      var tMVn_stone6 = mat3.create();
      var tMVP_stone6 = mat4.create();
      mat4.multiply(tMV_stone6, tCamera, tModel_stone6);
      mat3.normalFromMat4(tMVn_stone6, tMV_stone6);
      mat4.multiply(tMVP_stone6, tProjection, tMV_stone6);
      drawStoneWT(tMV_stone6, tMVn_stone6, tMVP_stone6);

      var tModel_stone7 = mat4.clone(tModel_stone6);
      mat4.translate(tModel_stone7, tModel_stone7, [1.5, 0, -.5]);
      var tMV_stone7 = mat4.create();
      var tMVn_stone7 = mat3.create();
      var tMVP_stone7 = mat4.create();
      mat4.multiply(tMV_stone7, tCamera, tModel_stone7);
      mat3.normalFromMat4(tMVn_stone7, tMV_stone7);
      mat4.multiply(tMVP_stone7, tProjection, tMV_stone7);
      drawStoneWT(tMV_stone7, tMVn_stone7, tMVP_stone7);

      var tModel_monolith = mat4.create();
      mat4.translate(tModel_monolith, tModel_monolith,[0,30,5]);
      mat4.rotate(tModel_monolith,tModel_monolith,-Math.PI/2.0,[0,1,0])
      var tMV_monolith = mat4.create();
      var tMVn_monolith = mat3.create();
      var tMVP_monolith = mat4.create();
      mat4.multiply(tMV_monolith, tCamera, tModel_monolith);
      mat3.normalFromMat4(tMVn_monolith, tMV_monolith);
      mat4.multiply(tMVP_monolith, tProjection, tMV_monolith); 
      drawMonolith(tMV_monolith,tMVn_monolith,tMVP_monolith);

      var tModel_monkey = mat4.create();
      mat4.scale(tModel_monkey,tModel_monkey,[.5,.5,.5]);
      mat4.translate(tModel_monkey,tModel_monkey,[20,50,150]);
      mat4.translate(tModel_monkey,tModel_monkey,Ccomp(monkeyTSlider.value*.01));
      mat4.rotate(tModel_monkey,tModel_monkey,-2*Math.PI/3,[1,0,0])
      mat4.rotate(tModel_monkey,tModel_monkey,Math.PI*monkeyLeanSlider.value*0.01,[1,0,0])
      mat4.rotate(tModel_monkey,tModel_monkey,Math.PI*monkeyHTSlider.value*0.01,[0,1,0])
      mat4.rotate(tModel_monkey,tModel_monkey,Math.PI*monkeyVTSlider.value*0.01,[0,0,1])
      var tMV_monkey = mat4.create();
      var tMVn_monkey = mat3.create();
      var tMVP_monkey = mat4.create();
      mat4.multiply(tMV_monkey, tCamera, tModel_monkey);
      mat3.normalFromMat4(tMVn_monkey, tMV_monkey);
      mat4.multiply(tMVP_monkey, tProjection, tMV_monkey); 
      drawMonkeyBody(tMV_monkey,tMVn_monkey,tMVP_monkey);

      var tModel_monkey_RLeg = mat4.clone(tModel_monkey);
      mat4.rotate(tModel_monkey_RLeg,tModel_monkey_RLeg,Math.PI*monkeyRLegSlider.value*0.01,[1,0,0])
      var tMV_monkey_RLeg = mat4.create();
      var tMVn_monkey_RLeg = mat3.create();
      var tMVP_monkey_RLeg = mat4.create();
      mat4.multiply(tMV_monkey_RLeg, tCamera, tModel_monkey_RLeg);
      mat3.normalFromMat4(tMVn_monkey_RLeg, tMV_monkey_RLeg);
      mat4.multiply(tMVP_monkey_RLeg, tProjection, tMV_monkey_RLeg); 
      drawMonkeyRLeg(tMV_monkey_RLeg,tMVn_monkey_RLeg,tMVP_monkey_RLeg);

      var tModel_monkey_LLeg = mat4.clone(tModel_monkey);
      mat4.rotate(tModel_monkey_LLeg,tModel_monkey_LLeg,Math.PI*monkeyLLegSlider.value*0.01,[1,0,0])
      var tMV_monkey_LLeg = mat4.create();
      var tMVn_monkey_LLeg = mat3.create();
      var tMVP_monkey_LLeg = mat4.create();
      mat4.multiply(tMV_monkey_LLeg, tCamera, tModel_monkey_LLeg);
      mat3.normalFromMat4(tMVn_monkey_LLeg, tMV_monkey_LLeg);
      mat4.multiply(tMVP_monkey_LLeg, tProjection, tMV_monkey_LLeg); 
      drawMonkeyLLeg(tMV_monkey_LLeg,tMVn_monkey_LLeg,tMVP_monkey_LLeg);

      var tModel_monkey_Tail = mat4.clone(tModel_monkey);
      mat4.rotate(tModel_monkey_Tail,tModel_monkey_Tail,Math.PI*monkeyTailSlider.value*0.01,[0,0,1])
      var tMV_monkey_Tail = mat4.create();
      var tMVn_monkey_Tail = mat3.create();
      var tMVP_monkey_Tail = mat4.create();
      mat4.multiply(tMV_monkey_Tail, tCamera, tModel_monkey_Tail);
      mat3.normalFromMat4(tMVn_monkey_Tail, tMV_monkey_Tail);
      mat4.multiply(tMVP_monkey_Tail, tProjection, tMV_monkey_Tail); 
      drawMonkeyTail(tMV_monkey_Tail,tMVn_monkey_Tail,tMVP_monkey_Tail);

      var tModel_monkey_LArm = mat4.clone(tModel_monkey);
      mat4.rotate(tModel_monkey_LArm,tModel_monkey_LArm,Math.PI*monkeyLArmSlider.value*0.01,[1,0,0])
      var tMV_monkey_LArm = mat4.create();
      var tMVn_monkey_LArm = mat3.create();
      var tMVP_monkey_LArm = mat4.create();
      mat4.multiply(tMV_monkey_LArm, tCamera, tModel_monkey_LArm);
      mat3.normalFromMat4(tMVn_monkey_LArm, tMV_monkey_LArm);
      mat4.multiply(tMVP_monkey_LArm, tProjection, tMV_monkey_LArm); 
      drawMonkeyLArm(tMV_monkey_LArm,tMVn_monkey_LArm,tMVP_monkey_LArm);

      var tModel_monkey_RArm = mat4.clone(tModel_monkey);
      mat4.rotate(tModel_monkey_RArm,tModel_monkey_RArm,Math.PI*monkeyRArmSlider.value*0.01,[1,0,0])
      var tMV_monkey_RArm = mat4.create();
      var tMVn_monkey_RArm = mat3.create();
      var tMVP_monkey_RArm = mat4.create();
      mat4.multiply(tMV_monkey_RArm, tCamera, tModel_monkey_RArm);
      mat3.normalFromMat4(tMVn_monkey_RArm, tMV_monkey_RArm);
      mat4.multiply(tMVP_monkey_RArm, tProjection, tMV_monkey_RArm); 
      drawMonkeyRArm(tMV_monkey_RArm,tMVn_monkey_RArm,tMVP_monkey_RArm);

      var tModel_monkey_Head = mat4.clone(tModel_monkey);
      mat4.rotate(tModel_monkey_Head,tModel_monkey_Head,Math.PI*monkeyHeadSlider.value*0.01/2.0,[0,0,1])
      var tMV_monkey_Head = mat4.create();
      var tMVn_monkey_Head = mat3.create();
      var tMVP_monkey_Head = mat4.create();
      mat4.multiply(tMV_monkey_Head, tCamera, tModel_monkey_Head);
      mat3.normalFromMat4(tMVn_monkey_Head, tMV_monkey_Head);
      mat4.multiply(tMVP_monkey_Head, tProjection, tMV_monkey_Head); 
      drawMonkeyHead(tMV_monkey_Head,tMVn_monkey_Head,tMVP_monkey_Head);

      var tModel_monkey_Face = mat4.clone(tModel_monkey_Head);
      var tMV_monkey_Face = mat4.create();
      var tMVn_monkey_Face = mat3.create();
      var tMVP_monkey_Face = mat4.create();
      mat4.multiply(tMV_monkey_Face, tCamera, tModel_monkey_Face);
      mat3.normalFromMat4(tMVn_monkey_Face, tMV_monkey_Face);
      mat4.multiply(tMVP_monkey_Face, tProjection, tMV_monkey_Face); 
      drawMonkeyFace(tMV_monkey_Face,tMVn_monkey_Face,tMVP_monkey_Face);

      var tModel_cube1 = mat4.create();
      mat4.scale(tModel_cube1,tModel_cube1,[.5,.5,.5]);
      mat4.translate(tModel_cube1,tModel_cube1,[20,50,150]);
      mat4.translate(tModel_cube1,tModel_cube1,p1)
      var tMV_cube1 = mat4.create();
      var tMVn_cube1 = mat3.create();
      var tMVP_cube1 = mat4.create();
      mat4.multiply(tMV_cube1, tCamera, tModel_cube1);
      mat3.normalFromMat4(tMVn_cube1, tMV_cube1);
      mat4.multiply(tMVP_cube1, tProjection, tMV_cube1); 
      drawCube(tMV_cube1,tMVn_cube1,tMVP_cube1);

      var tModel_cube2 = mat4.create();
      mat4.scale(tModel_cube2,tModel_cube2,[.5,.5,.5]);
      mat4.translate(tModel_cube2,tModel_cube2,[20,50,150]);
      mat4.translate(tModel_cube2,tModel_cube2,p2)
      var tMV_cube2 = mat4.create();
      var tMVn_cube2 = mat3.create();
      var tMVP_cube2 = mat4.create();
      mat4.multiply(tMV_cube2, tCamera, tModel_cube2);
      mat3.normalFromMat4(tMVn_cube2, tMV_cube2);
      mat4.multiply(tMVP_cube2, tProjection, tMV_cube2); 
      drawCube(tMV_cube2,tMVn_cube2,tMVP_cube2);

      var tModel_cube3 = mat4.create();
      mat4.scale(tModel_cube3,tModel_cube3,[.5,.5,.5]);
      mat4.translate(tModel_cube3,tModel_cube3,[20,50,150]);
      mat4.translate(tModel_cube3,tModel_cube3,p3)
      var tMV_cube3 = mat4.create();
      var tMVn_cube3 = mat3.create();
      var tMVP_cube3 = mat4.create();
      mat4.multiply(tMV_cube3, tCamera, tModel_cube3);
      mat3.normalFromMat4(tMVn_cube3, tMV_cube3);
      mat4.multiply(tMVP_cube3, tProjection, tMV_cube3); 
      drawCube(tMV_cube3,tMVn_cube3,tMVP_cube3);

      var tModel_cube4 = mat4.create();
      mat4.scale(tModel_cube4,tModel_cube4,[.5,.5,.5]);
      mat4.translate(tModel_cube4,tModel_cube4,[20,50,150]);
      mat4.translate(tModel_cube4,tModel_cube4,p4)
      var tMV_cube4 = mat4.create();
      var tMVn_cube4 = mat3.create();
      var tMVP_cube4 = mat4.create();
      mat4.multiply(tMV_cube4, tCamera, tModel_cube4);
      mat3.normalFromMat4(tMVn_cube4, tMV_cube4);
      mat4.multiply(tMVP_cube4, tProjection, tMV_cube4); 
      drawCube(tMV_cube4,tMVn_cube4,tMVP_cube4);

      var tModel_stone8 = mat4.clone(tModel_stone2);
      mat4.translate(tModel_stone8, tModel_stone8, [1, 1.5, -5]);
      mat4.scale(tModel_stone8,tModel_stone8,[3,3,3])
      var tMV_stone8 = mat4.create();
      var tMVn_stone8 = mat3.create();
      var tMVP_stone8 = mat4.create();
      mat4.multiply(tMV_stone8, tCamera, tModel_stone8);
      mat3.normalFromMat4(tMVn_stone8, tMV_stone8);
      mat4.multiply(tMVP_stone8, tProjection, tMV_stone8);
      drawStoneWT(tMV_stone8, tMVn_stone8, tMVP_stone8);

      var tModel_stone9 = mat4.clone(tModel_stone8);
      mat4.translate(tModel_stone9, tModel_stone9, [1, 0, 0]);
      var tMV_stone9 = mat4.create();
      var tMVn_stone9 = mat3.create();
      var tMVP_stone9 = mat4.create();
      mat4.multiply(tMV_stone9, tCamera, tModel_stone9);
      mat3.normalFromMat4(tMVn_stone9, tMV_stone9);
      mat4.multiply(tMVP_stone9, tProjection, tMV_stone9);
      drawStoneWT(tMV_stone9, tMVn_stone9, tMVP_stone9);

      var tModel_stone10 = mat4.clone(tModel_stone9);
      mat4.translate(tModel_stone10, tModel_stone10, [-.5, 1, -.5]);
      var tMV_stone10 = mat4.create();
      var tMVn_stone10 = mat3.create();
      var tMVP_stone10 = mat4.create();
      mat4.multiply(tMV_stone10, tCamera, tModel_stone10);
      mat3.normalFromMat4(tMVn_stone10, tMV_stone10);
      mat4.multiply(tMVP_stone10, tProjection, tMV_stone10);
      drawStoneWT(tMV_stone10, tMVn_stone10, tMVP_stone10);

      var tModel_stone11 = mat4.clone(tModel_stone10);
      mat4.translate(tModel_stone11, tModel_stone11, [0, 1.5, 0]);
      var tMV_stone11 = mat4.create();
      var tMVn_stone11 = mat3.create();
      var tMVP_stone11 = mat4.create();
      mat4.multiply(tMV_stone11, tCamera, tModel_stone11);
      mat3.normalFromMat4(tMVn_stone11, tMV_stone11);
      mat4.multiply(tMVP_stone11, tProjection, tMV_stone11);
      drawStoneWT(tMV_stone11, tMVn_stone11, tMVP_stone11);

      var tModel_stone12 = mat4.clone(tModel_stone4);
      mat4.translate(tModel_stone12, tModel_stone12, [1, 1, -1]);
      var tMV_stone12 = mat4.create();
      var tMVn_stone12 = mat3.create();
      var tMVP_stone12 = mat4.create();
      mat4.multiply(tMV_stone12, tCamera, tModel_stone12);
      mat3.normalFromMat4(tMVn_stone12, tMV_stone12);
      mat4.multiply(tMVP_stone12, tProjection, tMV_stone12);
      drawStoneWT(tMV_stone12, tMVn_stone12, tMVP_stone12);

    }

    cameraXSlider.addEventListener("input", draw);
    cameraYSlider.addEventListener("input", draw);
    cameraZSlider.addEventListener("input", draw);
    cameraPanSlider.addEventListener("input", draw);
    cameraTiltSlider.addEventListener("input", draw);
    cameraDASlider.addEventListener("input", draw);
    cameraZoomSlider.addEventListener("input", draw);
    lightKXSlider.addEventListener("input", draw);
    lightKYSlider.addEventListener("input", draw);
    lightKZSlider.addEventListener("input", draw);
    lightKISlider.addEventListener("input", draw);
    lightKCSlider.addEventListener("input", draw);
    lightFXSlider.addEventListener("input", draw);
    lightFYSlider.addEventListener("input", draw);
    lightFZSlider.addEventListener("input", draw);
    lightFISlider.addEventListener("input", draw);
    lightFCSlider.addEventListener("input", draw);
    lightBXSlider.addEventListener("input", draw);
    lightBYSlider.addEventListener("input", draw);
    lightBZSlider.addEventListener("input", draw);
    lightBISlider.addEventListener("input", draw);
    lightBCSlider.addEventListener("input", draw);
    monkeyTSlider.addEventListener('input', draw);
    monkeyHTSlider.addEventListener('input', draw);
    monkeyVTSlider.addEventListener('input', draw);
    monkeyLeanSlider.addEventListener('input', draw);
    monkeyHeadSlider.addEventListener('input', draw);
    monkeyLArmSlider.addEventListener('input', draw);
    monkeyLLegSlider.addEventListener('input', draw);
    monkeyRArmSlider.addEventListener('input', draw);
    monkeyRLegSlider.addEventListener('input', draw);
    monkeyTailSlider.addEventListener('input', draw);
    P1XSlider.addEventListener('input', draw);
    P1YSlider.addEventListener('input', draw);
    P1ZSlider.addEventListener('input', draw);
    P2XSlider.addEventListener('input', draw);
    P2YSlider.addEventListener('input', draw);
    P2ZSlider.addEventListener('input', draw);
    P3XSlider.addEventListener('input', draw);
    P3YSlider.addEventListener('input', draw);
    P3ZSlider.addEventListener('input', draw);
    P4XSlider.addEventListener('input', draw);
    P4YSlider.addEventListener('input', draw);
    P4ZSlider.addEventListener('input', draw);
    initTextureThenDraw();
}

window.onload=start;
