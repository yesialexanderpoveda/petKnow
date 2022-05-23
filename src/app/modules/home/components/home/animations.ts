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
  
])

])
export const animationAbrowRight = trigger('animationAyeBrowRight', [

  transition('void => *', [

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
        
          ])),
          animate('3s', keyframes([
      
            style({ transform: 'scale(1,1) translateY(0)' }),
            style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
            style({ transform: 'scale(0.9, 1.1) translateY(-100px)' }),
            style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
            style({ transform: 'scale(1,1) translateY(-7px)' }),
            style({ transform: 'scale(1,1) translateY(0)' }),
        
          ]))
        
  ])



])
