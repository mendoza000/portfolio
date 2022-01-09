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
  sixthPoint,
  seventhPoint,
  eighthPoint,
  ninethPoint,
	tenthPoint, 
	eleventhPoint,
	twoeleventhPoint) => {

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

		/*gsap.from(seventhPoint?.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(seventhPoint?.current, {
			delay: 2.5,
			x: 200,
			ease: 'linear',
			y: 50,
			duration: 2
		})
		gsap.to(seventhPoint?.current, {
			rotate: 360,
			yoyo: true,
			duration: 2,
			delay: 2.5,
			repeat: -1,
			ease: 'linear'
		})*/

		gsap.from(eighthPoint?.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(eighthPoint?.current, {
			delay: 2.5,
			x: -200,
			ease: 'linear',
			y: -50,
			duration: 2
		})

		gsap.from(ninethPoint?.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(ninethPoint?.current, {
			delay: 2.5,
			x: -250,
			ease: 'linear',
			y: 100,
			duration: 2
		})

		gsap.from(tenthPoint?.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(tenthPoint?.current, {
			delay: 2.5,
			x: 250,
			ease: 'linear',
			y: -150,
			duration: 2
		})

		gsap.from(eleventhPoint?.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(eleventhPoint?.current, {
			delay: 2.5,
			x: -260,
			ease: 'linear',
			y: -210,
			duration: 2
		})

		gsap.from(twoeleventhPoint?.current, {
			opacity: 0,
			delay: 2,
		})
		gsap.to(twoeleventhPoint?.current, {
			delay: 2.5,
			x: 260,
			ease: 'linear',
			y: 200,
			duration: 2
		})
	}