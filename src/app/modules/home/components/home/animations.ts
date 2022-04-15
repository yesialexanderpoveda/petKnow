import{
animate,
query, 
sequence, 
stagger,
style,
state,
transition,
trigger,
keyframes
} from "@angular/animations";

export const animationAbrowLeft = trigger('animationAyeBrowLeft', [

  //....

  transition('void => *', [
    animate('3s', keyframes([
      style({ transform: 'rotate(-28deg) translate(-4px, -10x) translateX(-20px)'}),
      style({ transform: 'rotate(-20deg) translate(-4px, -8px) ' }),
      style({ transform: 'rotate(-12deg) translate(-4px, -5px)' }),
      style({ transform: 'rotate(0deg) translate(-4px, 0px) translateX(0px)' })
    ])),
    animate('2s', keyframes([
      style({ transform: 'rotate(-28deg) translate(-4px, -10x) translateX(-20px)'}),
      style({ transform: 'rotate(-20deg) translate(-4px, -8px) ' }),
      style({ transform: 'rotate(-12deg) translate(-4px, -5px)' }),
      style({ transform: 'rotate(0deg) translate(-4px, 0px) translateX(0px)' })
    ])),
    animate('3s', keyframes([
      style({ transform: 'rotate(-28deg) translate(-4px, -10x) translateX(-20px)'}),
      style({ transform: 'rotate(-20deg) translate(-4px, -8px) ' }),
      style({ transform: 'rotate(-12deg) translate(-4px, -5px)' }),
      style({ transform: 'rotate(0deg) translate(-4px, 0px) translateX(0px)' })
    ])),
    animate('3s', keyframes([
      style({ transform: 'rotate(-28deg) translate(-4px, -10x) translateX(-20px)'}),
      style({ transform: 'rotate(-20deg) translate(-4px, -8px) ' }),
      style({ transform: 'rotate(-12deg) translate(-4px, -5px)' }),
      style({ transform: 'rotate(0deg) translate(-4px, 0px) translateX(0px)' })
    ]))
])

])
export const animationAbrowRight = trigger('animationAyeBrowRight', [

  transition('void => *', [
    animate("3s", keyframes([
      style({ transform: 'rotate(28deg) translate(-4px, -9x) translateX(20px)'}),
      style({ transform: 'rotate(20deg) translate(-4px, -8px) ' }),
      style({ transform: 'rotate(12deg) translate(-4px, -5px)' }),
      style({ transform: 'rotate(0deg) translate(-4px, 0px) translateX(0px)' })
    ])),
    animate("2s", keyframes([
      style({ transform: 'rotate(28deg) translate(-4px, -9x) translateX(20px)'}),
      style({ transform: 'rotate(20deg) translate(-4px, -8px) ' }),
      style({ transform: 'rotate(12deg) translate(-4px, -5px)' }),
      style({ transform: 'rotate(0deg) translate(-4px, 0px) translateX(0px)' })
    ])),
    animate("4s", keyframes([
      style({ transform: 'rotate(28deg) translate(-4px, -9x) translateX(20px)'}),
      style({ transform: 'rotate(20deg) translate(-4px, -8px) ' }),
      style({ transform: 'rotate(12deg) translate(-4px, -5px)' }),
      style({ transform: 'rotate(0deg) translate(-4px, 0px) translateX(0px)' })
    ])),
    animate("3s", keyframes([
      style({ transform: 'rotate(28deg) translate(-4px, -9x) translateX(20px)'}),
      style({ transform: 'rotate(20deg) translate(-4px, -8px) ' }),
      style({ transform: 'rotate(12deg) translate(-4px, -5px)' }),
      style({ transform: 'rotate(0deg) translate(-4px, 0px) translateX(0px)' })
    ]))
 
])

])



export const animationDog = trigger("animationDog", [
  transition('void => *', [
  animate('3s', keyframes([
    style({ transform: 'scale(1,1) translateY(0)' }),
    style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
    style({ transform: 'scale(0.9, 1.1) translateY(-100px)' }),
    style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
    style({ transform: 'scale(1,1) translateY(-7px)' }),
    style({ transform: 'scale(1,1) translateY(0)' }),
  ])),
  animate('2s', keyframes([
    style({ transform: 'scale(1,1) translateY(0)' }),
    style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
    style({ transform: 'scale(0.9, 1.1) translateY(-100px)' }),
    style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
    style({ transform: 'scale(1,1) translateY(-7px)' }),
    style({ transform: 'scale(1,1) translateY(0)' }),
  ]))
])
])

export const animationCat = trigger("animationCat", [

  transition('* => void', [
    query('.cat', stagger('80ms', [
        animate('400ms cubic-bezier(0.6, 0, 0.5, 1)', style({opacity: 0, transform: 'translateY(20px)'}))
    ]))
]),

  transition('void => *', [

      
          animate('2s', keyframes([
      
            style({ transform: 'scale(1,1) translateY(0)' }),
            style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
            style({ transform: 'scale(0.9, 1.1) translateY(-100px)' }),
            style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
            style({ transform: 'scale(1,1) translateY(-7px)' }),
            style({ transform: 'scale(1,1) translateY(0)' }),
        
          ])),
          animate('2s', keyframes([
      
            style({ transform: 'scale(1,1) translateY(0)' }),
            style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
            style({ transform: 'scale(0.9, 1.1) translateY(-100px)' }),
            style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
            style({ transform: 'scale(1,1) translateY(-7px)' }),
            style({ transform: 'scale(1,1) translateY(0)' }),
        
          ]))
        
  ])



])
