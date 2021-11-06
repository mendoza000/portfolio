import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

export const animateHeader = (
	header, 
  firstPoint, 
  secondPoint, 
  thirdPoint, 
  fourthPoint, 
  fifthPoint, 
  sixthPoint ) => {

		gsap.from(header.current, {
			opacity: 0
		})

		gsap.to(header.current, {
			opacity: 1,
			duration: 1.5
		})

		gsap.from(firstPoint.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(firstPoint.current, {
			delay: 2.5,
			x: 100,
			ease: 'linear',
			y: 100,
			duration: 2
		})
		gsap.to(firstPoint.current, {
			rotate: 360,
			yoyo: true,
			duration: 2,
			delay: 2.5,
			repeat: -1,
			ease: 'linear'
		})
		
		gsap.from(secondPoint.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(secondPoint.current, {
			delay: 2.5,
			x: -100,
			ease: 'linear',
			y: 163,
			duration: 2
		})
		gsap.to(secondPoint.current, {
			rotate: 360,
			yoyo: true,
			duration: 2,
			delay: 2.5,
			repeat: -1,
			ease: 'linear'
		})

		gsap.from(thirdPoint.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(thirdPoint.current, {
			delay: 2.5,
			x: -110,
			ease: 'linear',
			y: -180,
			duration: 2
		})
		gsap.to(thirdPoint.current, {
			rotate: 360,
			yoyo: true,
			duration: 2,
			delay: 2.5,
			repeat: -1,
			ease: 'linear'
		})

		gsap.from(fourthPoint.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(fourthPoint.current, {
			delay: 2.5,
			x: 70,
			ease: 'linear',
			y: -100,
			duration: 2
		})
		gsap.to(fourthPoint.current, {
			rotate: 360,
			yoyo: true,
			duration: 2,
			delay: 2.5,
			repeat: -1,
			ease: 'linear'
		})

		gsap.from(fifthPoint.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(fifthPoint.current, {
			delay: 2.5,
			x: 120,
			ease: 'linear',
			y: -230,
			duration: 2
		})
		gsap.to(fifthPoint.current, {
			rotate: 360,
			yoyo: true,
			duration: 2,
			delay: 2.5,
			repeat: -1,
			ease: 'linear'
		})

		gsap.from(sixthPoint.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(sixthPoint.current, {
			delay: 2.5,
			x: 40,
			ease: 'linear',
			y: 220,
			duration: 2
		})
		gsap.to(sixthPoint.current, {
			rotate: 360,
			yoyo: true,
			duration: 2,
			delay: 2.5,
			repeat: -1,
			ease: 'linear'
		})

	}