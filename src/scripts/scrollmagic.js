const controller = new ScrollMagic.Controller()

// const tween = TweenMax.to("#scrollMagic", 1, { rotation: 360, ease: Linear.easeNone });
const tween = TweenMax.to("#scrollMagic", 1, { scale: .3});

const containerScene = new ScrollMagic.Scene({
    triggerElement: '#trigger',
    triggerHook: .8,
    offset: 470,
    duration: 650
})
    .setTween(tween)
    .setPin("#scrollMagic")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
