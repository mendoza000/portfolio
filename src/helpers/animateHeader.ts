import { gsap } from "gsap";

interface Props {
	header: any, 
  firstPoint: any, 
  secondPoint: any, 
  thirdPoint: any, 
  fourthPoint: any, 
  fifthPoint: any, 
  sixthPoint: any,
  seventhPoint: any,
  eighthPoint: any,
  ninethPoint: any,
	tenthPoint: any, 
	eleventhPoint: any,
	twoeleventhPoint: any,
}

export const animateHeader = (props: Props) => {

		gsap.from(props.header.current, {
			opacity: 0
		})

		gsap.to(props.header.current, {
			opacity: 1,
			duration: 1.5
		})

		gsap.from([props.firstPoint.current, props.secondPoint.current, props.thirdPoint.current, props.fourthPoint.current, props.fifthPoint.current, props.sixthPoint.current, props.eighthPoint.current, props.ninethPoint.current, props.tenthPoint.current, props.eleventhPoint.current, props.twoeleventhPoint.current], {
			opacity: 0,
			delay: 2,
		})
		gsap.to(props.firstPoint.current, {
			delay: 2.5,
			x: 100,
			ease: 'linear',
			y: 100,
			duration: 2
		})
		
		gsap.to(props.secondPoint.current, {
			delay: 2.5,
			x: -100,
			ease: 'linear',
			y: 163,
			duration: 2
		})
		gsap.to(props.thirdPoint.current, {
			delay: 2.5,
			x: -110,
			ease: 'linear',
			y: -180,
			duration: 2
		})
		gsap.to(props.fourthPoint.current, {
			delay: 2.5,
			x: 70,
			ease: 'linear',
			y: -100,
			duration: 2
		})
		gsap.to(props.fifthPoint.current, {
			delay: 2.5,
			x: 120,
			ease: 'linear',
			y: -230,
			duration: 2
		})
		gsap.to(props.sixthPoint.current, {
			delay: 2.5,
			x: 40,
			ease: 'linear',
			y: 220,
			duration: 2
		})
		gsap.to(props.eighthPoint?.current, {
			delay: 2.5,
			x: -200,
			ease: 'linear',
			y: -50,
			duration: 2
		})
		gsap.to(props.ninethPoint?.current, {
			delay: 2.5,
			x: -250,
			ease: 'linear',
			y: 100,
			duration: 2
		})
		gsap.to(props.tenthPoint?.current, {
			delay: 2.5,
			x: 250,
			ease: 'linear',
			y: -150,
			duration: 2
		})
		gsap.to(props.eleventhPoint?.current, {
			delay: 2.5,
			x: -260,
			ease: 'linear',
			y: -210,
			duration: 2
		})
		gsap.to(props.twoeleventhPoint?.current, {
			delay: 2.5,
			x: 260,
			ease: 'linear',
			y: 200,
			duration: 2
		})
	}