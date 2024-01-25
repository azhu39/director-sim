var cameraXSlider = document.getElementById('cameraX');
var cameraYSlider = document.getElementById('cameraY');
var cameraZSlider = document.getElementById('cameraZ');
var cameraPanSlider = document.getElementById('cameraPan');
var cameraTiltSlider = document.getElementById('cameraTilt');
var cameraDASlider = document.getElementById('cameraDA');
var cameraZoomSlider = document.getElementById('cameraZoom');
var lightKXSlider = document.getElementById('lightKX');
var lightKYSlider = document.getElementById('lightKY');
var lightKZSlider = document.getElementById('lightKZ');
var lightKISlider = document.getElementById('lightKI');
var lightKCSlider = document.getElementById('lightKC');
var lightFXSlider = document.getElementById('lightFX');
var lightFYSlider = document.getElementById('lightFY');
var lightFZSlider = document.getElementById('lightFZ');
var lightFISlider = document.getElementById('lightFI');
var lightFCSlider = document.getElementById('lightFC');
var lightBXSlider = document.getElementById('lightBX');
var lightBYSlider = document.getElementById('lightBY');
var lightBZSlider = document.getElementById('lightBZ');
var lightBISlider = document.getElementById('lightBI');
var lightBCSlider = document.getElementById('lightBC');
var monkeyTSlider = document.getElementById('monkeyT');
var monkeyHTSlider = document.getElementById('monkeyHT');
var monkeyVTSlider = document.getElementById('monkeyVT');
var monkeyLeanSlider = document.getElementById('monkeyLean');
var monkeyHeadSlider = document.getElementById('monkeyHead');
var monkeyLArmSlider = document.getElementById('monkeyLArm');
var monkeyLLegSlider = document.getElementById('monkeyLLeg');
var monkeyRArmSlider = document.getElementById('monkeyRArm');
var monkeyRLegSlider = document.getElementById('monkeyRLeg');
var monkeyTailSlider = document.getElementById('monkeyTail');
var P1XSlider = document.getElementById("P1X");
var P1YSlider = document.getElementById("P1Y");
var P1ZSlider = document.getElementById("P1Z");
var P2XSlider = document.getElementById("P2X");
var P2YSlider = document.getElementById("P2Y");
var P2ZSlider = document.getElementById("P2Z");
var P3XSlider = document.getElementById("P3X");
var P3YSlider = document.getElementById("P3Y");
var P3ZSlider = document.getElementById("P3Z");
var P4XSlider = document.getElementById("P4X");
var P4YSlider = document.getElementById("P4Y");
var P4ZSlider = document.getElementById("P4Z");
cameraXSlider.value = 0;
cameraYSlider.value = 150;
cameraZSlider.value = 350;
cameraPanSlider.value = 0;
cameraTiltSlider.value = 0;
cameraDASlider.value = 0;
cameraZoomSlider.value = -100;
lightKXSlider.value = 0;
lightKYSlider.value = -30;
lightKZSlider.value = 100;
lightKISlider.value = 50;
lightKCSlider.value = 100;
lightFXSlider.value = 25;
lightFYSlider.value = -30;
lightFZSlider.value = -100;
lightFISlider.value = 25;
lightFCSlider.value = 100;
lightBXSlider.value = 0;
lightBYSlider.value = -30;
lightBZSlider.value = 100;
lightBISlider.value = 25;
lightBCSlider.value = 75;
monkeyTSlider.value = 0;
monkeyHTSlider.value = 0;
monkeyVTSlider.value = 0;
monkeyLeanSlider.value = 0;
monkeyHeadSlider.value = 0;
monkeyLArmSlider.value = 0;
monkeyLLegSlider.value = 0;
monkeyRArmSlider.value = 0;
monkeyRLegSlider.value = 0;
monkeyTailSlider.value = 0;
P1XSlider.value = 0;
P1YSlider.value = 0;
P1ZSlider.value = 0;
P2XSlider.value = 0;
P2YSlider.value = 0;
P2ZSlider.value = 0;
P3XSlider.value = 0;
P3YSlider.value = 0;
P3ZSlider.value = 0;
P4XSlider.value = 0;
P4YSlider.value = 0;
P4ZSlider.value = 0;

function compileMyShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
  }
  
  function createMyProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
  
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        alert("Unable to initialize the shader program.");
        return null;
    }
    return program;
  }
  
  function drawObject(gl, program, objData, tMV, tMVn, tMVP) {
    var posBuffer = objData[0];
    var normalBuffer = objData[1];
    var colorBuffer = objData[2];
    var indices = objData[3];
    var indexBuffer = objData[4];
    gl.useProgram(program);
    gl.uniformMatrix4fv(program.MVmatrix,false,tMV);
    gl.uniformMatrix3fv(program.MVNormalmatrix,false,tMVn);
    gl.uniformMatrix4fv(program.MVPmatrix,false,tMVP);
    gl.uniform3fv(program.LightKDirUniform, [parseFloat(lightKXSlider.value*.01), parseFloat(lightKYSlider.value*.01), parseFloat(lightKZSlider.value*.01)]);
    gl.uniform1f(program.LightKIntensityUniform, parseFloat(lightKISlider.value*.01));
    // gl.uniform3fv(program.LightKColUniform, [parseFloat(lightKCSlider.value), parseFloat(lightKCSlider.value), parseFloat(lightKCSlider.value)]);
    gl.uniform3fv(program.LightKColUniform, [1.0, 1.0, parseFloat(lightKCSlider.value*.01)]);

    gl.uniform3fv(program.LightFDirUniform, [parseFloat(lightFXSlider.value*.01), parseFloat(lightFYSlider.value*.01), parseFloat(lightFZSlider.value*.01)]);
    gl.uniform1f(program.LightFIntensityUniform, parseFloat(lightFISlider.value*.01));
    // gl.uniform3fv(program.LightFColUniform, [parseFloat(lightFCSlider.value), parseFloat(lightFCSlider.value), parseFloat(lightFCSlider.value)]);
    gl.uniform3fv(program.LightFColUniform, [1.0, 1.0, parseFloat(lightFCSlider.value*.01)]);

    gl.uniform3fv(program.LightBDirUniform, [parseFloat(lightBXSlider.value*.01), parseFloat(lightBYSlider.value*.01), parseFloat(lightBZSlider.value*.01)]);
    gl.uniform1f(program.LightBIntensityUniform, parseFloat(lightBISlider.value*.01));
    // gl.uniform3fv(program.LightBColUniform, [parseFloat(lightBCSlider.value), parseFloat(lightBCSlider.value), parseFloat(lightBCSlider.value)]);
    gl.uniform3fv(program.LightBColUniform, [1.0, 1.0, parseFloat(lightBCSlider.value*.01)]);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.vertexAttribPointer(program.PositionAttribute, posBuffer.itemSize, gl.FLOAT, false, 0, 0);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.vertexAttribPointer(program.NormalAttribute, normalBuffer.itemSize, gl.FLOAT, false, 0, 0);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(program.ColorAttribute, colorBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    // gl.vertexAttribPointer(program.ColorAttribute, colorBuffer.itemSize, gl.FLOAT, false, 0, 0);
  
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
  }

  function drawObjectWithTexture(gl, program, objData, tMV, tMVn, tMVP, texture1, texture2) {
    var posBuffer = objData[0];
    var normalBuffer = objData[1];
    var colorBuffer = objData[2];
    var indices = objData[3];
    var textureBuffer = objData[4];
    var indexBuffer = objData[5];
    gl.useProgram(program);
    gl.uniformMatrix4fv(program.MVmatrix,false,tMV);
    gl.uniformMatrix3fv(program.MVNormalmatrix,false,tMVn);
    gl.uniformMatrix4fv(program.MVPmatrix,false,tMVP);
    gl.uniform3fv(program.LightKDirUniform, [parseFloat(lightKXSlider.value*.01), parseFloat(lightKYSlider.value*.01), parseFloat(lightKZSlider.value*.01)]);
    gl.uniform1f(program.LightKIntensityUniform, parseFloat(lightKISlider.value*.01));
    gl.uniform3fv(program.LightKColUniform, [1.0, 1.0, parseFloat(lightKCSlider.value*.01)]);

    gl.uniform3fv(program.LightFDirUniform, [parseFloat(lightFXSlider.value*.01), parseFloat(lightFYSlider.value*.01), parseFloat(lightFZSlider.value*.01)]);
    gl.uniform1f(program.LightFIntensityUniform, parseFloat(lightFISlider.value*.01));
    gl.uniform3fv(program.LightFColUniform, [1.0, 1.0, parseFloat(lightFCSlider.value*.01)]);

    gl.uniform3fv(program.LightBDirUniform, [parseFloat(lightBXSlider.value*.01), parseFloat(lightBYSlider.value*.01), parseFloat(lightBZSlider.value*.01)]);
    gl.uniform1f(program.LightBIntensityUniform, parseFloat(lightBISlider.value*.01));
    gl.uniform3fv(program.LightBColUniform, [1.0, 1.0, parseFloat(lightBCSlider.value*.01)]);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.vertexAttribPointer(program.PositionAttribute, posBuffer.itemSize, gl.FLOAT, false, 0, 0);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.vertexAttribPointer(program.NormalAttribute, normalBuffer.itemSize, gl.FLOAT, false, 0, 0);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(program.ColorAttribute, colorBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
    gl.vertexAttribPointer(program.texcoordAttribute, textureBuffer.itemSize,gl.FLOAT, false, 0, 0);

	  // Bind texture
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
  
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
  }
  
  function setupAttributesAndUniforms(gl, program) {
    program.PositionAttribute = gl.getAttribLocation(program, "vPosition");
    gl.enableVertexAttribArray(program.PositionAttribute);
    program.NormalAttribute = gl.getAttribLocation(program, "vNormal");
    gl.enableVertexAttribArray(program.NormalAttribute);
    program.ColorAttribute = gl.getAttribLocation(program, "vColor");
    gl.enableVertexAttribArray(program.ColorAttribute);
    program.MVmatrix = gl.getUniformLocation(program, "uMV");
    program.MVNormalmatrix = gl.getUniformLocation(program, "uMVn");
    program.MVPmatrix = gl.getUniformLocation(program, "uMVP");
    program.LightKDirUniform = gl.getUniformLocation(program, "lightKDir");
    program.LightKIntensityUniform = gl.getUniformLocation(program, "lightKIntensity");
    program.LightKColUniform = gl.getUniformLocation(program, "lightKCol");
    program.LightFDirUniform = gl.getUniformLocation(program, "lightFDir");
    program.LightFIntensityUniform = gl.getUniformLocation(program, "lightFIntensity");
    program.LightFColUniform = gl.getUniformLocation(program, "lightFCol");
    program.LightBDirUniform = gl.getUniformLocation(program, "lightBDir");
    program.LightBIntensityUniform = gl.getUniformLocation(program, "lightBIntensity");
    program.LightBColUniform = gl.getUniformLocation(program, "lightBCol");
    //Updated with texture
    // shaderProgram.texcoordAttribute = gl.getAttribLocation(shaderProgram, "vTexCoord");
    // gl.enableVertexAttribArray(shaderProgram.texcoordAttribute);
    // program.texSampler1 = gl.getUniformLocation(program, "texSampler1");
    // gl.uniform1i(program.texSampler1, 0);
    // program.texSampler2 = gl.getUniformLocation(program, "texSampler2");
    // gl.uniform1i(program.texSampler2, 1);
  }

  function setupAttributesAndUniformsWithTexture(gl, program) {
    gl.useProgram(program);
    program.PositionAttribute = gl.getAttribLocation(program, "vPosition");
    gl.enableVertexAttribArray(program.PositionAttribute);
    program.NormalAttribute = gl.getAttribLocation(program, "vNormal");
    gl.enableVertexAttribArray(program.NormalAttribute);
    program.ColorAttribute = gl.getAttribLocation(program, "vColor");
    gl.enableVertexAttribArray(program.ColorAttribute);
    program.MVmatrix = gl.getUniformLocation(program, "uMV");
    program.MVNormalmatrix = gl.getUniformLocation(program, "uMVn");
    program.MVPmatrix = gl.getUniformLocation(program, "uMVP");
    program.LightKDirUniform = gl.getUniformLocation(program, "lightKDir");
    program.LightKIntensityUniform = gl.getUniformLocation(program, "lightKIntensity");
    program.LightKColUniform = gl.getUniformLocation(program, "lightKCol");
    program.LightFDirUniform = gl.getUniformLocation(program, "lightFDir");
    program.LightFIntensityUniform = gl.getUniformLocation(program, "lightFIntensity");
    program.LightFColUniform = gl.getUniformLocation(program, "lightFCol");
    program.LightBDirUniform = gl.getUniformLocation(program, "lightBDir");
    program.LightBIntensityUniform = gl.getUniformLocation(program, "lightBIntensity");
    program.LightBColUniform = gl.getUniformLocation(program, "lightBCol");
    //Updated with texture
    program.texcoordAttribute = gl.getAttribLocation(program, "vTexCoord");
    gl.enableVertexAttribArray(program.texcoordAttribute);
    program.texSampler1 = gl.getUniformLocation(program, "texSampler1");
    gl.uniform1i(program.texSampler1, 0);
    program.texSampler2 = gl.getUniformLocation(program, "texSampler2");
    gl.uniform1i(program.texSampler2, 1);
  }
  
  function createMyBuffer(gl, target, data) {
    var buffer = gl.createBuffer();
    gl.bindBuffer(target, buffer);
    gl.bufferData(target, data, gl.STATIC_DRAW);
    return buffer;
  }
  function importMyData(gl,vertexPos,vertexNormals,vertexColors,triangleIndices)
      {
        var trianglePosBuffer = createMyBuffer(gl,gl.ARRAY_BUFFER,vertexPos);
        trianglePosBuffer.itemSize = 3;
        trianglePosBuffer.numItems = vertexPos.length/3;
      
      // a buffer for normals
      var triangleNormalBuffer = createMyBuffer(gl,gl.ARRAY_BUFFER,vertexNormals);
      triangleNormalBuffer.itemSize = 3;
      triangleNormalBuffer.numItems = vertexNormals.length/3;
      
      // a buffer for colors
      var colorBuffer = createMyBuffer(gl,gl.ARRAY_BUFFER, vertexColors);
      colorBuffer.itemSize = 3;
      colorBuffer.numItems = vertexColors.length/3;
  
      // a buffer for indices
      var indexBuffer = createMyBuffer(gl,gl.ELEMENT_ARRAY_BUFFER, triangleIndices);
      return [trianglePosBuffer,triangleNormalBuffer,colorBuffer,triangleIndices,indexBuffer]
  }

  function importMyDataWithTexture(gl,vertexPos,vertexNormals,vertexColors,triangleIndices,vertexTextureCoords)
      {
        var trianglePosBuffer = createMyBuffer(gl,gl.ARRAY_BUFFER,vertexPos);
        trianglePosBuffer.itemSize = 3;
        trianglePosBuffer.numItems = vertexPos.length/3;
      
      // a buffer for normals
      var triangleNormalBuffer = createMyBuffer(gl,gl.ARRAY_BUFFER,vertexNormals);
      triangleNormalBuffer.itemSize = 3;
      triangleNormalBuffer.numItems = vertexNormals.length/3;
      
      // a buffer for colors
      var colorBuffer = createMyBuffer(gl,gl.ARRAY_BUFFER, vertexColors);
      colorBuffer.itemSize = 3;
      colorBuffer.numItems = vertexColors.length/3;

      // a buffer for textures
      var textureBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertexTextureCoords, gl.STATIC_DRAW);
      textureBuffer.itemSize = 2;
      textureBuffer.numItems = vertexTextureCoords.length/2;
  
      // a buffer for indices
      var indexBuffer = createMyBuffer(gl,gl.ELEMENT_ARRAY_BUFFER, triangleIndices);
      return [trianglePosBuffer,triangleNormalBuffer,colorBuffer,triangleIndices,textureBuffer,indexBuffer]
  }

  function importMyShaderProgram(gl,vertexShaderName,fragmentShaderName) {
    var vertexSource = document.getElementById(vertexShaderName).text;
      var fragmentSource = document.getElementById(fragmentShaderName).text;
      var vertexShader = compileMyShader(gl, gl.VERTEX_SHADER, vertexSource);
      var fragmentShader = compileMyShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
      var shaderProgram = createMyProgram(gl, vertexShader, fragmentShader);
      setupAttributesAndUniforms(gl, shaderProgram);
      return shaderProgram;
  }

  function importMyTextureShaderProgram(gl,vertexShaderName,fragmentShaderName) {
    var vertexSource = document.getElementById(vertexShaderName).text;
      var fragmentSource = document.getElementById(fragmentShaderName).text;
      var vertexShader = compileMyShader(gl, gl.VERTEX_SHADER, vertexSource);
      var fragmentShader = compileMyShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
      var shaderProgram = createMyProgram(gl, vertexShader, fragmentShader);
      setupAttributesAndUniformsWithTexture(gl, shaderProgram);
      return shaderProgram;
  }

  function loadTexture(gl, image,texture)
  {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);

  }