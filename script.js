



var t1 = gsap.timeline({
  ease: Power1.easeOuteaseOut,
  duration:1,
  scrollTrigger:{
 trigger:".gola img",
 strat:"top 40%",
  }
})

t1
.to(".gola img",{
  bottom:5,
  rotate:20,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:400,
  rotate:60,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:500,
  rotate:100,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:600,
  rotate:140,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:700,
  rotate:180,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:800,
  rotate:220,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:900,
  rotate:260,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:1000,
  rotate:300,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:1100,
  rotate:340,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:1200,
  rotate:360,
  ease: Power1.easeOuteaseOut,
})
.to(".gola img",{
  left:1300,
  rotate:400,
  ease: Power1.easeOuteaseOut,
})
.to("#blackline2",{
  right:18,
  rotate:90
})

var t2 = gsap.timeline()
t2
.to(".tube",{
  duration:5,
 delay:1,
 width:20,
backgroundColor:"black"
})



