<template>
  <div class="circle_container">
    <div class="circle_main">
      <div class="circle_text_container">
        <div class = "circle_text">
          Ciao, sono un elemento del tutorial.
        </div>
      </div>
    </div>
  </div>		
</template>

<script setup lang="ts">

</script>

<style scoped>
  .circle_container{
    position:fixed;
    right: 0;
    top: 0;
    width : 128px;
    height : 128px;
    margin : 0;
    padding : 0;
  /*	border : 1px solid red; */
  }

  /* Circle Main draws the actual circle */
  .circle_main{
    width : 100%;
    height : 100%;
    border-radius : 50%;
    border : 2px solid black;	/* can alter thickness and colour of circle on this line */
    margin : 0;
    padding : 0;
    background: blue
  }

  /* Circle Text Container - constrains text area to within the circle */
  .circle_text_container{
    /* area constraints */
    width : 70%;
    height : 70%;
    max-width : 70%;
    max-height : 70%;
    margin : 0;
    padding : 0;

    /* some position nudging to center the text area */
    position : relative;
    left : 15%;
    top : 15%;
    
    /* preserve 3d prevents blurring sometimes caused by the text centering in the next class */
    transform-style : preserve-3d;
    
    /*border : 1px solid green;*/
    color:aqua
  }

  /* Circle Text - the appearance of the text within the circle plus vertical centering */
  .circle_text{
    /* change font/size/etc here */
    /*font: 11px "Tahoma", Arial, Serif;	*/
    font-size: 100%;
    text-align : center;
    
    /* vertical centering technique */
    position : relative;
    top : 50%;
    transform : translateY(-50%);
  }

  

</style>