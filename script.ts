import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
	await prisma.user.deleteMany()
	const user =await prisma.user.create({
		data:{
			name: "Kyle",
			email:"rysiek@gmail.com",
			age: 21,
		userPreference:{
			create:{
				emailUpdates:true,
			},
		},
	},
	include:{
		userPreference:true,
	},
	})
	console.log(user);

  }
  
  main()
  .catch(e => console.error(e))
  .finally(async ()=>{
	await prisma.$disconnect()
  })